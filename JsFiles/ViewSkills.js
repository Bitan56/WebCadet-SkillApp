const headerTitle = document.querySelector('.header-title')
const dynBtn = document.querySelector('#dyn-btn')
const alertBoxContainer = document.querySelector(".alert-box-container");
const alertCross = document.querySelector(".alert-cross");
const skillContainer = document.querySelector('.skills-container')
const scriptURL = "https://script.google.com/macros/s/AKfycbzEz-9MdaUz6bZl4Pv2LBhkU_5aM7d5FqsatvVvT8gCrvJGkEAyu6f7mhLMxTgwSUHw/exec"; // Replace this

headerTitle.addEventListener('click', ()=>{
    window.location.href = '../index.html'
})

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

dynBtn.addEventListener("click", () => {
  if (localStorage.getItem("isLogged") == "yes") {
    window.location.href = "./UploadSkills.html";
  }
  alert.play();
});

// showing the skills
async function fetchSkills() {
    const response = await fetch(scriptURL)
    const data = await response.json()
    console.log(data)

    skillContainer.innerHTML = data.map( datas =>`
            <div class="skill-box">
            <div class="department">${datas.department}</div>
            <div class="info-box">
                <div class="name">${datas.name}</div>
                <div class="skill-name">${datas.skillName}</div>
                <div class="username">@${datas.username}</div>
            </div>
            <a href=${datas.skillLink} target="blank" class="skill-btn"><i class="ri-play-circle-fill"></i></a>
        </div>
            `)
}

fetchSkills()