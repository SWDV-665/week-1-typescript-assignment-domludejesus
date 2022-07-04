var Grocery = /** @class */ (function () {
    function Grocery(name, desc, quan, currency, price) {
        this.name = name;
        this.desc = desc;
        this.quan = quan;
        this.currency = currency;
        this.price = price;
    }
    return Grocery;
}());
var bread = new Grocery("Bread", " Rye Bread ", 10, "USD($)", 2.50);
var oranges = new Grocery("Oranges", " Picked For Freshness ", 20, "USD($)", 7.99);
var yogurt = new Grocery("Yogurt", " Chobani Fresh ", 6, "USD($)", 4.50);
var chicken = new Grocery("Chicken", " 100% Real Chicken ", 10, "USD($)", 15.99);
var groceries = [];
groceries.push(bread);
groceries.push(oranges);
groceries.push(yogurt);
groceries.push(chicken);
var table = document.getElementById('groceries');
groceries.map(function (Grocery) {
    var name = Grocery.name, desc = Grocery.desc, quan = Grocery.quan, currency = Grocery.currency, price = Grocery.price;
    var row = table.insertRow();
    row.innerHTML = "\n            <td id=\"name\">".concat(name, "</td>\n            <td id=\"desc\">").concat(desc, "</td>\n            <td id=\"qty\">").concat(quan, "</td>\n            <td id=\"currency\">").concat(currency, "</td> \n            <td id=\"price\">").concat(price, "</td>");
});
