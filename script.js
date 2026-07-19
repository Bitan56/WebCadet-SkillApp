const sidebar = document.querySelector(".sidebar");
const menuBtn = document.querySelector("#menu-btn");
const crossBtn = document.querySelector(".cross-btn");
const dynBtn = document.querySelector("#dyn-btn");
const sidebarDynBtn = document.querySelector(".sidebar ul #dyn-btn");
const viewSkills = document.querySelector(".view-skills");
const sidebarViewSkills = document.querySelector(".sidebar ul .view-skills");
const uploadSkills = document.querySelector(".upload-skills");
const sidebarUploadSkills = document.querySelector(
  ".sidebar ul .upload-skills",
);
const alertBoxContainer = document.querySelector(".alert-box-container");
const alertCross = document.querySelector(".alert-cross");
const nameBox = document.querySelector("#name-box");

window.addEventListener('keydown', function(event) {
    if (event.ctrlKey) {
        const key = event.key.toLowerCase();
        
        // Target 's' (Save), 'u' (View Source), 'c' (Copy)
        if (key === 's' || key === 'u' || key === 'c') {
            event.preventDefault();
            alert(`Ctrl + ${key.toUpperCase()} has been disabled.`);
        }
    }
});


// making the name box works
if (localStorage.getItem("isLogged") == "yes") {
  nameBox.innerHTML = `
    Hi, <span>${localStorage.getItem("name")}</span>. Nice to have you on our side.Hope we will get your immense support. Kepp showing the world the skills you own.
    <div id="logout"><span><i class="ri-shut-down-line"></i></span>Log Out</div>
    `
} else {
  nameBox.innerHTML = `
   Hey user, log in now to join the journey and show the skills you have.<br>
   <div id="get-started">Get Started</div>
    `
    document.querySelector('#get-started').addEventListener('click', ()=>{
        window.location.href = './pages/SignIn.html'
    })
}

//Checking if the user is logged in and manipulating the dynamic button
async function isUser() {
  const localData = await localStorage.getItem("isLogged");
  if (localData == "yes") {
    dynBtn.innerHTML = `Profile`;
    sidebarDynBtn.innerHTML = `Profile`;
    dynBtn.addEventListener("click", () => {
      window.location.href = "./pages/Profile.html";
    });
    sidebarDynBtn.addEventListener("click", () => {
      window.location.href = "./pages/Profile.html";
    });
  }
}

isUser();

dynBtn.addEventListener("click", () => {
  window.location.href = "./pages/SignIn.html";
});
sidebarDynBtn.addEventListener("click", () => {
  window.location.href = "./pages/SignIn.html";
});

//Writing GSAP timelines
const tl = gsap.timeline();
tl.to(menuBtn, {
  opacity: 0,
});
tl.to(".sidebar", {
  opacity: 1,
  x: "-300",
});
tl.pause();

//making the buttons functioning
menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  tl.play();
});
crossBtn.addEventListener("click", () => {
  tl.reverse();
});

//Showing the SignIn alert
alert = gsap.timeline();
alert.to(alertBoxContainer, {
  display: "block",
  display: "flex",
});
alert.from(".alert-box", {
  scale: 0,
});
alert.pause();

alertCross.addEventListener("click", () => {
  alert.reverse();
});

uploadSkills.addEventListener("click", () => {
  if (localStorage.getItem("isLogged") == "yes") {
    window.location.href = "./pages/UploadSkills.html";
  }
  alert.play();
});
sidebarUploadSkills.addEventListener("click", () => {
  if (localStorage.getItem("isLogged") == "yes") {
    window.location.href = "./pages/UploadSkills.html";
  }
  alert.play();
});

//Activating the View Skills button
viewSkills.addEventListener("click", () => {
  window.location.href = "./pages/ViewSkills.html";
});
sidebarViewSkills.addEventListener("click", () => {
  window.location.href = "./pages/ViewSkills.html";
});

// Activating the logout button
document.querySelector('#logout').addEventListener('click', async ()=>{
    await localStorage.clear()
    location.reload()
})
