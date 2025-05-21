// script.js

function showInfo(section) {
  const krishInfo = document.getElementById("krish-info");
  const gearsInfo = document.getElementById("gears-info");

  if (section === "krish") {
    krishInfo.innerHTML = "<p>Krish AI is a smart offline AI assistant by AkaKrishTech, designed to handle device control, voice recognition, and offline tasks seamlessly.</p>";
    krishInfo.style.opacity = 0;
    setTimeout(() => {
      krishInfo.style.opacity = 1;
    }, 100);
    gearsInfo.innerHTML = "";
  } else if (section === "gears") {
    gearsInfo.innerHTML = "<p>Gears is a powerful tool by AkaKrishTech that detects connected components on microcontrollers and auto-generates code using AI.</p>";
    gearsInfo.style.opacity = 0;
    setTimeout(() => {
      gearsInfo.style.opacity = 1;
    }, 100);
    krishInfo.innerHTML = "";
  }
}
