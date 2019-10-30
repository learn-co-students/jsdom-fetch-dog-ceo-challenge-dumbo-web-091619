console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let dogDiv = document.querySelector("#dog-image-container")

let dogBreedUl = document.querySelector("#dog-breeds")

let dogUl = document.createElement("ul")
dogDiv.append(dogUl)

let dogButton = document.querySelector("#breed-dropdown")
console.log(dogButton.value)



fetch(imgUrl)
.then(res => res.json())
.then((resObj) => {
    resObj.message.forEach(element => {
        let dogLi = document.createElement("li")
        dogUl.append(dogLi)
        let dogImg = document.createElement("img")
        dogLi.append(dogImg)
        dogImg.src = element
    });
})

fetch(breedUrl)
.then(res => res.json())
.then((resObj) => {
    // console.log(resObj.message)
    for(let element in resObj.message) {
        let dogLi = document.createElement("li")
        dogBreedUl.append(dogLi)
        dogLi.innerText = element
        dogLi.classList.add("dog-list-item");
        dogLi.addEventListener("click", (event) => {
            dogLi.style.color = "red"
        })
    }
    // for(let element in dogBreedUl){
    //     console.log(element)
    // }
    dogButton.addEventListener("change", (event) => {
        const dogListItems = document.querySelectorAll(".dog-list-item")

        dogListItems.forEach(listItem => {
            if (dogButton.value === "a") {
                if (listItem.innerText[0] !== "a") {
                    listItem.style.display = "none"                    
                }
                else {
                    listItem.style.display = "block"                    
                }
            }
            if (dogButton.value === "b") {
                if (listItem.innerText[0] !== "b") {
                    listItem.style.display = "none"
                }
                else {
                    listItem.style.display = "block"
                }
            }
            if (dogButton.value === "c") {
                if (listItem.innerText[0] !== "c") {
                    listItem.style.display = "none"
                }
                else {
                    listItem.style.display = "block"
                }
            }
            if (dogButton.value === "d") {
                if (listItem.innerText[0] !== "d") {
                    listItem.style.display = "none"
                }
                else {
                    listItem.style.display = "block"
                }
            }
        })
    })
   

    
})
