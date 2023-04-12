

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

let headerText = `

<a class="header_link" href="index.html"><img class="header_image" src="images/eaglet.png" alt=""></a>

<div class="header_menu">

    <nav>
        <ul>
            <li><a class="header_button" href="traditions/traditions.html">Законы и традиции</a></li>
            <li><a class="header_button" href="legends/index.html">Легенды Орлёнка</a></li>
            <li><a class="header_button" href="songs/orlyonoksongs.html">Песни Орлёнка</a></li>
            <li><a class="header_button" href="developers/developers.html">Разработчики</a></li>
        </ul>
    </nav>

</div>

<a class="header_eye" href="#!"><img class="header_eye_image" src="images/eye_close.png" alt=""></a>

<div class="header_text">"Орлёнок" глазами орлёнка</div>

<div class="triangleLeft"></div>
<div class="triangleRight"></div>

`;

function setHeader() {
  const header =  document.createElement("header");
  header.innerHTML = headerText ;
  document.body.insertAdjacentElement('afterbegin', header );
}

setHeader();

const headerMenu = document.querySelector('.header_menu')
const headerEye = document.querySelector('.header_eye')
const headerEyeImage = headerEye.querySelector('img')

var isOpen = false;

headerEye.addEventListener('click', function (e){
	e.preventDefault()

  if (isOpen == false){
    isOpen = true;
    headerMenu.classList.add('active')
    headerEyeImage.classList.add("active")
  } else {
    isOpen = false
    headerMenu.classList.remove("active")
    headerEyeImage.classList.remove("active")
  }

})