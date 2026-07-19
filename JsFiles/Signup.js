// general declarations
const submitBtn = document.querySelector('.submit-btn')
const errorContainer = document.querySelector('.error-container')

//If user already logged in then user will be redirected to userdata page
if (localStorage.getItem('isLogged') == 'yes') {
    window.location.href = './Userdata.html'
}

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

// Submitting the form
const scriptURL = "https://script.google.com/macros/s/AKfycbyJ4IixXOrKQHKdGGalPAD2aPRAVvHV8RiiJztvcZma_GNLrM26TKOuv_R2HPKuck7n/exec"; // Replace this

async function checkUsername() {
    const response = await fetch(scriptURL)
    const userData = await response.json()
    console.log(userData);

    for (let i = 0; i < userData.length; i++) {
        if (document.querySelector('#username').value == userData[i].username) {
            errorContainer.innerHTML = `
            <div class="error-box">
                <div class="alert-sign"><i class="ri-alert-line"></i></div>
                <div class="alert-text">This username already used. Try a different username.</div>
            </div>
            `
            submitBtn.innerHTML = `Submit`
            submitBtn.style.backgroundColor = 'green'
            submitBtn.disabled = false
            throw new Error("username exists");
        }
    }
}

// Submitting and validating the form
document.getElementById("form").addEventListener("submit", async e => {
    e.preventDefault();
    submitBtn.innerHTML = `Submitting...`
    submitBtn.style.backgroundColor = 'rgb(2, 89, 2)'
    submitBtn.disabled = true

    //Checking if the password is 8 letters long
    if (document.querySelector('#password').value.length < 8) {
        errorContainer.innerHTML = `
            <div class="error-box">
                <div class="alert-sign"><i class="ri-alert-line"></i></div>
                <div class="alert-text">Your Password must be minimum 8 chracters long.</div>
            </div>
            `
            submitBtn.innerHTML = `Submit`
            submitBtn.style.backgroundColor = 'green'
            submitBtn.disabled = false
            throw new Error("short password");
    }

    //Validating the department field
    if (document.querySelector('#department').value == 'Choose Department') {
        errorContainer.innerHTML = `
            <div class="error-box">
                <div class="alert-sign"><i class="ri-alert-line"></i></div>
                <div class="alert-text">Choose a department first</div>
            </div>
            `
            submitBtn.innerHTML = `Submit`
            submitBtn.style.backgroundColor = 'green'
            submitBtn.disabled = false
            throw new Error("no department selected");
    }

    await checkUsername()

    const data = {
        name: document.getElementById("name").value,
        username: document.getElementById("username").value,
        department: document.getElementById("department").value,
        password: document.getElementById("password").value,
    };

    fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(data)
    })
        .then(res => {
            localStorage.setItem('name',`${document.querySelector('#name').value}`)
            localStorage.setItem('username',`${document.querySelector('#username').value}`)
            localStorage.setItem('department',`${document.querySelector('#department').value}`)
            localStorage.setItem('isLogged','yes')
            alert(`Form submitted successfully`)
            submitBtn.innerHTML = `Submit`
            submitBtn.style.backgroundColor = 'green'
            submitBtn.disabled = false
            document.getElementById("form").reset();
            window.location.href = '../index.html'
        })
        .catch(err => {
            console.error(err);
        });
});

// managing the eye button in the password field

const togglePass = document.querySelector('.toggle-pass')

togglePass.addEventListener('click', () => {
    if (togglePass.innerHTML == `<i class="ri-eye-2-line"></i>`) {
        togglePass.innerHTML = '<i class="ri-eye-close-line"></i>'
        document.querySelector('#password').type = 'text'
    } else {
        togglePass.innerHTML = `<i class="ri-eye-2-line"></i>`
        document.querySelector('#password').type = 'password'
    }
})