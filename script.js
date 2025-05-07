// const bufferDivider = 2;
// const sectionHighlightBufferAmount = window.innerHeight / bufferDivider;

// const sections = document.querySelectorAll("section");
// const navLinks = document.querySelectorAll(".nav-link")

// window.addEventListener("scroll", () => {
//   sections.forEach((section) => {
//     const scrollDistance = scrollY;
//     const sectionTop = section.offsetTop;

//     if (scrollDistance >= sectionTop - sectionHighlightBufferAmount) {
//       navLinks.forEach(link =>
//         link.classList.remove("active"));

//       const activeId = section.getAttribute("id")

//       navLinks.forEach((link) => {
//         if (link.classList.contains(activeId))
//           link.classList.add("active");
//       });
//     }
//   });
// })

let c = document.getElementById("banner-canvas");
let ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Henry Thomas", 10, 50);
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();
