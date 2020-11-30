var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
//letis create object 
var myCustomer = new Customer("Abhinay", "Galipally");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
