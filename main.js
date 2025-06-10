function school(a) {
  const p = document.querySelectorAll("p");

  if (a == 0) {
    p[0].style.display = "flex";
    p[1].style.display = "none";
    p[2].style.display = "none";
  } else if (a == 1) {
    p[1].style.display = "flex";
    p[0].style.display = "none";
    p[2].style.display = "none";
  } else {
    p[2].style.display = "flex";
    p[1].style.display = "none";
    p[0].style.display = "none";
  }
}
