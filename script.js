const envelope = document.getElementById("envelope");

function openLetter() {
  envelope.classList.add("open");
}

function closeLetter() {
  envelope.classList.remove("open");

  // Return the page to the envelope
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
