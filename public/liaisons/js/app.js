window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});



gsap.registerPlugin(ScrollTrigger);
const titreAnim = document.querySelector(".titreAnim");
const test = document.querySelector(".pAnim")
const canAnim = document.querySelector(".images__pc")
const containerun = document.querySelector(".container__un")
const text2 = document.querySelector(".subtitle")
const canVerte = document.querySelector(".canverte")
const canRouge = document.querySelector(".canrouge")
const text3 = document.querySelector(".test")
const sub1 = document.querySelector(".compliments")
const L1 = document.querySelector(".container__deux")
const text4 = document.querySelector(".textePc")
const murBlanc = document.querySelector(".murBlanc")
const anim1 = document.querySelector(".anim-1")



let kk = gsap.matchMedia();
kk.add("(min-width: 1000px)", () => {
  const body = document.body;
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
  
      body.classList.remove("scroll-up");
      text-wrapper.classList.add("hidin")
      return;
    }
    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-up");
      body.classList.add("scroll-down");
    } else if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-down");
      body.classList.add("scroll-up");
    }
    lastScroll = currentScroll;
  });
  });
const modal = document.querySelector('.overlay');

setTimeout(function(){
  modal.classList.add("show-modal");
},7000);

document.querySelector("#close-modal-btn").addEventListener("click", () =>{
  modal.classList.remove("show-modal");
  modal.classList.add("hide-modal");
})





//animation cell
let nn = gsap.matchMedia();

// add a media query. When it matches, the associated function will run
nn.add("(max-width: 600px)", () => {

  const myText = new SplitType('#my-text')
  gsap.to('.char', {
    y: 0,
    stagger: 0.1,
    delay: 0.2,
    duration: 0.2,
  })
  const tl = gsap.timeline({
    paused: true
  })
  const container = document.querySelector('.imagean')
  tl.to(container, {
    clipPath: 'polygon(7% 7%, 93% 7%, 93% 93%, 7% 93%)'
  }, '+=1')
  tl.to(container, {
    clipPath: 'polygon(93% 7%, 93% 7%, 93% 93%, 93% 93%)'
  }, '+=1')
  container.addEventListener('mouseover', () => {
    tl.play()
  })
  // this setup code only runs when viewport is at least 600px wide
  console.log("desktop")
  ScrollTrigger.create({
    trigger: murBlanc,
    start: "top top",
    end: "bottom bottom",
    pin: ".container__un",
  })
  const boxes = gsap.utils.toArray(anim1);
  boxes.forEach(box => {
    gsap.from(box, {
      opacity: 0,
      y: -100,
      duration: 2,
      ease: "power4",
      scrollTrigger: {
        trigger: box,
        start: "30% bottom",
        end: "center bottom",
        scrub: 1
      }
    })
  });
  //Le titre SENVA
  const ltext = gsap.to(test, {
    y: 1200,
    duration: 2,
    ease: "none",
    opacity: 0,
  })
  ScrollTrigger.create({
    trigger: murBlanc,
    start: "top -50%",
    end: "+=300",
    animation: ltext,
    scrub: 1,
  })
  //le paragraphe SENVA
  const ltitre = gsap.to(titreAnim, {
    y: 1200,
    duration: 2,
    ease: "none",
    opacity: 0,
  })
  ScrollTrigger.create({
    trigger: murBlanc,
    start: "top -50%",
    end: "+=300",
    animation: ltitre,
    scrub: 1,

  })
  //La can BOUGE

  //ltexte APARAIT
  const ltext2 = gsap.to(text2, {
    opacity: 1,
    duration: 1,
    delay: 2,
    y: "-90vh",
  })
  ScrollTrigger.create({
    trigger: murBlanc,
    start: "Bottom -50%",
    end: () => '+=200',
    animation: ltext2,
    scrub: 1,
  })
  const ltext4 = gsap.to(text4, {
    opacity: 1,
    duration: 1,
    delay: 2,
  })
  ScrollTrigger.create({
    trigger: murBlanc,
    start: "Bottom -100%",
    end: () => '+=300',
    animation: ltext4,
    scrub: 1,
  })
  //ltexte DISPARAIT
 
  //can rouge BOUGE UN PEU
  const canrouge = gsap.to(canRouge, {
    x: "21vw",
    duration: 3,
  })
  ScrollTrigger.create({
    trigger: murBlanc,
    start: "Bottom -40%",
    end: () => '+=120',
    animation: canrouge,
    scrub: 1,
  });
  //can verte BOUGE UN PEU
  const canverte = gsap.to(canVerte, {
    x: "-21vw",
    duration: 3,
  })
  ScrollTrigger.create({
    trigger: murBlanc,
    start: "Bottom -20%",
    end: () => '+=120',
    animation: canverte,
    scrub: 1,
  });
  //ltexte3 APPARAIT
  const ltext3 = gsap.to(text3, {
    opacity: 1,
    duration: 1,
    delay: 2,
  })
  ScrollTrigger.create({
    trigger: murBlanc,
    start: "Bottom -90%",
    end: () => '+=250',
    animation: ltext3,
    scrub: 1,
  })
});
//animation 
let mm = gsap.matchMedia();

