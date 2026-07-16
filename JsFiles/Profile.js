const sidebar = document.querySelector('.sidebar')
const menuBtn = document.querySelector('#menu-btn')
const crossBtn = document.querySelector('.cross-btn')
const dynBtn = document.querySelector('#dyn-btn')
const sidebarDynBtn = document.querySelector('.sidebar ul #dyn-btn')
const viewSkills = document.querySelector('.view-skills')
const sidebarViewSkills = document.querySelector('.sidebar ul .view-skills')
const uploadSkills = document.querySelector('.upload-skills')
const sidebarUploadSkills = document.querySelector('.sidebar ul .upload-skills')

//Making the home button work
dynBtn.addEventListener('click',()=>{
    window.location.href = '../index.html'
})
sidebarDynBtn.addEventListener('click',()=>{
    window.location.href = '../index.html'
})

//Writing GSAP timelines
const tl = gsap.timeline()
tl.to(menuBtn, {
    opacity: 0
})
tl.to('.sidebar', {
    opacity: 1,
    x: '-300'
})
tl.pause()

//making the buttons functioning
menuBtn.addEventListener('click', (e) => {
    e.preventDefault()
    tl.play()
})
crossBtn.addEventListener('click', () => {
    tl.reverse()
})

//Uploading skills button
uploadSkills.addEventListener('click', () => {
        window.location.href = './UploadSkills.html'
})
sidebarUploadSkills.addEventListener('click', () => {
        window.location.href = './UploadSkills.html'
})

//Activating the View Skills button
viewSkills.addEventListener('click',()=>{
    window.location.href = './ViewSkills.html'
})
sidebarViewSkills.addEventListener('click',()=>{
    window.location.href = './ViewSkills.html'
})