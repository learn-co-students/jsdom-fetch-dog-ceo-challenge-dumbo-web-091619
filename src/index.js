console.log('%c HI', 'color: firebrick')

const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function () {
  const breeds = []
  const dogImageContainer = document.querySelector('#dog-image-container')
  const breedDropDown = document.querySelector('#breed-dropdown')
  const dogBreedsUnorderedList = document.querySelector('#dog-breeds')

  // Challenge 1
  fetch (imgUrl) // eslint-disable-line
    .then(resp => resp.json())
    .then(addImagesToDom)

  // Challenge 2 and 3
  fetch (breedUrl) // eslint-disable-line
    .then(resp => resp.json())
    .then(json => addBreedsToUL(Object.keys(json.message)))

  // Challenge 4
  breedDropDown.addEventListener('change', e => {
    filterDropDownBy(e.target.value)
  })

  function addImagesToDom (jsonData) {
    for (const imageURL of jsonData.message) {
      createAndAddImageTo(dogImageContainer, imageURL)
    }
  }

  function createAndAddImageTo (container, imageURL) {
    const image = document.createElement('img')
    image.src = imageURL
    container.append(image)
  }

  function addBreedsToUL (allBreeds) {
    for (const breed of allBreeds) {
      addBreedToUL(dogBreedsUnorderedList, breed)
      breeds.push(breed)
    }
  }

  function addBreedToUL (breedUL, breed) {
    const breedListElement = document.createElement('li')
    breedListElement.innerText = breed
    breedUL.append(breedListElement)
    addOnClickEventAndChangeColorFor(breedListElement)
  }

  function addOnClickEventAndChangeColorFor (element) {
    element.addEventListener('click', e => { e.target.style.color = 'red' })
  }

  function filterDropDownBy (startLetter) {
    removeAllLI()
    const filteredBreeds = breeds.filter(breed => breed.startsWith(startLetter))
    addBreedsToUL(filteredBreeds)
  }

  function removeAllLI () {
    const allLI = document.querySelectorAll('li')
    for (const li of allLI) {
      li.remove()
    }
  }
})
