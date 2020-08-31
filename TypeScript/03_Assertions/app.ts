let message='abc';
let result=(<String>message).endsWith('c');
let alternativeWay=(message as string).endsWith('c');
console.log(result);