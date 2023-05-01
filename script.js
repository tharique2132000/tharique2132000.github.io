var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabContent of tabcontents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// ---------------------------Loading text--------------------------

//         const initialText = "KGTYUFVJE";
//         const welcomeText = "DEVELOPER";
//         // const welcomeText = document.getElementById("welcome-text");
//         const textElement = document.getElementById("welcome-text");
//         let loadedText = initialText;
//         let currentIndex = 0;

//         function loadRandomLetters() {
//             let randomLetters = "";
//             for (let i = 0; i < welcomeText.length; i++) {
//                 randomLetters += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
//             }
//             loadedText = randomLetters;
//             textElement.innerHTML = loadedText;
//             currentIndex = 0;
//             setTimeout(loadWelcomeText, 3);
//         }

//         function loadWelcomeText() {
//             if (loadedText[currentIndex] !== welcomeText[currentIndex]) {
//                 let newLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
//                 loadedText = loadedText.substr(0, currentIndex) + newLetter + loadedText.substr(currentIndex + 1);
//                 textElement.innerHTML = loadedText;
//                 setTimeout(loadWelcomeText, 3);
//             } else {
//                 currentIndex++;
//                 if (currentIndex === welcomeText.length) {
//                     return;
//                 }
//                 setTimeout(loadWelcomeText, 3);
//             }
//         }

//         function startLoading() {
//             loadRandomLetters();
//         }

// setInterval(() => {
//             startLoading();
// 			loadText(target, finalText);
// }, 4000);

// ---------------------------------------------------------------new typing animation-----------------------------
var typed = new Typed(" .welcome-text", {
  strings: ["Full Stack Developer.", "Content Creator.", "Designer."],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

// ----------------------------------------new skill page----------------------------------------------
// let options = {
//   startAngle: -1.55,
//   size: 150,
//   value: 0.85,
//   fill: { gradient: ["#f68813", "#f68813"] },
// };
// $(".circle .bar")
//   .circleProgress(options)
//   .on("circle-animation-progress", function (event, progress, stepValue) {
//     $(this)
//       .parent()
//       .find("span")
//       .text(String(stepValue.toFixed(2).substr(2)) + "%");
//   });
// $(".js .bar").circleProgress({
//   value: 0.6,
// });
// $(".node .bar").circleProgress({
//   value: 0.9,
// });
// $(".react .bar").circleProgress({
//   value: 0.6,
// });
