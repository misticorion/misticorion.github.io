var previousScrollposition = 0;
document.getElementById("navbarbg").style.top = "-100px";
window.onscroll = function() {
var currentScrollPosition = window.pageYOffset;
  if (currentScrollPosition!=0) {
    
    document.getElementById("navbarbg").style.top = "0";
    
  }
  else{
  document.getElementById("navbarbg").style.top = "-100px";
}
  previousScrollposition = currentScrollPosition;
}
