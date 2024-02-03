var mainimg = document.getElementById("mainimg")
var smallimg = document.getElementsByClassName("small-img")


smallimg[0].addEventListener("click", ()=>{
  mainimg.src = smallimg[0].src
})
smallimg[1].addEventListener("click", ()=>{
    mainimg.src = smallimg[1].src
  })
  smallimg[2].addEventListener("click", ()=>{
    mainimg.src = smallimg[2].src
  })
  smallimg[3].addEventListener("click", ()=>{
    mainimg.src = smallimg[3].src
  })