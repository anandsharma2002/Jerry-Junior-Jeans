const body = document.querySelector("body")
const menu = document.querySelector('.menu')
const menulis = document.querySelectorAll('.menuli')
const menulinks = document.querySelectorAll('.menulink')
const story_section = document.querySelector('.story_section')
const storyCardA = document.querySelectorAll(".storyCard_a")
const story_circleImgs = document.querySelectorAll(".story_circle_img")
const typeNameboys = document.querySelector('.typeNameBoys')
const typeNamegirls = document.querySelector('.typeNameGirls')
const typeNameBoys_animation = document.getElementById('typeNameBoys_animation')
const typeNameButtons = document.querySelectorAll('.typeNameButton')




body.style.backgroundColor = "var(--darkGray1)"
// body.style.backgroundColor = "var(--white)"
menu.style.display = "none"
menulis.forEach(menuli => {
    menuli.style.backgroundColor = "var(--darkGray2)"
})
menulinks.forEach(menulink => {
    menulink.style.color = "var(--white)"
})
typeNameboys.style.display = "block"
typeNamegirls.style.display = "none"
story_section.style.borderBottom = "2px solid var(--white)"
storyCardA.forEach(storyCard_a => {
    storyCard_a.style.color = "var(--white)"
})
story_circleImgs.forEach(story_circle_img => {
    story_circle_img.style.border = "2px solid var(--white)"
})

typeNameButtons.forEach(typeNameButton => {
    typeNameButton.style.color = "var(--white)"
    typeNameButton.style.borderBottom = "2px solid var(--white)"
})




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
        storyCardA.forEach(storyCard_a => {
            storyCard_a.style.color = "var(--black)"
        })
        story_circleImgs.forEach(story_circle_img => {
            story_circle_img.style.border = "2px solid var(--black)"
        })
        story_section.style.borderBottom = "2px solid var(--black)"
        typeNameButtons.forEach(typeNameButton => {
            button.style.color = "var(--black)"
        })
        typeNameButtons.forEach(typeNameButton => {
            typeNameButton.style.color = "var(--black)"
            typeNameButton.style.borderBottom = "2px solid var(--black)"
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
        storyCardA.forEach(storyCard_a => {
            storyCard_a.style.color = "var(--white)"
        })
        story_circleImgs.forEach(story_circle_img => {
            story_circle_img.style.border = "2px solid var(--white)"
        })
        story_section.style.borderBottom = "2px solid var(--white)"
        typeNameButtons.forEach(typeNameButton => {
            button.style.color = "var(--white)"
        })
        typeNameButtons.forEach(typeNameButton => {
            typeNameButton.style.color = "var(--white)"
            typeNameButton.style.borderBottom = "2px solid var(--white)"
        })

    }
}

function typeNameBoys() {
    typeNameboys.style.display = "block"
    typeNamegirls.style.display = "none"
}
function typeNameGirls() {
    typeNameboys.style.display = "none"
    typeNamegirls.style.display = "block"
}
