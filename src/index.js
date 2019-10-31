    


    //1) Select Ids from the index.html and assign them to variables

    let button = document.querySelector("#button");
    let button1 = document.querySelector("#button1");

    let divTag = document.getElementById("dog-image-container");
    let dogUl = document.getElementById('dog-breeds')
    let bs = document.getElementById("bs")
  

    // 2) add an event listener to the the button i selected above : let button


    button.addEventListener("click", () => {


    // 3) Fetching the data
      fetch("https://dog.ceo/api/breeds/image/random/4")
      .then(res => res.json())
      .then((db) => {console.log(db);



    // 4)  loop around the data by using forEach:
        db.message.forEach(function(e) {
    //  5) create elements :
            let dogUl = document.createElement('ul');
            let dogLi = document.createElement("li");
            let dogImg = document.createElement("img")
    //  6) append the elements created to their child
            divTag.append(dogUl)
            dogUl.append(dogLi)
            dogLi.append(dogImg)
    //   7) assigning the image source to each element frm forEach
            dogImg.src = e

         });
  
      })

    //   8) if the Fetch doesn't respond with the correct data than catch any error
      .catch((error) => {
        console.error(error);
      })
    })
  
// ================================dog list==========================================



button1.addEventListener('click', (e) => {
     fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then((data) => {console.log(data);

    
        Object.keys(data.message).forEach(function(e) {
            let ul = document.createElement('ul');
            bs.append(ul)
            let li = document.createElement("li");
            li.innerText = e
            ul.append(li)

         });
    
    })




});