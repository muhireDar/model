const openmodal=document.querySelector(".openmodal")
const model =document.querySelector(".model")
const overlay =document.querySelector(".overlay")
const close_model_btn = document.querySelector(".close-model-btn")

console.log(close_model_btn);


openmodal.addEventListener("click",function() {
    model.classList.remove("hidden")
    overlay.classList.remove("hidden")
})

close_model_btn.addEventListener("click", close)
overlay.addEventListener("click",close) 
    console.log("clicked");
    function close(){
    
    overlay.classList.add("hidden")
    model.classList.add("hidden")
}