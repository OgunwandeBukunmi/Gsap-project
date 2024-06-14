let tl = gsap.timeline();

tl.to(".black", {
  x: "100%",
  duration: 2,
})
  .to(".letter", {
    display: "flex",
    y: "0",
    stagger: {
      each: 1,
      ease: "power",
    },
  })
  .to(".black", {
    x: "0",
    duration: 1.5,
  })
  .to(".welcome", {
    display: "flex",
  });
