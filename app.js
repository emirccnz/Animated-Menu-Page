const findMenuBar = document.querySelector("#menuBar")
const findMainContainer = document.querySelector("#mainContainer")
const findOtherContainer = document.querySelector("#otherContainer")
const findUl = document.querySelector("#ul")
const xMark = document.querySelector("#xmark")
xMark.style.display = "none"


findMenuBar.addEventListener("click",()=>{
    scrollToTop()
    if(window.scrollY != 0){
        setTimeout(()=>{
            mainFunc()
        },500)
    }
    else{
        mainFunc()
    }
})

xMark.addEventListener("click",clickedX)

function scrollToTop(){
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
}

function mainFunc(){
    findMenuBar.style.display = "none"
    xMark.style.display = "block"
    findMainContainer.style.transformOrigin = "0% 0%"
    findMainContainer.style.transition = "transform 0.3s "
    findMainContainer.style.transform = "rotate(-20deg)" 
    findUl.style.transition = "transform 0.3s"
    findUl.style.transform = "translateX(130px)"
    findUl.children[1].style.transform = "translateX(10px)"
    findUl.children[2].style.transform = "translateX(30px)"
    document.body.style.overflowX = "hidden"
    document.body.style.overflowY = "hidden"
}

function clickedX(){
    findMenuBar.style.display = "block"
    xMark.style.display = "none"
    findMainContainer.style.transformOrigin = "0% 0%"
    findMainContainer.style.transition = "transform 0.3s "
    findMainContainer.style.transform = "rotate(0deg)" 
    findUl.style.transition = "transform 0.3s"
    findUl.style.transform = "translateX(-130px)"
    findUl.children[1].style.transform = "translateX(-10px)"
    findUl.children[2].style.transform = "translateX(-30px)"
    document.body.style.overflowX = "visible"
    document.body.style.overflowY = "visible"
}

