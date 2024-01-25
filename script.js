const body = document.querySelector("body")
const menu = document.querySelector('.menu')
const menulis = document.querySelectorAll('.menuli')
const menulinks = document.querySelectorAll('.menulink')
const typeNameboys = document.querySelector('.typeNameBoys')
const typeNamegirls = document.querySelector('.typeNameGirls')
const typeNameBoys_animation = document.getElementById('typeNameBoys_animation')


body.style.backgroundColor = "var(--darkGray1)"
menu.style.display = "none"
menulis.forEach(menuli => {
    menuli.style.backgroundColor = "var(--darkGray2)"
})
menulinks.forEach(menulink => {
    menulink.style.color = "var(--white)"
})
typeNameboys.style.display = "block"
typeNamegirls.style.display = "none"


// typeNameBoys_animation.style.animationIterationCount = "infinite"






//      ALL FUNCTIONS 

function menubutton() {
    if(menu.style.display == "none"){
        menu.style.display = "block"
    }
    else{
        menu.style.display = "none"
    }
}

function darkmode() {
    if(body.style.backgroundColor == "var(--darkGray1)"){
        body.style.backgroundColor = "var(--white)"
        menu.style.backgroundColor = "var(--lightGray1)"
        menu.style.color = "var(--black)"
        menulis.forEach(menuli => {
            menuli.style.backgroundColor = "var(--lightGray2)"
        })
        menulinks.forEach(menulink => {
            menulink.style.color = "var(--black)"
        })
    }
    else{
        body.style.backgroundColor = "var(--darkGray1)"
        menu.style.backgroundColor = "var(--darkGray2)"
        menu.style.color = "var(--white)"
        menulis.forEach(menuli => {
            menuli.style.backgroundColor = "var(--darkGray2)"
        })
        menulinks.forEach(menulink => {
            menulink.style.color = "var(--white)"
        })
    }
}

function typeNameBoys() {
    typeNameboys.style.display = "block"
    typeNamegirls.style.display = "none"
    // typeNameBoys_animation.style.animationPlayState = "play"
    
}
function typeNameGirls() {
    typeNameboys.style.display = "none"
    typeNamegirls.style.display = "block"
}