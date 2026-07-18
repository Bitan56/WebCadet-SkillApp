//General declarations
const togglePass = document.querySelector('.toggle-pass')
const submitBtn = document.querySelector('.submit-btn')
const username = document.querySelector('#username')
const password = document.querySelector('#password')
const errorContainer = document.querySelector('.error-container')

//Redirecting if user already logged in
if(localStorage.getItem('isLogged') == 'yes'){
    window.location.href = './Profile.html'
}

//Database Link
const scriptURL = "https://script.google.com/macros/s/AKfycbyJ4IixXOrKQHKdGGalPAD2aPRAVvHV8RiiJztvcZma_GNLrM26TKOuv_R2HPKuck7n/exec"; // Replace this

// managing the eye button in the password field
togglePass.addEventListener('click', () => {
    if (togglePass.innerHTML == `<i class="ri-eye-2-line"></i>`) {
        togglePass.innerHTML = '<i class="ri-eye-close-line"></i>'
        document.querySelector('#password').type = 'text'
    } else {
        togglePass.innerHTML = `<i class="ri-eye-2-line"></i>`
        document.querySelector('#password').type = 'password'
    }
})

// Validating and Submitting the form
document.getElementById("form").addEventListener("submit", async e => {
    e.preventDefault();
    submitBtn.innerHTML = `Logging In...`
    submitBtn.style.backgroundColor = 'rgb(2, 89, 2)'
    submitBtn.disabled = true

    const response = await fetch(scriptURL)
    const data = await response.json()

    for (let i = 0; i < data.length; i++) {
        if (username.value == data[i].username && password.value == data[i].password) {
            await localStorage.setItem('isLogged','yes')
            await localStorage.setItem('username', `${data[i].username}`)
            await localStorage.setItem('name', `${data[i].name}`)
            await localStorage.setItem('department', `${data[i].department}`)
            window.location.href = '../index.html'
            break
        }

        errorContainer.innerHTML = `
            <div class="error-box">
                <div class="alert-sign"><i class="ri-alert-line"></i></div>
                <div class="alert-text">Credebtials not matched.</div>
            </div>
            `
    }

    submitBtn.innerHTML = `Submit`
    submitBtn.style.backgroundColor = 'green'
    submitBtn.disabled = false

});