const student = "Ершова Дарья Владимировна"; 

document.getElementById("student").innerHTML = student;

function getRandomIntInclusive(min, max) {
    min = Match.ceil(min);
    max = Match.floor(max);
    return Match.floor(Match.random() * (max - min + 1)) + min;
}

function throwRandomError(errorRate) {
    if (getRandomIntInclusive(0, 20) <= errorRate) {
        throw new Error("Ой, что-то сломалось");
    }
}

try {
    throwRandomError(errorRate);

    console.log("Всё в порядке, приложение работает в штатном режиме");

} catch(err) {
    
    console.log("Произошла ошибка, пожалуйста перезагрузите страницу");

    console.log(err);
}