
var data = new Date();
var dia = String(data.getDate()).padStart(2, '0');
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = data.getFullYear();
currentDate = dia + '/' + mes + '/' + ano;

ageCheck("23/12/2004", currentDate)

function ageCheck(birthDate, currentDate) {

    let birthDay = birthDate.substr(0, 2)
    let birthMonth = birthDate.substr(3, 2)
    let birthYear = birthDate.substr(6, 4)

    let currentDay = currentDate.substr(0, 2)
    let currentMonth = currentDate.substr(3, 2)
    let currentYear = currentDate.substr(6, 4)

    age = currentYear - birthYear
    
    if(currentMonth - birthMonth < 0) {
        age --
        console.log(age)
    } else if(currentDay - birthDay < 0) {
        age--
        console.log(age)
    } else {
        age
        console.log(age)
    }
}

