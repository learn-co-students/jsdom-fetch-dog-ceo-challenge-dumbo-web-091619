// console.log('%c HI', 'color: firebrick')
var listOfDogs = []
document.addEventListener("DOMContentLoaded", function(){
dogbreeds()
dropDownSelector()
filterDogs()
addAlphabet()
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch(imgUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json){
    json.message.forEach(function(val){
      addImages(val)
  })

})

})

function addImages(dogPic){
  let dogUL = document.querySelector('#dog-image-container')
  let dogIMG = document.createElement('img')
  dogIMG.src = dogPic
  dogUL.append(dogIMG)
}


function dogbreeds(){
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json){
    listOfDogs = Object.keys(json.message)
    listOfDogs.forEach(function(val){
      addBreedsToList(val)
      })
    })
}


function addBreedsToList(breed){
  let dogBreedUL = document.querySelector("#dog-breeds")
  let dogBreedLi = document.createElement('li')
  dogBreedLi.innerText = breed
  dogBreedUL.append(dogBreedLi)
  dogBreedLi.addEventListener('click', function(){
    event.target.style.color = 'blue'
  })
}

function dropDownSelector(){
  const dropDown = document.querySelector('#breed-dropdown')
  dropDown.addEventListener('change', function(){
    let dogBreedLis = document.querySelectorAll("li")
    for (const breed of dogBreedLis){
      breed.remove()
    }
  })
}


function filterDogs(){
  let breedDropdown = document.querySelector('#breed-dropdown');
 breedDropdown.addEventListener('change', function (event) {
   let filtered = listOfDogs.filter(function(val){
      return val.startsWith(event.target.value)
   })
   console.log(filtered)
   let dogBreedUL = document.querySelector("#dog-breeds")
   for(let breed of filtered){
     let dogBreedLi = document.createElement('li')
     dogBreedLi.innerText = breed
     dogBreedUL.append(dogBreedLi)
   }
  });
}

function addAlphabet(){
  let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let breedDropdown = document.querySelector('#breed-dropdown');
  for(let letter of alpha){
    let choices = document.createElement('option');
    choices.value = letter
    choices.innerText = letter
    breedDropdown.append(choices)
  }
}
