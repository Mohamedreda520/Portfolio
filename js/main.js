
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

// Dark mode
let btnmode = document.getElementById('btn');
let btntext = document.getElementById('btn-text');
let btnicon = document.getElementById('btn-icon');
btnmode.onclick = function () {
    document.body.classList.toggle('dark-them')

    if (document.body.classList.contains('dark-them')) {
        btnicon.src = "imags/sun.PNG";
        btntext.innerHTML = "Light"
    } else {
        btnicon.src = "imags/moon.PNG";
        btntext.innerHTML = "Dark"   
         
    }
} 

//animat for change text
// let text = document.querySelector(".text-sec")
// let textlode = ()=> {
//     setTimeout(() => {
//         text.textContent = "Front-Eend Developer";
//     }, 0)
//     setTimeout(() => {
//         text.textContent = "FreeLancer"
//     }, 4000)
//     setTimeout(() => {
//         text.textContent = "Designer"
//     }, 8000)
    
// }
// textlode()
// setInterval(textlode,12000)


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




