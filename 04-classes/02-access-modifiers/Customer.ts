class Customer{
    private _firstName:string;
   private _lastName: string;
 
constructor(theFirst:string,theLast:string){
    this._firstName=theFirst;
    this._lastName=theLast;
}
public get firstName():string{
    return this.firstName;
}
public set firstName(value:string){
  this.firstName=value;
}
public get lastName(): string {
    return this._lastName;
}
public set lastName(value: string) {
    this._lastName = value;
}
}
//letis create object 
let myCustomer=new Customer("Abhinay","Galipally");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);