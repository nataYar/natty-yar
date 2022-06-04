import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); 

export const sliderFn = (introRef, nameRef, infoRef) => {
  const tlSlider = gsap.timeline({ defaults: { ease: 'power1.out' } });
  tlSlider.to('.text', { y: '0%', stagger: .1 , duration: .5});
  tlSlider.to('.slider-header', { y: '-100%', stagger: .2, duration: .8, delay: .5 });
  tlSlider.to(introRef, { y: '-100%', duration: 1 }, '<');
  tlSlider.fromTo(nameRef, { opacity: 0 }, { opacity: 1, duration: .5 });
  tlSlider.fromTo(infoRef, { opacity: 0 }, { opacity: 1, duration: .5 }, '<');
}

export const sectionNameFn = () => {
  const titles = document.querySelectorAll('.section-title');
    titles.forEach((el) => {
      const tlSectionName = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: () => '0% 100%',
          // markers: true
        }
      });
      tlSectionName.fromTo(el, {y: '50px',}, { y: '0px', duration: .8, ease: "back.out(1.2)",});
      tlSectionName.fromTo(el, { opacity: 0 }, { opacity: 1, duration: .8 }, "<");
    })
}


export const heroImgFn = (heroRef) => {
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.header',
      start: () => '0%',
      end: () => '100%',
      scrub: true
    }
  });
  tl2.to(heroRef, { y:'100px', duration: 7 });
}

export const highlightAboutFn = () => {
  // Highlight  fade in
  const tlHin = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-container",
      scrub: true,
      start: "-60%", 
      end: "20%",
    },
  });
  tlHin.fromTo(
    ".highlight-scroll",
    { color: "#000000" },
    { color: "#8276d1", stagger: .5, duration: .7 }
  );

  // Highlight fade out
  const tlHout = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-container",
      scrub: true,
      start: "-40%", 
      end: "40%",
    },
  });
  tlHout.to(
    ".highlight-scroll", { color: "#000000", stagger: 1, duration: .7 }
  );
}

export const flowerAnimationOne = (a, b, c) => {
  let count = 0;
  if ( a ) { count += 1 } 
  if ( b ) { count += 1 } 
  if ( c ) { count += 1 } 
 
  let imgArr = document.querySelectorAll('.svg');
  if ( count === 0) {
    imgArr.forEach( (el) => {
      el.classList.remove("stepOne")
      el.classList.remove("stepTwo")
      el.classList.remove("stepThree")
      }
    )
  } 
  if ( count === 1) {
    imgArr.forEach( (el) => {
      el.classList.remove("stepTwo")
      el.classList.remove("stepThree")
      el.classList.add("stepOne")
      }
    )
  } else if ( count === 2 ) {
    imgArr.forEach( (el) => {
      el.classList.remove("stepOne")
      el.classList.remove("stepThree")
      el.classList.add("stepTwo")
      }
    )
  }
  else if ( count === 3 ) {
    imgArr.forEach( (el) => {
      el.classList.remove("stepOne")
      el.classList.remove("stepTwo")
      el.classList.add("stepThree")
      }
    )
  }
  else { return }
}


