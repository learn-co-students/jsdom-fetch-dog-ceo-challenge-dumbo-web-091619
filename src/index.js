// document.addEventListener("DOMContentLoaded", function(){
// const dogsDiv = document.getElementById('dog-image-container')
// fetch("https://dog.ceo/api/breeds/image/random")
// .then(response => response.json())
// .then((actualResponse) => { 
// let dogImg = document.createElement("img")
// dogImg.src = actualResponse.message
// dogsDiv.appendChild(dogImg)
//     })
// })


document.addEventListener("DOMContentLoaded", function(){
    // const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
      let dogDiv = document.getElementById("dog-image-container")
      let dogList = document.getElementById("dog-breeds")
      let breedDropdown = document.getElementById("breed-dropdown")
      fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then((dogsObj)=> {
      dogsObj.message.forEach( url => {
        let dogImg = document.createElement("img")
        dogImg.src = url
        console.log(dogImg.src)
        dogDiv.appendChild(dogImg)
      })
    })
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(response => response.json())
      .then((breedsList) => {
        let dogsArray = Object.keys(breedsList.message)
        dogsArray.forEach(breed =>{
            let dogBreedLi = document.createElement("li")
            dogBreedLi.innerText = breed
            dogList.appendChild (dogBreedLi)
            dogBreedLi.addEventListener("click", () => {
            dogBreedLi.style.color = 'red'})
        })
        
        breedDropdown.addEventListener('change', () => {
        // dogList.innerHTML = ""
        let child = dogList.lastElementChild
        while (child) { 
            dogList.removeChild(child) 
            child = dogList.lastElementChild 
        }  
        let value = breedDropdown.options[breedDropdown.selectedIndex].value
        let filteredArray = Object.keys(breedsList.message).filter(key => key.charAt(0) === value)
      filteredArray.forEach(breed =>{
        let dogBreedLi = document.createElement("li")
        dogBreedLi.innerText = breed
        dogList.appendChild (dogBreedLi)
        dogBreedLi.addEventListener("click", () => {
        dogBreedLi.style.color = 'red'})
        })
      })
      })
   })
