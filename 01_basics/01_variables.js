const accountId=144553
let accountEmail="prabhatverma.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState;


//accountId=2
accountEmail="hc@hm.com"
accountPassword="1212"
accountCity="bengaluru"

/*
prefer not to use var
because of issue in block scope and functional scope
*/


console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])