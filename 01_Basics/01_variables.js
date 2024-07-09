const accountId = 12345213456
let accountEmail = "himanshu@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

// accountId = 123

accountEmail = "bharti@gmail.com"
accountPassword = "6789"
accountCity = "Noida"

console.log(accountId)

// prefer not to use var
// because of issue in block scope and fuctional scope  

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])