function outputConsole(text) {
    console.log(text)
}

outputConsole("\nЗАДАНИЕ 1")
let student = {
    group: "201",
    last_name: "Сметанина",
    first_name: "Александра",
    surname: "Александровна"
}
let arrKeys = Object.keys(student)
console.log("Список свойств:", arrKeys[0] + ",", arrKeys[1] + ",", arrKeys[2] + ",", arrKeys[3])
console.log("Студент", student.first_name, student.last_name, "учится в группе", student.group)


outputConsole("\nЗАДАНИЕ 2")

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
let arrLen = 5
let arrNums = []
for (let i = 0; i < arrLen; i++) {
    arrNums[i] = randomInteger(0, 100)
}