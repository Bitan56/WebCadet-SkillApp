const sidebar = document.querySelector('.sidebar')
const menuBtn = document.querySelector('#menu-btn')
const crossBtn = document.querySelector('.cross-btn')
const dynBtn = document.querySelector('#dyn-btn')
const sidebarDynBtn = document.querySelector('.sidebar ul #dyn-btn')
const viewSkills = document.querySelector('.view-skills')
const sidebarViewSkills = document.querySelector('.sidebar ul .view-skills')
const uploadSkills = document.querySelector('.upload-skills')
const sidebarUploadSkills = document.querySelector('.sidebar ul .upload-skills')
const alertBoxContainer = document.querySelector('.alert-box-container')
const alertCross = document.querySelector('.alert-cross')

//Checking if the user is logged in and manipulating the dynamic button
if (localStorage.getItem('isLogged') == 'yes') {
    dynBtn.innerHTML = `Profile`
    sidebarDynBtn.innerHTML = `Profile`
    dynBtn.addEventListener('click', () => {
        window.location.href = './pages/Profile.html'
    })
    sidebarDynBtn.addEventListener('click', () => {
        window.location.href = './pages/Profile.html'
    })
}
dynBtn.addEventListener('click', () => {
    window.location.href = './pages/SignIn.html'
})
sidebarDynBtn.addEventListener('click', () => {
    window.location.href = './pages/SignIn.html'
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

//Showing the SignIn alert
alert = gsap.timeline()
alert.to(alertBoxContainer, {
    display: 'block',
    display: 'flex'
})
alert.from('.alert-box', {
    scale: 0
})
alert.pause()

alertCross.addEventListener('click', () => {
    alert.reverse()
})

uploadSkills.addEventListener('click', () => {
    if (localStorage.getItem('isLogged') == 'yes') {
        window.location.href = './pages/UploadSkills.html'
    }
    alert.play()
})
sidebarUploadSkills.addEventListener('click', () => {
    if (localStorage.getItem('isLogged') == 'yes') {
        window.location.href = './pages/UploadSkills.html'
    }
    alert.play()
})

//Activating the View Skills button
viewSkills.addEventListener('click',()=>{
    window.location.href = './pages/ViewSkills.html'
})
sidebarViewSkills.addEventListener('click',()=>{
    window.location.href = './pages/ViewSkills.html'
})