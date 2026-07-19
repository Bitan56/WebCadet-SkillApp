// general declarations
const submitBtn = document.querySelector('.submit-btn')
const errorContainer = document.querySelector('.error-container')
const nameInput = document.querySelector('#name')
const usernameInput = document.querySelector('#username')
const departmentInput = document.querySelector('#setDepartment')
const scriptURL = "https://script.google.com/macros/s/AKfycbzEz-9MdaUz6bZl4Pv2LBhkU_5aM7d5FqsatvVvT8gCrvJGkEAyu6f7mhLMxTgwSUHw/exec"; // Replace this

async function fetchUserDetails() {
    const localName = await localStorage.getItem('name')
    const localUsername = await localStorage.getItem('username')
    const localDepartment = await localStorage.getItem('department')
    nameInput.value = `${localName}`
    usernameInput.value = `${localUsername}`
    departmentInput.value = `${localDepartment}`
    departmentInput.innerHTML = `${localDepartment}`
    document.querySelector('.view-skills').addEventListener('click', () => {
        window.location.href = './ViewSkills.html'
    })
}

fetchUserDetails()



// Submitting and validating the form
document.getElementById("form").addEventListener("submit", async e => {
    e.preventDefault();
    submitBtn.innerHTML = `Submitting...`
    submitBtn.style.backgroundColor = 'rgb(2, 89, 2)'
    submitBtn.disabled = true

    const data = {
        name: document.getElementById("name").value,
        username: document.getElementById("username").value,
        department: document.getElementById("department").value,
        skillName: document.getElementById("skillName").value,
        skillLink: document.getElementById("skillLink").value,
    };
    fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(data)
    })
        .then(res => {
            alert(`Form submitted successfully`)
            submitBtn.innerHTML = `Submit`
            submitBtn.style.backgroundColor = 'green'
            submitBtn.disabled = false
            document.getElementById("form").reset();
        })
        .catch(err => {
            console.error(err);
        });
})