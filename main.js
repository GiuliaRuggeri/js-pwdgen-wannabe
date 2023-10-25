//name
const   userName = prompt('inserisci il tuo nome');
//surname
const userSurname = prompt('inserisci il tuo cognome');
//favcolor
const userColor = prompt('inserisci il colore preferito');
//password
const userPassword =  userName + userSurname + userColor + '31'


//Console log
console.log(userName)
console.log(userSurname)
console.log(userColor)


//Password
document.getElementById('userpassword').innerHTML = (`La tua password è ${userPassword}`)



