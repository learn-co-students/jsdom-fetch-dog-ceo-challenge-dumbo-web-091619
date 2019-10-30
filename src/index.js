console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"

 let dogOption = document.getElementById("breed-dropdown")

dogOption.addEventListener("change", function(e){
    //this literally pushes out the value of the option in the dropdown
    // console.log(this.value)

    let dogLis = document.querySelectorAll("ul#dog-breeds li")
    console.log(dogLis)
    const results = Object.values(dogLis).filter(li => li.innerText.charAt(0) === `${this.value}`)
    let dogUl = document.getElementById("dog-breeds")
    dogUl.innerHTML = ""
    results.forEach(element => {
        let dogLi = document.createElement("li")
        let dogP = document.createElement("p")
        let dogSmall = document.createElement("small")

        dogP.innerText = element.innerText
        dogSmall.innerText = element.children[1].innerText

        dogLi.append(dogP)
        dogLi.append(dogSmall)    
        dogUl.append(dogLi)
    });
})

fetch(imgUrl)
.then(res => res.json())
.then((obj) => {
let images = obj["message"]
console.log(images)
images.forEach(element => {
    let dogLi = document.createElement("li")
    let dogImg = document.createElement("img")
    let dogUl = document.getElementById("dog-image-container")


    dogImg.src = element
    
    dogLi.append(dogImg)
    dogUl.append(dogLi)
});


})



fetch(breedUrl)
.then(res => res.json())
.then((obj) => {
let breeds = obj["message"]
console.log(breeds)
for(var element in breeds) {

    let dogLi = document.createElement("li")
    let dogP = document.createElement("p")
    let dogSmall = document.createElement("small")
    let dogUl = document.getElementById("dog-breeds")


    dogP.innerText = element
    dogSmall.innerText = breeds[element]
    
    dogLi.append(dogP)
    dogLi.append(dogSmall)
    dogUl.append(dogLi)
    dogLi.addEventListener("click", function(){
        dogLi.style.color = "rgb(155, 12, 21)"


    })

};


})
