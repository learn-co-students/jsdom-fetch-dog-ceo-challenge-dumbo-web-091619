console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function(){
   let imageDiv = document.getElementById("dog-image-container")
   let imageUl = document.createElement("ul")
   let filterDropdown = document.getElementById("breed-dropdown")

   imageDiv.append(imageUl)

//=========================================================================

let restOfAlphabet = ["e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

restOfAlphabet.forEach(letter => {
filterDropdown.append(new Option(letter, letter))
})


filterDropdown.addEventListener('change', function(){
    let dogBreedUl = document.getElementById("dog-breeds")
        while(dogBreedUl.children.length > 0) {
        dogBreedUl.removeChild(dogBreedUl.querySelector('li'));
    }

    let userOption = filterDropdown.value

    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    .then(function(actualResponse){
        let breedNameArray = Object.keys(actualResponse.message)
        let filteredBreedNameaArray = breedNameArray.filter(breed => breed.startsWith(userOption))
        
        filteredBreedNameaArray.forEach(breed => {
            let dogLi = document.createElement("li")
            dogLi.innerText = breed
            dogLi.addEventListener('click', function(){
                event.target.style.color = 'purple';
            })
            dogBreedUl.append(dogLi)    
        })

    })
})


//=================================================================



    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(function(actualResponse){

        let imageArray = actualResponse.message

        imageArray.forEach(imageUrl => {
            let dogLi = document.createElement("li")
            let dogImage = document.createElement("img")
        
            dogImage.src = imageUrl
            dogImage.alt = "dog"
            imageUl.append(dogImage)
           });  
    })
    getList()
})

function getList(){
    let dogBreedUl = document.getElementById("dog-breeds")

 fetch("https://dog.ceo/api/breeds/list/all")
 .then(res => res.json())
 .then(function(actualResponse) {
     console.log(Object.keys(actualResponse.message))
     Object.keys(actualResponse.message).forEach(breed => {
         let dogLi = document.createElement("li")
         dogLi.innerText = breed
         dogLi.addEventListener('click', function(){
             event.target.style.color = 'blue';
         })
         dogBreedUl.append(dogLi)
     })
  
 })
  
 }

