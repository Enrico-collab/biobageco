function playVideo() {
  const video = document.getElementById("video");
  const thumbnail = document.querySelector(".video-thumbnail");
  if (thumbnail) {
    thumbnail.remove(); // remove o banner com o botão
  }
  video.style.display = "block";
  video.setAttribute("controls", "true");
  video.play();
}

document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("video");
  video.style.display = "none";
});
