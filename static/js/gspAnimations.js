
gsap.from(".card-column", {
    scrollTrigger: {
        trigger: ".card-row",
        start: "3% center",
    },
    y: 100,
    stagger: 0.1,
    opacity: 0
});