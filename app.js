let menu= document.querySelector(".toggle-menu")
let list= document.querySelector("header ul")
let search= document.querySelector(".form i")
let searchBar=document.querySelector(".search")
let time=document.querySelector(".time")
let progh=document.querySelector(".skills")
let progrs=document.querySelectorAll(".prog-holder .prog span")
let statNem=document.querySelectorAll(".stats .number")
let stats=document.querySelector(".stats")
let scbtn=document.querySelector(".button-up")
let startd=false


menu.addEventListener("click",_=>{
    list.classList.toggle("open")
})
search.addEventListener("click",_=>{
    searchBar.classList.toggle("on")
})
time.innerText= new Date().getFullYear()




window.onscroll=_=>{
    if(scrollY>=1000){
        scbtn.classList.add("open")
    }else{
        scbtn.classList.remove("open")
    }

    if(window.scrollY >= stats.offsetTop-stats.offsetHeight){
        if(!startd){
            statNem.forEach(s=>{
                stat(s)
            })
            startd=true
        }
    }

function stat(s){
    let goll=s.dataset.golle
    let interval=setInterval(_=>{
        s.textContent++
        if(s.textContent==goll){
            clearInterval(interval)
        }
    },2000 / goll)
}

    if(window.scrollY >= progh.offsetTop - progh.offsetHeight){
        progrs.forEach(p=>{
            p.style.width=p.dataset.progress
        })
    }else{
        progrs.forEach(p=>{
            p.style.width='0%'
        })
    }
}


