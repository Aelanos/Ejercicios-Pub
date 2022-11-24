
const meObj = {
    Name: "José",
    lastName: "Agar",
    age: 29,
    Size: 181,
    isDeveloper: "On my Way"
}

const propAge = "age"
console.log(meObj[propAge]);


// const listData = [
//     meObj,
//     { Name: "Matías", lastName: "Flores", age: 30, Size: 190, isDeveloper: false },
//     { Name: "Ignacio", lastName: "Soto", age: 29, Size: 180, isDeveloper: false }
// ]


// const orderedList = listData.sort((a, b) => b.age - a.age)
// console.log(orderedList);







const listData = [
    {
        ...meObj
    }, {
        Name: "Matías",
        lastName: "Flores",
        age: 30,
        Size: 190,
        isDeveloper: false,
        Name2: "Ignacio",
        lastName2: "Soto",
        age2: 29,
        Size2: 180,
        isDeveloper2: false
    }
]
console.log(listData);


const orderedList = listData.sort((a, b) => b.age - a.age)

console.log(orderedList);
