function toggleInfo(product) {
  const info = document.getElementById(`${product}-info`);
  if (info.style.display === "block") {
    info.style.display = "none";
  } else {
    info.style.display = "block";
    if (product === "krish") {
      info.textContent = "Krish AI is an offline, multilingual AI assistant for Android & Windows, focusing on privacy and smart device control.";
    } else if (product === "gears") {
      info.textContent = "Gears is an student like ai that auto train itself on what you teach it in all aspects.";
    } else if (product === "vairavasec") {
      info.textContent = "Vairava Sec is an AI security softwre that provieds security to softwares , chatbot, ai tools.";
    }
  }
}
