const accountId=1111
let accountEmail="a@gmail.com"
var accountPasswword="3454"

accountCity="JSR"

//accountId=2 not allowed because it defines constant

accountEmail="2@gmail.com"
accountPasswword="5678"

/*
prefer not use var
beacuse of issue block scope and functional block
*/

console.log(accountId);
console.table([accountEmail,accountId,accountPasswword,accountCity]);