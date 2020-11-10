// $(window).scroll(function () {
//   if ($(window).scrollTop() + $(window).height() == $(document).height()) {
//     animateBottom();
//   } else {
//     removeBg();
//   }
// });

$(window).on('scroll', function () {
  var hT = $('#section4').offset().top,
    hH = $('#section4').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();

  if (wS > ((hT + hH - wH) - 50)) {
    animateBottom();
  } else {
    document.querySelector("#section4").style.background = 'white ';
  }
});

function animateBottom()
{
  changeBg();
}

function changeBg() {
  document.querySelector("#section4").style.background = 'linear-gradient(to top, #ebbba7 0%, #cfc7f8 100%)';
  const img1 = document.querySelector(".1");
  const img2 = document.querySelector(".2");
  const img3 = document.querySelector(".3");
  const img4 = document.querySelector(".4");
  const img5 = document.querySelector(".5");
  const img6 = document.querySelector(".6");
  const img7 = document.querySelector(".7");
  const img8 = document.querySelector(".8");
  const tl = new TimelineMax();

  tl.fromTo(1, 1, 
{
    x: -100,
    y: -100
  }, 
 {
    x: 0,
    y: 0
  }).fromTo(2, 1, 
 {
    y: -100
  }, 
 {
    y: 0
  }, "-=1").fromTo(3, 1, 
{
    x: 100,
    y: -100
  }, {
    x: 0,
    y: 0
  }, "-=1").fromTo(4, 1, 
{
    x: -100

  }, 
{
    x: 0,
  }, "-=1").fromTo(5, 1, 
{
    x: 100
  }, {
    x: 0
  }, "-=1").fromTo(6, 1, 
{
    x: -100,
    y: 100
 }, 
{
    x: 0,
    y: 0
 }, "-=1").fromTo(7, 1, 
{
    y: 100
}, 
{
    y: 0
  }, "-=1").fromTo(8, 1, 
{
    x: 100,
    y: 100
  }, {
    x: 0,
    y: 0
  }, "-=1");
}

function removeBg() 
{
  document.querySelector("#section4").style.background = 'white';
}

function change(str) {
  $(".main").children().remove();
  $(".headline").children().remove();
  switch (str) {
    case 'buddies':
      $(".main").append("<div class='content'><div class='presentation'><h1>Buddies</h1><p>Aansu Bahe To Ehsaas Hota Hai,<br>Dosti Ke Bina Jeevan Kitna Udaas Rahta Hai,<br>Umr Ho Aapki Chand Jitni Lambi,<br>Aap Jaisa Dost Kahan Har Kisi Ke Pas Hota Hai.</p></div><img class='displayImg' src='./images/main.jpg' alt='buddies' /></div>");
      break;
    case 'forum':
      $(".main").append("<div class='content forum'><div class='presentation'><h1>Forum Doshi</h1><p>Happiest birthday my patner in crime❤ thank you for always being their with me😘 and hope u will be always be their ❤<br> i will miss our navrati vali masti🥺 train mai pagal panti karna🥺❤ and i will miss you......🥺❤Stay same , Stay blessed and fulfil all your dreams❤<br>Once again Happy birthday❤🥰😘</p></div><img class='displayImg' src='./images/forum.jpeg' alt='forum' /></div>");
      break;
    case 'maitri':
      $(".main").append("<div class='content maitri'><div class='presentation'><h1>Maitri Patel</h1><p>Here comes your day 🥳🥳🥳🥳 <br>Happiest birthday sweetieeee.... <br>Love you a loads ❤️❤️❤️I have just realized it's been 5 years 😍😍 cheers to our friendship🍻🍻 Hope we remain friends forever and keep sharping our stalking skills😂😂 and yessss one more thing thank me for not uploading your weird photos😂😂, keep smiling ,take care and Corona see Bach na😂😂😂<br>Varna humara logo ko haunt karne ka plan Pani ma Chala jaiga ,ab bus hogaya 😂 jayda tarif nhiii😂😂<br>Once again Happiest birthday stay blessed (girlfriend)❤️😂😂😂</p></div><img class='displayImg'  src='./images/maitri.jpeg' alt='maitri' /></div>");
      break;
    case 'vinay':
      $(".main").append(" <div class='content vinay'><div class='presentation'><h1>Vinay Waghela</h1><p> </p></div><img class='displayImg' src='./images/vinay.jpg' alt='vinay' /></div>");
      break;
    case 'mom':
      $(".main").append(" <div class='content mom'><div class='presentation'><h1>Jigna Gogri</h1><p>To OUR SUNSHINE ...<br> If we could give you 1 thing in this life, we would give u the ability to see urself how we see u every single day <br>perhaps then you would be able to understand just how special you are to us.🎉🎊🎈<br>HAPPIEST BIRTHDAY SWEETHEART 🎈🎊🎉</p></div><img class='displayImg' src='./images/mom.jpg' alt='mom' /></div>");
      break;
    case 'dad':
      $(".main").append("<div class='content dad'><div class='presentation'><h1>Sunil Gogri</h1><p> </p></div><img class='displayImg' src='./images/dad.jpeg' alt='dad' /></div>");
      break;
    case 'yug':
      $(".main").append("<div class='content yug'><div class='presentation'><h1>Yug Gogri</h1><p> </p></div><img class='displayImg' src='./images/yug.jpe	g' alt='yug' /></div>");
      break;
    case 'akshay':
      $(".main").append(" <div class='content akshay'><div class='presentation'><h1>Akshay Nair</h1><p>Happiest Birthday 🎊fraandd🎂🍰.. School se lekr college takk..<br>Aur aage bhi pata nhi kaha kaha milne waale hai ek hi class me bethne ke liye😂par jahan bhi jaaye teri Gujrati Giri asli hai yeh tune hamesha prove kiya hai🤣😂.. <br>Bhagwaan kare ki aapki Dimaag mese ek acha khasa Psychologist bahar ubhr ke aaye😵😂. <br>Celebrate Your day to it's fullest. 🙌🏻🥳</p></div><img class='displayImg' src='./images/akshay.jpeg' alt='akshay' /></div>");
      break;
    case 'himanshi':
      $(".main").append(" <div class='content himanshi'><div class='presentation'><h1>Himanshi</h1><p >Happiest Birthday Manaswi ❤🎂💫have a healthy year ...lots of love ❤jali he sab milte hai yaar kidar ghumne jayege 😅😄<br>Baas aese he khush raha kar ...enjoy your day ...<br>Psychology ki scholar 😄<br>Love you meet me soon...❤❤</p></div><img class='displayImg' src='./images/himanshi.jpeg' alt='himanshi' /></div>");
      break;
    case 'krishna':
      $(".main").append("<div class='content krishna'><div class='presentation'><h1>Krishna Chauhan</h1><p>Mannu happy birthday yaar<br>Vadhre kai tariff nai karvano hu pan aa kau 6u tu je chene aaj reh because aaj kal ke logo ki tarah tu nahi par khudh ke sapno me khoi hui si rehti hai tu or vahi best hai bohot bar hamari harakto ne pareshan kiya hai to vo permanent hai to sehen kar chup chap  or yaar apan se jyada kand sath me kiye nahi hai yaar karna padega kuch stock varna future me khudh khudh ke bacho ko sunna ne ke liye kuch hoga hi nahi.<br>You are a best person mannu i trust you in all things in you thoughts, beliefs, dream everything <br> Happy birthday to youuu </p></div><img class='displayImg' src='./images/krishna.jpg' alt='krishna' /></div>");
      break;
    case 'pooja':
      $(".main").append("<div class='content pooja'><div class='presentation'><h1>Pooja Bhanushali</h1><p> </p></div><img class='displayImg' src='./images/pooja.jpg' alt='pooja' /></div>");
      break;
   case 'nilesh':
      $(".main").append("<div class='content nilesh'><div class='presentation'><h1>Nilesh Makwana</h1><p> </p></div><img class='displayImg' src='./images/nilesh.jpg' alt='nilesh' /></div>");
      break;
    default:

  }
  Animate();

}


