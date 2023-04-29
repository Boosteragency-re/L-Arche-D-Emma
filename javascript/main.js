import Prestations from "./Prestations.js";

fetch("../data.json")
.then(response => response.json())
.then(data => {
    let prestations = new Prestations(data)  
    prestations.display();  

});
openNav();
closeNav();
closeCookies();

function openNav() {
    document.getElementById("mobile-menu").addEventListener("click", () => {
        let nav = document.getElementById("nav-mobile");
        nav.style.display = "block";
        nav.style.width = "100%";
    })
}

function closeNav() {
    let nav = document.getElementById("nav-mobile");
    document.getElementById("close-btn").addEventListener("click", () => {
        nav.style.display = "none";
        nav.style.width = "0%";
    })
    document.getElementById("mobile-contact").addEventListener("click", () => {
        nav.style.display = "none";
        nav.style.width = "0%";
    })
}

function closeCookies() {
    document.getElementById("cookies-btn").addEventListener("click", () => {
        acceptCookieConsent();
    })
}

// Create cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Delete cookie
function deleteCookie(cname) {
    const d = new Date();
    d.setTime(d.getTime() + (24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=;" + expires + ";path=/";
}

// Read cookie
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Set cookie consent
function acceptCookieConsent(){
    deleteCookie('user_cookie_consent');
    setCookie('user_cookie_consent', 1, 30);
    document.getElementById("cookies").style.display = "none";
}

let cookie_consent = getCookie("user_cookie_consent");
if(cookie_consent != ""){
    document.getElementById("cookies").style.display = "none";
}else{
    document.getElementById("cookies").style.display = "block";
}

const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
    const formData = new FormData(form);
    e.preventDefault();
    let object = {};
    formData.forEach((value, key) => {
        object[key] = value
    });
    let json = JSON.stringify(object);
    result.innerHTML = "Veuillez patienter..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            // result.innerHTML = "Il y a eu un problème";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});

const delay = 5000; //ms

const slides = document.querySelector(".slides");
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * 100 * -1;

let current = 0;

function changeSlide(next = true) {
  if (next) {
    current += current > maxLeft ? -100 : current * -1;
  } else {
    current = current < 0 ? current + 100 : maxLeft;
  }

  slides.style.left = current + "%";
}

let autoChange = setInterval(changeSlide, delay);
const restart = function() {
  clearInterval(autoChange);
  autoChange = setInterval(changeSlide, delay);
};

// Controls
document.querySelector(".next-slide").addEventListener("click", function() {
  changeSlide();
  restart();
});

document.querySelector(".prev-slide").addEventListener("click", function() {
  changeSlide(false);
  restart();
});