// add a media query. When it matches, the associated function will run
mm.add("(min-width: 1000px)", () => {

  const myText = new SplitType('#my-text')
  gsap.to('.char', {
    y: 0,
    stagger: 0.1,
    delay: 0.2,
    duration: 0.2,
  })
  const tl = gsap.timeline({
    paused: true
  })
  const container = document.querySelector('.imagean')
  tl.to(container, {
    clipPath: 'polygon(7% 7%, 93% 7%, 93% 93%, 7% 93%)'
  }, '+=1')
  tl.to(container, {
    clipPath: 'polygon(93% 7%, 93% 7%, 93% 93%, 93% 93%)'
  }, '+=1')
  container.addEventListener('mouseover', () => {
    tl.play()
  })
  // this setup code only runs when viewport is at least 600px wide
  console.log("desktop")
  ScrollTrigger.create({
    trigger: murBlanc,
    start: "top top",
    end: "bottom bottom",
    pin: ".container__un",
  })
  const boxes = gsap.utils.toArray(anim1);
  boxes.forEach(box => {
    gsap.from(box, {
      opacity: 0,
      y: -100,
      duration: 2,
      ease: "power4",
      scrollTrigger: {
        trigger: box,
        start: "30% bottom",
        end: "center bottom",
        scrub: 1
      }
    })
  });
  //Le titre SENVA
  const ltext = gsap.to(test, {
    x: -1500,
    duration: 2,
    ease: "none"
  })
  ScrollTrigger.create({
    trigger: murBlanc,
    start: "top -10%",
    end: "+=300",
    animation: ltext,
    scrub: 1,
  })
  //le paragraphe SENVA
  const ltitre = gsap.to(titreAnim, {
    x: -1500,
    duration: 2,
    ease: "none"
  })
  ScrollTrigger.create({
    trigger: murBlanc,
    start: "top -10%",
    end: "+=300",
    animation: ltitre,
    scrub: 1,
  })
  //La can BOUGE
  const lacan = gsap.from(canAnim, {
    x: "30vw",
    duration: 3,
    ease: "none",
  })
  ScrollTrigger.create({
    trigger: murBlanc,
    start: "Bottom -30%",
    end: () => '+=200',
    animation: lacan,
    scrub: 1,
  })
  //ltexte APARAIT
  const ltext2 = gsap.to(text2, {
    opacity: 1,
    duration: 1,
    delay: 2,
  })
  ScrollTrigger.create({
    trigger: murBlanc,
    start: "Bottom -50%",
    end: () => '+=200',
    animation: ltext2,
    scrub: 1,
  })
  const ltext4 = gsap.to(text4, {
    opacity: 1,
    duration: 1,
    delay: 2,
  })
  ScrollTrigger.create({
    trigger: murBlanc,
    start: "Bottom -65%",
    end: () => '+=300',
    animation: ltext4,
    scrub: 1,
  })
  //ltexte DISPARAIT
  const ltext2o = gsap.to(text2, {
    opacity: 0,
    duration: 3,
  })
  ScrollTrigger.create({
    trigger: murBlanc,
    start: "Bottom -130%",
    end: () => '+=900',
    animation: ltext2o,
    scrub: 1,
  });
  //can rouge BOUGE UN PEU
  const canrouge = gsap.to(canRouge, {
    x: "15vw",
    duration: 3,
  })
  ScrollTrigger.create({
    trigger: murBlanc,
    start: "Bottom -120%",
    end: () => '+=900',
    animation: canrouge,
    scrub: 1,
  });
  //can verte BOUGE UN PEU
  const canverte = gsap.to(canVerte, {
    x: "-12vw",
    duration: 3,
  })
  ScrollTrigger.create({
    trigger: murBlanc,
    start: "Bottom -120%",
    end: () => '+=900',
    animation: canverte,
    scrub: 1,
  });
  //ltexte3 APPARAIT
  const ltext3 = gsap.to(text3, {
    opacity: 1,
    duration: 1,
    delay: 2,
  })
  ScrollTrigger.create({
    trigger: murBlanc,
    start: "Bottom -140%",
    end: () => '+=200',
    animation: ltext3,
    scrub: 1,
  })
});


//shopify script

 /*<![CDATA[*/
 (function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: '58c5fc-7e.myshopify.com',
      storefrontAccessToken: '47604ea495477a54246258299dd9040d',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('collection', {
       

        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  
  "option": {},
  "cart": {
    "styles": {
      "button": {
        ":hover": {
          "background-color": "#83c161"
        },
        "background-color": "#91d66c",
        ":focus": {
          "background-color": "#83c161"
        },
        "border-radius": "8px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "popup": false
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#91d66c",
        ":hover": {
          "background-color": "#83c161"
        },
        ":focus": {
          "background-color": "#83c161"
        }
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/