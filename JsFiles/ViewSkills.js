const headerTitle = document.querySelector('.header-title')
const dynBtn = document.querySelector('#dyn-btn')
const alertBoxContainer = document.querySelector(".alert-box-container");
const alertCross = document.querySelector(".alert-cross");

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