import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const scrollTriggerFn = () => { ScrollTrigger.refresh()}

// export const sectionNameFn = () => {
//   const titles = gsap.utils.toArray('.section-title');
//   // const popEl = gsap.utils.toArray('.popup-anim');
//     titles.forEach((el) => {
//       const tlSectionName = gsap.timeline({
//         scrollTrigger: {
//           trigger: el,
//           scrub: 1,
//           ease: "ease.in(1.2)",
//           // markers: true,
//           start: () => 'top 100%',
//           start: () => '100px 90%',
//         }
//       });
//       tlSectionName
//       .fromTo(el, {y: '50px',}, { y: '0px', duration: .6 })
//       .fromTo(el, { opacity: 0 }, { opacity: 1, duration: .6 }, "<");
//     })
// }

export const prContainerFn = () => {
  // const oddChild = gsap.utils.toArray('.project-item:nth-child(odd) .project-description');
  const child = gsap.utils.toArray('.project-item');
      child.forEach((el) => {
        const odd = gsap.timeline({
          defaults: {
            ease: "power1.out",
            duration: 1,
          },
          scrollTrigger: {
            trigger: el,
            markers: true,
            // scrub: 1,
            // start: '0% 95%', 
            start: () => '50px bottom',
            end: () => '250px 90%',
          }
        });
        // odd.fromTo(el, {
        //   y: '35px' }, {y: '0px'} )
        odd.fromTo(el, {  
          opacity: 0}, { opacity: 1}, "<");
      })
}


export const sliderFn = (introRef, nameRef, infoRef) => {
  const tlSlider = gsap.timeline({ defaults: { ease: 'power2.out' } });
  tlSlider.to('.text', { y: '0%', stagger: .1 , duration: .5})
  .to('.slider-header', { y: '-100%', stagger: .2, duration: .8, delay: .5 })
  .to(introRef, { y: '-100%', duration: 1 }, '<')
  .fromTo(nameRef, { opacity: 0 }, { opacity: 1, duration: .5 })
  .fromTo(infoRef, { opacity: 0 }, { opacity: 1, duration: .5 }, '<');
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