$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Full Stack Web Developer", "Coding Enthusiast", "Competitive programmer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Full Stack Web Developer", "Coding Enthusiast", "Competitive programmer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});


//change the file here
// document.getElementById("resume-button-1").onclick = ()=>{
//   window.open("https://drive.google.com/file/d/1aBv4ecu0S6WV87s_klkuHkvE0-fQ9Y56/view?usp=share_link",`_blank`)
// }

// document.getElementById("resume-button-2").onclick = ()=>{
//   window.open("https://drive.google.com/file/d/1aBv4ecu0S6WV87s_klkuHkvE0-fQ9Y56/view?usp=share_link",`_blank`)
// }

function resume(){
  window.open("Pragatheeswaran S_Resume.pdf","_blank")
}
//https://drive.google.com/file/d/1aBv4ecu0S6WV87s_klkuHkvE0-fQ9Y56/view?usp=share_link
//git calender

GitHubCalendar(".calendar", "Prags1709", {
  responsive: true,
  global_stats: false,
  tooltips: true,
});

//Contact form

//Deploy id
// AKfycbxR0zwBS1w-sGLCxtwQu30k-Aj_h0Kvv30VcAThEmqfVPvRz_M0cCHke0XKKNS8sIpsrQ


// https://script.google.com/macros/s/AKfycbxR0zwBS1w-sGLCxtwQu30k-Aj_h0Kvv30VcAThEmqfVPvRz_M0cCHke0XKKNS8sIpsrQ/exec

const scriptURL = 'https://script.google.com/macros/s/AKfycbxR0zwBS1w-sGLCxtwQu30k-Aj_h0Kvv30VcAThEmqfVPvRz_M0cCHke0XKKNS8sIpsrQ/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg");

        form.addEventListener('submit', e => {
          msg.innerHTML = `Sending...`;
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form) })
              .then(response => {
                  msg.innerHTML = "Message sent successfully";
                  setTimeout(() => {
                      msg.innerHTML = "";
                  }, 5000)
                  form.reset();
              })
              .catch(error => console.error('Error!', error.message))
      })
