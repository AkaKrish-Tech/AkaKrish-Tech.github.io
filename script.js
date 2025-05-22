function toggleInfo(product) {
  const info = document.getElementById(`${product}-info`);
  if (info.style.display === "block") {
    info.style.display = "none";
  } else {
    info.style.display = "block";
    if (product === "krish") {
      info.textContent = "Krish AI is an offline, multilingual AI assistant for Android & Windows, focusing on privacy and smart device control.";
    } else if (product === "gears") {
      info.textContent = "Gears connects to microcontrollers like Arduino, detects components using AI, and generates real-time code for developers.";
    }
  }
}
