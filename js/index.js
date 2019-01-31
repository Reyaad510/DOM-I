const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM <br> Is <br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// nav

const anchors = document.querySelectorAll('a');
// anchors[0].textContent = siteContent['nav']['nav-item-1'];
// anchors[1].textContent = siteContent['nav']['nav-item-2'];
// anchors[2].textContent = siteContent['nav']['nav-item-3'];
// anchors[3].textContent = siteContent['nav']['nav-item-4'];
// anchors[4].textContent = siteContent['nav']['nav-item-5'];
// anchors[5].textContent = siteContent['nav']['nav-item-6'];

anchors.forEach((item, num) => item.textContent = siteContent['nav'][`nav-item-${num+1}`]);


// Changing nav text to green

anchors.forEach(item => item.style.color = 'green');


// Adding two new items to navigation system

let navBar = document.querySelector('nav');

const newElement1 = document.createElement('a');
newElement1.href = '#';
newElement1.textContent = 'Blog';
newElement1.style.color = 'green';
navBar.prepend(newElement1);

const newElement2 = document.createElement('a');
newElement2.href = '#';
newElement2.textContent = 'Github';
newElement2.style.color = 'green';
navBar.append(newElement2);


// cta

const h1 = document.querySelector('h1');
h1.innerHTML = siteContent.cta.h1;
  


const button = document.querySelector('button');
button.textContent = siteContent.cta.button;


const ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', 'img/header-img.png');




// h4

const h4 = document.querySelectorAll('h4');
h4[0].textContent = siteContent['main-content']['features-h4'];
h4[1].textContent = siteContent['main-content']['about-h4'];
h4[2].textContent = siteContent['main-content']['services-h4'];
h4[3].textContent = siteContent['main-content']['product-h4'];
h4[4].textContent = siteContent['main-content']['vision-h4'];
h4[5].textContent = siteContent['contact']['contact-h4'];




// paragraphs

const paragraphs = document.querySelectorAll('p');

paragraphs[0].textContent = siteContent['main-content']['features-content'];
paragraphs[1].textContent = siteContent['main-content']['about-content'];
paragraphs[2].textContent = siteContent['main-content']['services-content'];
paragraphs[3].textContent = siteContent['main-content']['product-content'];
paragraphs[4].textContent = siteContent['main-content']['vision-content'];
paragraphs[5].textContent = siteContent['contact']['address'];
paragraphs[6].textContent = siteContent['contact']['phone'];
paragraphs[7].textContent = siteContent['contact']['email'];
paragraphs[8].textContent = siteContent['footer']['copyright'];


// middle img

const middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

// MVP Completed