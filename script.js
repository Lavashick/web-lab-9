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

function arrCut(arr) {
    let newArrNum = []
    if (arr.length != 0) {
        let lastNum = arr[arr.length - 1]
        for (let i = 0; i < arr.length - 1; i++) {
            newArrNum.push(arr[i])
        }
        if (newArrNum.length == 1) {
            console.log("Последнее число:", lastNum)
        } else {
            console.log("Последнее число:", lastNum, "осталось", newArrNum)
            arrCut(newArrNum)
        }
    }
}
console.log("Изначальный массив:", arrNums)
arrCut(arrNums)


outputConsole("\nЗАДАНИЕ 3")

function isPalindrome(word) {
    let middle = Math.floor(word.length / 2)
    for (let i = 0; i < middle; i++) {
        if (word[i] !== word[word.length - i - 1])
            return false
    }
    return true
}
let word = String(prompt("Введите слово:"))
console.log("Слово палиндром?", isPalindrome(word))

outputConsole("\nЗАДАНИЕ 4")

let matLen = 3
let allStr = ""
let newWord = ""
let matr = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]
for (let i = 0; i < matLen; i++) {
    for (let j = 0; j < matLen; j++) {
        matr[i][j] = randomInteger(0, 9)
    }
}
for (let i = 0; i < 3; i++) {
    newWord = String(matr[i])
    allStr += newWord
    allStr += "\n"
}

console.log("Изначальная матрица:\n", allStr)


function scalarMultiplication(num, matr) {
    let allStr = ""
    let newWord = ""
    let matr1 = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            matr1[i][j] = num * matr[i][j]
        }
    }
    for (let i = 0; i < 3; i++) {
        newWord = String(matr1[i])
        allStr += newWord
        allStr += "\n"
    }
    console.log("Перемноженная матрица:\n" + allStr)
}

let newMatrix = scalarMultiplication(5, matr)