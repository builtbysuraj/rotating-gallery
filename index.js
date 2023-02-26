const imageContainer = document.querySelector(".image-container")

const prevEle = document.getElementById("prev")
const nextEle = document.getElementById("next")

let x = 0
let timer

prevEle.addEventListener('click', () => {
  x += 45
  clearTimeout(timer)
  updateGallery()
})

nextEle.addEventListener('click', () => {
  x -= 45
  clearTimeout(timer)
  updateGallery()
})

const updateGallery = () => {
  imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`
  timer = setTimeout(() => {
    x -= 45;
    updateGallery()
  }, 2500)
}
updateGallery()