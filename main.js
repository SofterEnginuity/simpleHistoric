
// // apis from api ninjas site

document.querySelector('button').addEventListener('click', getGifs)

function getGifs(){ 
     const userInput = document.querySelector('#test').value 

let parts = userInput.split("-")
let year = parts[0]
let month = parts[1]
let day = parts[2]
console.log(parts[0])

      const url = `https://api.api-ninjas.com/v1/historicalevents?month=${month}&day=${day}`
    // const url = `https://api.api-ninjas.com/v1/historicalevents`
    const api = `/1+6k3+/YumDPj5gkqz+sg==m1HFVQpOaJhs5J5d`
      
      console.log(userInput)
     

    // console.log(day)
  // fetch goes inside the function so it doesnt run right away!
    fetch(url,// do'nt forget the comma bc the url is first p but method id also p
     {method: 'GET',
     headers: { 'X-Api-Key': api},
      contentType: 'application/json' })//reassign the link to something else for ease of access
    .then(res => res.json())//response comes from the fetch above to make it more readable
    .then(data =>{
        document.querySelector('p').innerHTML = ""// this line resets the code so that it doesnt stack when you change it!!
        
        data.forEach(histEvent => {// forEach data array, loop through each historical event 
document.querySelector('p').innerHTML += `<h2>${histEvent.year <0 ? -histEvent.year + " BC" : histEvent.year }</h2>${histEvent.event}<br>`//
        })
      console.log (data)//data come from the response abve

    })
.catch(err => {
    console.log(`error ${err}`)  
});
}


























// // Bobs Burgers

// document.querySelector('button').addEventListener('click', getWeather)

// function getWeather(){
//     const userInput = document.querySelector('input').value

// const url = `https://bobsburgers-api.herokuapp.com`
      
// fetch(url)
//     .then(res => res.json())
//     .then(data =>{
//         console.log(data)

//         document.querySelector('h2').innerText = data.drinks[0].strDrink
//         document.querySelector('img').src = data.drinks[0].strDrinkThumb
        
//     })

// }