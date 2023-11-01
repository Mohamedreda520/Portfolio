
//  code a where on click color change
let links = document.querySelectorAll(".linke li a");
links.forEach((a) =>{
    a.addEventListener("click", (e)=>{
        //remove active from a
        links.forEach((a)=>{
            a.classList.remove("active")
        })
        //add active to a
        e.currentTarget.classList.add("active")
        
    })
    
})

// code menubar where on click
let menubar = document.getElementById('menubar');
let ul = document.querySelector('.linke');
menubar.onclick = () => {
    menubar.classList.toggle('fa-times')
    ul.classList.toggle('active')

}
// window.onscroll = ()=>{
//     let headre = document.querySelector("header")
//     if (window.scrollY >=50) {
//        headre.style.background = "white";
//        headre.style.boxShadow = "0 0px 1px 0 rgb(0 0 0 / 80%)"
//     }
//     else{
//         headre.style.background = "none";
//         headre.style.boxShadow = "none"
//     }
// }
let body = document.querySelector("body")
let moon = document.querySelector(".fa-moon")
let text_sec = document.getElementById("text_sec")
let text_sec_before = window.getComputedStyle(text_sec,'before')
 



moon.addEventListener("click", function(){
    this.classList.toggle('fa-sun')
    if (this.classList.toggle('fa-moon')) {
        body.style.background = "#0F0F0F";
        body.style.color = "white";
        body.style.transtion = "2s";
        text_sec.style.setProperty('--beforBack','#0F0F0F') 
        
        
    }else{
    body.style.background = "white";
        body.style.color = "black";
        body.style.transtion = "2s";
        text_sec.style.setProperty('--beforBack','white')
        
           }
})

//animat for change text
let text = document.querySelector(".text-sec")
let textlode = ()=> {
    setTimeout(() => {
        text.textContent = "Front-Eend Developer";
    }, 0)
    setTimeout(() => {
        text.textContent = "FreeLancer"
    }, 4000)
    setTimeout(() => {
        text.textContent = "Designer"
    }, 8000)
    
}
textlode()
setInterval(textlode,12000)


// filter

let cards = document.querySelectorAll('.content .card');
let Ul = document.querySelectorAll('.filter ul li');
Ul.forEach((li)=>{
    li.addEventListener('click', (el)=>{
        Ul.forEach((a)=>{
            a.classList.remove('active')
        })
    el.currentTarget.classList.add('active')
        let text_Li = el.currentTarget.textContent;
        cards.forEach((card)=>{
            card.style.display = 'none';
            if (card.getAttribute('data-filter') == text_Li.toLowerCase() || text_Li == "All") {
                card.style.display = 'block';
            }
        })
        
        })
})




