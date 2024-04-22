var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event, tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}


document.getElementById("githubLink").addEventListener("click", function() {
  window.location.href = "https://github.com/felixkamau";
});


document.getElementById("github").addEventListener("click", function(){
  window.open("https://github.com/felixkamau", "_blank");
});



document.getElementById("twitter").addEventListener("click", function(){
  window.open("https://twitter.com/dev_kamau", "_blank");
});

