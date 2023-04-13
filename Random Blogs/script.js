document.querySelector(".img-btn").addEventListener("click", function() {
    document.querySelector(".cont").classList.toggle("s-signup");
}
);
var inputpass = document.getElementById("myInput"),
icon= document.getElementById("icon");
icon.onclick = function () {
 
    if(inputpass.className == "pass") {
       inputpass.setAttribute("type", "text");
       icon.className = "bi bi-eye";
      inputpass.className = " ";

    } else {
       inputpass.setAttribute("type", "password");
       icon.className = "bi bi-eye-slash";
      inputpass.className = "pass";
   }

  }

