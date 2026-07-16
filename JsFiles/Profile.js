const sidebar = document.querySelector('.sidebar')
const menuBtn = document.querySelector('#menu-btn')
const crossBtn = document.querySelector('.cross-btn')
const dynBtn = document.querySelector('#dyn-btn')
const sidebarDynBtn = document.querySelector('.sidebar ul #dyn-btn')
const viewSkills = document.querySelector('.view-skills')
const sidebarViewSkills = document.querySelector('.sidebar ul .view-skills')
const uploadSkills = document.querySelector('.upload-skills')
const sidebarUploadSkills = document.querySelector('.sidebar ul .upload-skills')
const homeBtn = document.querySelector('.home-btn')
const sidebarHomeBtn = document.querySelector('.sidebar ul .home-btn')
const dataContainer = document.querySelector('.data-container')

async function checkAuth() {
    const isAuth = await localStorage.getItem('isLogged')
    if(!isAuth){
        window.location.href = './SignIn.html'
    }
}

checkAuth()

//Making the logout button work
dynBtn.addEventListener('click', async () => {
    await localStorage.clear()
    location.reload()
})
sidebarDynBtn.addEventListener('click', async () => {
    await localStorage.clear()
    location.reload()
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
viewSkills.addEventListener('click', () => {
    window.location.href = './ViewSkills.html'
})
sidebarViewSkills.addEventListener('click', () => {
    window.location.href = './ViewSkills.html'
})

//Activating the Home button
homeBtn.addEventListener('click',()=>{
    window.location.href = '../index.html'
})
sidebarDynBtn.addEventListener('click',()=>{
    window.location.href = '../index.html'
})

//Injecting the Profile Data
dataContainer.innerHTML = `
<div class="data-box">
            <div class="data-head">Name:</div>
            <div class="data-content">${localStorage.getItem('name')}</div>
        </div>
        <div class="data-box">
            <div class="data-head">UserName:</div>
            <div class="data-content">@${localStorage.getItem('username')}</div>
        </div>
        <div class="data-box">
            <div class="data-head">Department:</div>
            <div class="data-content">${localStorage.getItem('department')}</div>
        </div>
        <div class="data-box">
            <div class="data-head">No. of Skills:</div>
            <div class="data-content">-/-</div>
        </div>
`