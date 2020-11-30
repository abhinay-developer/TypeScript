class Customer{
    firstName:string;
    lastName:string;
constructor(theFirst:string,theLast:string){
    this.firstName=theFirst;
    this.lastName=theLast;
}
}
//letis create object 
let myCustomer=new Customer("Abhinay","Galipally");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);