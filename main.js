
// Show/hide function for the homepage
function pageRelocator() {
    let toggle = document.getElementById("toggle");
    toggle.addEventListener("click", () => {
        home.classList.toggle("hide")   
        page2.classList.toggle("show")
    })
}
function pageRelocator2() {
    let toggle2 = document.getElementById("toggle2");
    toggle2.addEventListener("click", () => {
        page2.classList.toggle("hide")
        page3.classList.toggle("show")
    })
}
function pageRelocator3() {
    let toggle3 = document.getElementById("toggle3");
    toggle3.addEventListener("click", () => {
        page3.classList.toggle("hide")
        page4.classList.toggle("show")
    })
}
function pageRelocator4() {
    let toggle4 = document.getElementById("toggle4");
    toggle4.addEventListener("click", () => {
        page4.classList.toggle("hide")
    })
}

// validator for fruits section
let answers = ['oranges', 'tangerine', 'lime', 'lemon', 'grape']
let favvy = ['bananas', 'avocado']

function fruitChecker() {
    let userInp = document.getElementById("myInput").value;
    let out = document.getElementById('output');
    if (answers.includes(userInp)) {
        out.innerHTML = "Correct!"
    } else {
        out.innerHTML = "Incorrect, Try again!"
    }
}
function fruitChecker2() {
    let userInp2 = document.getElementById("myInput2").value;
    let out = document.getElementById('output2');
    if (favvy.includes(userInp2)) {
        out.innerHTML = "Awesome"
    } else {
        out.innerHTML = "Incorrect, He hates that!"
    }
}
function fruitChecker3() {
    let userInp3 = document.getElementById("myInput3").value;
    let out = document.getElementById('output3');
    if (Kiwi.includes(userInp3)) {
        out.innerHTML = "Wow! You are a Guru Mehn."
    } else {
        out.innerHTML = "Loser!!!, Try again"
    }
}
