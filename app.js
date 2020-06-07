// Chapter # 1

// Task # 1
alert("Welcome to our website!");

// Task # 2
alert("Error! Please enter a valid password.");

// Task # 3
alert("Welcome to JS Land...\nHappy Coding!");

// Task # 4
alert("Welcome to JS Land...");
alert("Happy Coding!");

// Task # 5
alert("Hello... I can run JS through my web browser's console");

// Task # 6 and 7
function btnAlert() {
    alert("You clicked the button!");
}

// Chapter # 2

// Task # 1
var username;

// Task # 2
var myName = "Abdul Mateen Banglore";

// Task # 3
var message = "Hello World!";
alert(message);

// Task # 4
var studentName = "Abdul Mateen";
var studentAge = "21 years old";
var studentCourse = "Certified Mobile Application Development";
alert(studentName);
alert(studentAge);
alert(studentCourse);

// Task # 5
var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(pizza);

// Task # 6
var email = "am62287@gmail.com";
alert("My email address is " + email);

// Task # 7
var book = "A smarter \nway to learn JavaScript";
alert("I am trying to learn from the Book " + book);

// Task # 8
document.write("<br>");
document.write("Yah! I can write HTML content through JavaScript");

// Task # 9
var specialString = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
alert(specialString);
document.write("<br>");
document.write("<br>" + specialString);

// Chapter # 3

// Task # 1
var age = 26;
alert("I am " + age + " years old");

// Task # 2
var n = localStorage.getItem('on_load_counter');
if (n === null) {
    n = 0;
}
n++;
localStorage.setItem("on_load_counter", n);
// document.getElementById('CounterVisitor').innerHTML = n;
alert("You have visited this site " + n + " times");

// Task # 3
var birthYear = "1993";
document.write("<br>");
document.write("<br>");
document.write("My birth year is " + birthYear);
document.write("<br>");
document.write("Data type of my declared variable is number");

// Task # 4
var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;
document.write("<br>");
document.write("<br>");
document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing Store");

// Chapter # 4

// Task # 1
var variable1 = "JavaScript",
    variable2 = "is",
    variable3 = "Cool!";

// Task # 2
// Legal variable names:
var variable1;
var $variable2;
var _variable3;
var my_4thvariable;
var $my_5thvariable;
/* 
Illegal variable names:
var 1stnum;
var 2ndnum;
var 3rdnum;
var 4thnum;
var 5thnum; 
*/

// Task # 3
var str1 = "letters",
    str2 = "numbers",
    str3 = "underscores",
    str4 = "dollar signs";
document.write("<h1>Rules for naming JS variables</h1>");
document.write("Variable names can only contain " + str1 + ", " + str2 + ", " + str3 + ", and " + str4 + ". For example $my_1stVariable");
document.write("<br>");
var str5 = "letter",
    str6 = "a dollar sign ($)",
    str7 = "an underscore (_)";
document.write("Variables must begin with a " + str5 + ", " + str6 + ", or " + str7 + ". For example $name, _name or name");
document.write("<br>");
var str8 = "case-sensitive";
document.write("Variable names are " + str8);
document.write("<br>");
var str9 = "keywords";
document.write("Variable names should not be JS " + str9);

// Chapter # 5

// Task # 1
var num1 = prompt("Enter first number:");
var num2 = prompt("Enter second number:");
var sum = (+num1) + (+num2);
document.write("<br>");
document.write("<br>");
document.write("Sum of " + num1 + " and " + num2 + " is " + sum);

// Task # 2
var num1 = prompt("Enter first number:");
var num2 = prompt("Enter second number:");
var sub = num1 - num2;
document.write("<br>");
document.write("Subtraction of " + num1 + " from " + num2 + " is " + sub);

var num1 = prompt("Enter first number:");
var num2 = prompt("Enter second number:");
var mult = num1 * num2;
document.write("<br>");
document.write("Multiplication of " + num1 + " and " + num2 + " is " + mult);

var num1 = prompt("Enter first number:");
var num2 = prompt("Enter second number:");
var divide = num1 / num2;
document.write("<br>");
document.write("Division of " + num1 + " and " + num2 + " is " + divide);

var num1 = prompt("Enter first number:");
var num2 = prompt("Enter second number:");
var mod = num1 % num2;
document.write("<br>");
document.write("Modulus of " + num1 + " and " + num2 + " is " + mod);

// Task # 3
document.write("<br>");
document.write("<br>");
var numvar;
document.write("Value after variable declaration is: " + numvar);
document.write("<br>");
numvar = 5;
document.write("Initial value: " + numvar);
document.write("<br>");
numvar++;
document.write("Value after increment is: " + numvar);
document.write("<br>");
numvar = numvar + 7;
document.write("Value after addition is: " + numvar);
document.write("<br>");
numvar--;
document.write("Value after decrement is: " + numvar);
document.write("<br>");
numvar = numvar % 3;
document.write("The remainder is: " + numvar);

// Task # 4
document.write("<br>");
document.write("<br>");
var ticketPrice = 600;
var ticketQuantity = 5;
var totalPrice = ticketQuantity * ticketPrice;
document.write("Total cost to buy " + ticketQuantity + " tickets to a movie is " + totalPrice + "PKR");

// Task # 5
document.write("<br>");
document.write("<br>");
var tablenum = 8;
document.write("Table of " + tablenum);
document.write("<br>");
for (var i = 1; i <= 10; i++) {
    document.write(tablenum + " x " + i + " = " + tablenum * i + "<br>");
}

// Task # 6
document.write("<br><br>");
var Cel = 25;
var Fah = (Cel * 9 / 5) + 32;
document.write(Cel + "°C" + " is " + Fah + "°F");
var Fahr = 70;
var Cels = (Fahr - 32) * 5 / 9;
document.write("<br>");
document.write(Fahr + "°F" + " is " + Cels + "°C");

// Task # 7
document.write("<br><br>");
document.write("<h1>Shopping Cart</h1>");
var price_item1 = 650;
var price_item2 = 100;
var quantity_item1 = 3;
var quantity_item2 = 7;
var shipping_charges = 100;
var totalCost = (price_item1 * quantity_item1) + (price_item2 * quantity_item2) + shipping_charges;
document.write("Price of item 1 is " + price_item1 + "<br>");
document.write("Quantity of item 1 is " + quantity_item1 + "<br>");
document.write("Price of item 2 is " + price_item2 + "<br>");
document.write("Quantity of item 2 is " + quantity_item2 + "<br>");
document.write("Shipping Charges " + shipping_charges);
document.write("<br><br>");
document.write("Total cost of your order is " + totalCost);

// Task # 8
document.write("<br><br>");
document.write("<h1>Marks Sheet</h1>");
var marks_obtained = 804;
var total_marks = 980;
var percentage = (marks_obtained / total_marks) * 100;
document.write("Total marks: " + total_marks + "<br>");
document.write("Marks obtained: " + marks_obtained + "<br>");
document.write("Percentage: " + percentage + "%");