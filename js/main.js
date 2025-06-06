
window.onload = function() {
  document.body.classList.add("transition", "duration-700", "ease-in", "opacity-0");
  setTimeout(() => {
    document.body.classList.remove("opacity-0");
  }, 50);

  const wp = document.createElement('a');
  wp.href = "https://wa.me/50767696539";
  wp.target = "_blank";
  wp.style.position = "fixed";
  wp.style.bottom = "20px";
  wp.style.right = "20px";
  wp.style.zIndex = "9999";
  wp.innerHTML = '<img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="WhatsApp">';
  document.body.appendChild(wp);
};
