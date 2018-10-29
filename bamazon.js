var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Wake84148",
  database: "bamazon_db"
});

connection.connect(function(err){
  if (err){ console.log(err);
  } else {
    product_list();
  }
});

function product_list(){
  connection.query("SELECT * FROM products", function(err, res){
    if (err){console.log(err)
    } else {
      console.table(res);
      inquirer.prompt([
      {
        type: "list", 
        name: "purchaseAnswer",
        message: "Would you like to make a purchase?",
        choices: ["yes", "no"] 
      }
      ])
      .then(function(answer){
        if (answer.purchaseAnswer == "yes"){
          selectedItem(res);
        }else {
          console.log("thanks for visiting");
          process.exit(0);
        }
      });
    }
  });
}

  function selectedItem(res){
    inquirer.prompt([
      {
        type: "integer",
        name: "itemChoice", 
        message: "Please select item by entering item ID number"
      },
      {
        type: "integer",
        name: "quantity",
        message: "How many would you like?"
      }
    ])
    .then(function(answer){
      itemCheck(answer.itemChoice, answer.quantity, res);
    });
  }

  function itemCheck(itemID, quantity, inventory){
    for (var i = 0; i < inventory.length; i++){
      if (itemID == inventory[i].id){
        var item = inventory[i];
      } 
    } 
    if (!item){
      console.log("Sorry we do not carry that item");
      console.log("---------------------------------------------------------")
      console.log("");
      product_list();
    }else {
      if (quantity <= item.stock_quantity){
        updateDatabase(quantity, item);
      } else {
        console.log("Sorry we do not have that quantity in stock");
        console.log("----------------------------------------------------------");
        console.log("");
        product_list();
      }
    }
  }
  function updateDatabase(quantity, item){
    connection.query("UPDATE products SET stock_quantity = stock_quantity - ? WHERE id = ?",
    [quantity, item.id], function (err, res){
      if (err){
        console.log(err);
      } else {
        console.log("You have purchased " + item.product_name + ". Your Total price is $" + item.price*quantity);
        product_list();
      } 
    })
  }

  

  