// const arr = [1,2,3,4,5];


// let sum = 0;

// for (let i = 0; i < 3; i--) {
//     console.log(i)
// }








// for (var i = 0; i < 10; i++) {
//     sum = sum + i
// }

// console.log(i)
// console.log(sum)


// let count = 0;
// console.log(count++);
// console.log(count++);
// console.log(++count);



// class Car {
//     constructor (name,color,age) {
//         this.name = name;
//         this.color = color;
//         this.age = age
//     }

//     volume (voice) {
//         alert(voice)
//     }

//     get dog () {
//         alert('Gevorg')       
//     }
// }

// const newCar = new Car('shark','gray',6);
// newCar.volume

// console.log(newCar)


// let str = 'hello';
// let str2 = str.toLocaleUpperCase()
// let num = 85

// let float = 54651.589
// console.log(str2)
// console.log(num.toString(36))
// console.log(float.toPrecision(2))

// console.log('hello' + {});

// let num = [3,0,6]
// let sum = 0;
// for (let i = 0; i < num.length; i++) {
//    sum = sum + num[i] 
// }
// console.log(sum)




// const line = document.querySelector('span');

// line.addEventListener('mouseenter', function () {
//     line.style.border = '3px solid red'
// })



const url = 'https://jsonplaceholder.typicode.com/posts';
fetch(url)
.then(data => {
    console.log(data);
    // data.text().then(data2 => {
    //     console.log(data2)
    // })
    return data.text()
})
.then(data => {
    console.log(data)
})

fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })

  .then(response => response.text())
  .then(response => {
    console.log(response)
  })