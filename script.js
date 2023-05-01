

ageCheck("00/00/0000")

function ageCheck(birthDate, currentDate) {
    
    let data = new Date();
    let birthDay = birthDate.substr(0, 2)
    let birthMonth = birthDate.substr(3, 2)
    let birthYear = birthDate.substr(6, 4)

    let currentDay = String(data.getDate()).padStart(2, '0');
    let currentMonth = String(data.getMonth() + 1).padStart(2, '0');
    let currentYear = data.getFullYear();
    currentDate = currentDay + '/' + currentMonth + '/' + currentYear;

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

