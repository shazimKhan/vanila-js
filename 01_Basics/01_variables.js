const accountId = 144553
let accountEmail = "shazim96khan@gmail.com"
var accountPassword = "12345"
accountCity = "islamabad"

// accountId = "2443" not allowed to change value due to constant

accountEmail = "shazim85@yahoo.com"
accountPassword = "3422"
accountCity = "Lahore"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail,accountPassword,accountCity])