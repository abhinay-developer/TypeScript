let sports:string[]=["cricket","baseball","Tennis"];
// for(let i=0;i<sports.length;i++){
//     console.log(sports[i]);
// }
//lets's use the simplified for loop
for(let tempSport of sports){
    if(tempSport=="cricket"){
console.log(tempSport+"<< My Favorite!");

}

else{
console.log(tempSport);
}
}