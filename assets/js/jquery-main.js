const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

const $carousel = $(".carousel")

$(window).on("load resize", function () {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function () {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function () {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});


$('.carousel').carousel({
  interval: 10000
})

const scroll = document.querySelector('.button-to-up')
window.addEventListener('scroll', () => {
  scroll.classList.toggle('active', window.scrollY > 500)
})
scroll.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})


const menuToggle = document.querySelector('.js-menu-toggle');
const menuContent = document.querySelector('.js-menu-content');

function openMenu() {
  menuToggle.classList.add('active');
  menuContent.classList.add('active');
  document.body.classList.add('fixed');
}

function closeMenu() {
  menuToggle.classList.remove('active');
  menuContent.classList.remove('active');
  document.body.classList.remove('fixed');
}

function toggleMenu() {
  if (menuToggle.classList.contains('active')) {
    closeMenu();
  } else {
    openMenu();
  }
}
if (menuToggle && menuContent) {
  menuToggle.addEventListener('click', toggleMenu);
}
