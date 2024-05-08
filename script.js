
gsap.to("#page-2 h1", {
  transform: "translateX(-98%)",
  scrollTrigger: {
    trigger: "#page-2",
    scroller: "body",
    // markers: true,
    start: "top 0%",
    scrub: 3,
    pin: true
  },
});


