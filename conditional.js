let age = 15

if (age >= 17) {
    console.log("You Can Now Create An ID Card")
} else {
    console.log("You Are Not Allowed To Create an ID Card")
}

let grade = "B"

if (grade === "A") {
    console.log("Excellent Result")
} else if (grade === "B") {
    console.log("Great Result")
} else if (grade === "C") {
    console.log("Average Result!")
} else {
    console.log("Invalid Grade!")
}


let now = new Date()
let day = now.getDay() // 2

switch (day) {
    case 0:
    console.log("Minggu")
    break
case 1:
    console.log("Senin")
    break
case 2:
    console.log("Selasa")
    break
case 3:
    console.log("Rabu")
    break
case 4:
    console.log("Kamis")
    break
case 5:
    console.log("Jum'at")
    break
default:
    console.log("Sabtu")
}


let a = 1

if (a) {
    console.log(true)
} 


let kata = "JavaScript"

console.log(kata === 'JavaScript' ? 'JavaScript' : "JavaScript")
