const sayHello = name => console.log(`Hi ${name}`);
const sayHello1 = (name, phrase = "Hello") => console.log(`${phrase} ${name}`)
const sayHello2 = () => console.log(`Hi Fauzan`)
const sayHello3 = (name, phrase = "Hello") => phrase + ' ' + name; 

sayHello("Farhan");
sayHello1("Dimas", "Hi");
sayHello2()
console.log(sayHello3("Aji"))

const checkinput = (callback, ...data) => {
    let found = false;
    for(const item of data){
        if(item === ''){
            found = true
        }
    }
    if(!found){
        callback();
    }
}

const sayHi = () => {
    alert('There is No Empty String');
}

checkinput(sayHi, 'test', 'asdasd', 'adasd', 'xx', 'asdasdasd');