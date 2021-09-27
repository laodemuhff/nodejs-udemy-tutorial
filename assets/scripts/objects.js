// let multiplier = 1.1

// const calculateTax = amount => {
//     console.log('tax : ', tax)
//     console.log('multiplier:', multiplier)
//     return amount * tax * multiplier;
// }

// function defineTax(tax, multiplier){
//   return calculateTax;
// }


// const incomeTax = defineTax(0.25, 1)
// const VAT = defineTax(0.19,2)



// console.log(incomeTax(100))
// console.log(VAT(200))

// console.log(typeof 1)


// const getLocBtn = document.getElementById('locBtn')

function setTimer(duration) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve('Timer 2s Done!');
    }, duration)
  });

  return promise;
}

function getLocation(){
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      dataPost => {
        resolve(dataPost)
      },
      error => {
        reject(error)
      }
    )
  });

  return promise;
}

const getLocBtn = document.getElementById('locBtn')

async function trackUserLocation(){
  let posData;
  let result;
  try{
    posData = await getLocation();
    result = await setTimer(2000)
  }catch(error){
    console.log(error)
  }

  console.log(result, posData)

  setTimer(0).then(() => {
    console.log('Timer 0s Done...')
  })
  console.log('Get Your Location...')
}

// getLocBtn.addEventListener('click', trackUserLocation)

// function trackUserLocation(){
//   let positionData

//   getLocation()
//     .then(posData => {
//        positionData = posData
//        return setTimer(2000);
//     })
//     .then(result => {
//        console.log(success, positionData)
//     })
//     .catch(err => {
//         console.log(err)
//     })

//   setTimer(0).then(() => {
//     console.log('Testing Done...')
//   })
//   console.log('Get Your Location...')
// }

// function trackUserLocation(){
//   navigator.geolocation.getCurrentPosition(
//     posData => {
//          setTimeout(() => {
//            console.log(posData)
//          }, 2000)
//     }, error => {
//          let result = 0
//          for(let i = 0; i < 1000000000; i++){
//            result += i
//          }
//          console.log(result)
//     })

//   setTimeout(() => {
//     console.log("Testing Code..")
//   }, 0)

//   console.log('Get Your Location...')
// }

getLocBtn.addEventListener('click', trackUserLocation)





