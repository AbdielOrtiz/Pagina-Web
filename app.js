var times = 0;
document.querySelector(".options").addEventListener("click", () => {
  document.querySelector(".flex-container-ul").classList.toggle("show");
  times++;
  if (times == 1) {
    document.querySelector(".all-content").classList.toggle("pair");
    times--;
  }
});