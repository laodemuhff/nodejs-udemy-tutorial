// set
const person1 = {name : "Farhan"}
const personData = new Map([
	[person1, [{"age": 25}]],
	["salary", 2500000]
])
console.log(personData.get(person1)) // [ Object ]
console.log(personData.get("salary")) // 2500000

for(const item of personData.keys()){
    console.log(item)
}


// console.log(dataMap.get(objk));

// for(const item of dataMap){
//     console.log(item);
// }

for(const [key, value] of personData){
    console.log(key,value);
}

// const ids = new Set([11,56,66,78,11])

// ids.add()


// console.log(ids.values());

// console.log(ids.has(data));

// ids.delete(56)
// console.log(ids.values());


// const ids = [11,56,66,78,11]
// ids.splice(1,1)
// console.log(ids);


// const dataSet = []
// for(const item2 of ids.values()){
//     dataSet.push(item2)
// }
// console.log(dataSet[0])
// output : 11