let mouseCursor = document.querySelector(".cursor");
let navlinks = document.querySelectorAll(".nav-links li ");
let links = document.querySelectorAll(".buddies-links li");

let logo = document.querySelector("#logo");

window.addEventListener("mousemove", cursor);

function cursor(e) 
{
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

links.forEach((link) => 
{
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("buddies-link-grow");
    link.classList.add("buddies-hovered-link");
 });

  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("buddies-link-grow");
    link.classList.remove("buddies-hovered-link");
  });
});
navlinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    link.classList.add("hovered-link");
});

  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    link.classList.remove("hovered-link");
  });
});

var carousel = document.querySelector(".carousel");
var flkty = new Flickity(carousel, {
  imagesLoaded: true,
  autoPlay: 2000,
  percentPosition: false,
  pageDots: false
});

var imgs = carousel.querySelectorAll(".carousel-cell img");
// get transform property
var docStyle = document.documentElement.style;
var transformProp =
  typeof docStyle.transform == "string" ? "transform" : "WebkitTransform";

flkty.on("scroll", function () 
{
  flkty.slides.forEach(function (slide, i) 
 {
    var img = imgs[i];
    var x = ((slide.target + flkty.x) * -1) / 3;
    img.style[transformProp] = "translateX(" + x + "px)";
  });
});



function bgChanger() 
{
  if (this.scrollY > this.innerHeight / 1.2) 
  {
    document.body.classList.add("bg-active");
  } 
 else 
 {
    document.body.classList.remove("bg-active");
    document.body.classList.remove("bg-active");
  }
}
Animate();

function Animate() 
{
  const img = document.querySelector(".displayImg");
  const content = document.querySelector(".content");
  const presentation = document.querySelector(".presentation");
  const tl2 = new TimelineMax();
  tl2.fromTo(content, 1.2, {
    height: "0vh",
  }, {
    height: "90vh",
    ease: Power2.easeInOut,
  }).fromTo(presentation, 1, {
    opacity: 0,
    x: -100
  }, {
    opacity: 1,
    x: 0,
    ease: Power2.easeInOut,
  }, "-=0.5").fromTo(img, 1, {
    opacity: 0,
    x: 100,
    y: -100
  }, {
    opacity: 1,
    x: 0,
    y: 0,
    ease: Power2.easeInOut,
  }, "-=1");
}
window.addEventListener("scroll", bgChanger);

const body = document.body;

const headline = document.querySelector(".headline");

const home = document.querySelector(".home");
const tl = new TimelineMax();

tl.fromTo(
  home,
  1, {
    height: "0%",
  }, {
    height: "80%",
    ease: Power2.easeInOut,
  }
).fromTo(
  headline,
  1.5, {
    opacity: 0,
    x: -30,
  }, {
    opacity: 1,
    x: 0,
    ease: Power2.easeInOut,
  },
  "-=0.5"
);