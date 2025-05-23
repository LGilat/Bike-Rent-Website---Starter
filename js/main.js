const bikeData = [
  {
    name: "BMW R1300GS",
    type: "ADVENTURE",
    price: 17,
    image: "images/bike-1.png",
    tag: "Free Cancellation",
  },
  {
    name: "BMW R1300GS",
    type: "ADVENTURE",
    price: 17,
    image: "images/bike-2.png",
    tag: "Free Cancellation",
  },
  {
    name: "BMW R1300GS",
    type: "ADVENTURE",
    price: 17,
    image: "images/bike-3.png",
    tag: "Free Cancellation",
  },
  {
    name: "BMW R1300GS",
    type: "ADVENTURE",
    price: 17,
    image: "images/bike-4.png",
    tag: "Free Cancellation",
  },
  {
    name: "BMW R1300GS",
    type: "ADVENTURE",
    price: 17,
    image: "images/bike-5.png",
    tag: "Free Cancellation",
  },
  {
    name: "BMW R1300GS",
    type: "ADVENTURE",
    price: 17,
    image: "images/bike-6.png",
    tag: "Free Cancellation",
  },
  {
    name: "BMW R1300GS",
    type: "ADVENTURE",
    price: 17,
    image: "images/bike-7.png",
    tag: "Free Cancellation",
  },
  {
    name: "BMW R1300GS",
    type: "ADVENTURE",
    price: 17,
    image: "images/bike-8.png",
    tag: "Free Cancellation",
  },
];

//menu
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
  menu.classList.toggle('move');
  navbar.classList.toggle('open-menu');
}

window.addEventListener('resize', function(){
  if ( window.innerWidth > 740 ) {
    navbar.classList.remove('open-menu');
    menu.classList.remove('move');
  }
})


//Swiper
let swiper = new Swiper(".destination-container", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickeable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    510: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    750: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 20,
    },

  },

});

const createBikeBox = (bike) => `
  <div class="bike-box">
  <img src="${bike.image}" alt="${bike.name}" class="box-img" >
  <div class="title-price">
      <div class="title-data">
          <h2>${bike.name}</h2>
          <p>${bike.type}</p>
      </div>
      <h3 class="bike-price">$${bike.price}<span>Hour</span></h3>
  </div>
  <a href="#" class="book-btn">Book Bike</a>
  <span class="tag">${bike.tag}</span>
  </div>
`

const bikeContent = document.querySelector('.bikes-content');

bikeData.forEach((bike) => {
  const bikeBoxHtml = createBikeBox(bike);
  bikeContent.insertAdjacentHTML('beforeend', bikeBoxHtml);
})