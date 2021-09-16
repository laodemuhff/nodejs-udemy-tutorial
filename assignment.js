const listNumber = [-1, 8, 5, 4, 1, 10, -2, 2]

const filteredNumber = listNumber.filter(number => number > 5)
const mappedNumber = listNumber.map(number => ({num : number}))
const reduceNumber = listNumber.reduce((preVal, curVal) => preVal * curVal, listNumber[0])

console.log(filteredNumber);
console.log(mappedNumber);
console.log(reduceNumber);

const findMax = (...numbers) => {
    let max = numbers[0] 
    let min = numbers[0] 

    for(const number of numbers){
        if(number > max){
            max = number
        }

        if(number < min){
            min = number
        }
    }

    return [max, min];
}

const [max, min] = findMax(...listNumber);
console.log(max, min);

const list = new Set([])

list.add(1)
list.add(1)
list.add(2)
list.add(3)
list.add(3)
list.add(1)

console.log(list.values());