const titleDelay = document.querySelectorAll('h1, span');
const imageLottie = document.querySelectorAll('lottie-player');
const myName = document.querySelectorAll('h2');
const anchre = document.querySelectorAll('a');

window.addEventListener('load', () =>{
    
    const delay = gsap.timeline({paused:true});

    delay
    .staggerFrom(titleDelay, 1, {x: -50, opacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(imageLottie, 0.8, {scale: 0, ease: "power2.out"},'-=2')
    .from(myName, 1, {width:0, ease: "power2.out"}, 0.3, '-=2')
    .staggerFrom(anchre, 1, {y: -200, ease: "power2.out"}, 0.3, '-=1');

    delay.play();
})