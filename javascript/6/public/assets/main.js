function openNav() {
  document.getElementById("mySidebar").style.width = "350px";
  document.getElementById("mybody").style.marginLeft = "350px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("mybody").style.marginLeft = "0";
}

function myNavbar() {
  let x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
