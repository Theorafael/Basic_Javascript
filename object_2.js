// Lesson 31.2
function person(length, width, height) {
    return console.log(length * width * height)
}

person(15, 100, 200)

// Lesson 32.2
function main() {
    
    var flightNumber = "NGT 929";
    var flightStatus = "Landed";
    var flight1= new Flight(flightNumber,
    flightStatus);
    console.log('The flight ' + flight1.number
    + ' is ' + flight1.status);
}
function Flight(flightNumber, status) {
    this.number = flightNumber;
    this.status = status;
};
main()


// Lesson 34.2
function main() {
    var prodID = "LD1493";
    var price = 1700;
    var discount = 15;

    var prod1= new Product(prodID, price);
    console.log(prod1.prodID + " price: " + prod1.price);

    prod1.changePrice(discount);
    console.log(prod1.prodID + " new price: " + prod1.price);
}

function Product(prodID, price) {
    this.prodID = prodID;
    this.price = price;

    this.changePrice = function(discount) {

        return this.price = this.price - ((discount/100) * this.price );   
    }
}
main()



// Lesson 36
function contact(name, number) {
    this.name = name;
    this.number = number;
    this.print = print; 
    } 
    function print() { 
console.log(this.name + ": " + this.number);
}
var a = new contact("David", 12345);
var b = new contact("Amy", 987654321);
a.print();
b.print();