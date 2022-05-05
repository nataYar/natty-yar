import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); 

export const sliderFn = (introRef, nameRef, infoRef) => {
  const tlSlider = gsap.timeline({ defaults: { ease: 'power1.out' } });
  tlSlider.to('.text', { y: '0%', stagger: .1 , duration: .5});
  tlSlider.to('.slider', { y: '-100%', stagger: .2, duration: .8, delay: .5 });
  tlSlider.to(introRef, { y: '-100%', duration: 1 }, '<');
  tlSlider.fromTo(nameRef, { opacity: 0 }, { opacity: 1, duration: .5 });
  tlSlider.fromTo(infoRef, { opacity: 0 }, { opacity: 1, duration: .5 }, '<');
}

export const sectionNameFn = () => {
  // const titles = gsap.utils.toArray('.section-title');
  //   titles.forEach((el) => {
  //     const tlSectionName = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: el,
  //         start: () => '0% 100%',
  //         markers:true
  //       }
  //     });
  //     tlSectionName.fromTo(el, {y: '50px',}, { y: '0px', duration: .8, ease: "back.out(1.2)",});
  //     tlSectionName.fromTo(el, { opacity: 0 }, { opacity: 1, duration: .8 }, "<");
  //   })
}


export const heroImgFn = (heroRef) => {
  // const tl2 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '.header',
  //     start: "0%",
  //     // end: "100%",
  //     markers: true,
  //     scrub: true
  //   }
  // });
  // tl2.to(heroRef, { y:'100px', duration: 7 });
}

// export const projectNameFn = () => {
//   document.querySelectorAll('.project-name').forEach((el) => {
//     const tlSectionName = gsap.timeline({
//       scrollTrigger: {
//         trigger: el,
//         start: "-100%",
//         end: "bottom",
//         markers:true,
//         scrub: true
//       }
//     });
//     tlSectionName.fromTo(el, {y: '0px',}, { y: '50px', duration: .8, ease: "back.out(1.2)",});
//     tlSectionName.fromTo(el, { opacity: 1 }, { opacity: 0, duration: .8 }, "<");
//   })
// }

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


