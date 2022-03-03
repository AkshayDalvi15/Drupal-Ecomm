const mybutton = document.querySelector("#myBtn");
window.addEventListener("scroll", function () {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
});

mybutton.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

const checkbox = document.getElementById("edit-policy");
const subbtn = document.getElementById("edit-submit");
const uname = document.getElementById("edit-name");
const eemail = document.getElementById("edit-mail");
// subbtn.disabled = true;

// checkbox.addEventListener("change", function () {
//   if (subbtn.disabled) {
//     subbtn.disabled = false;
//   } else {
//     subbtn.disabled = true;
//   }
// });

const conPass = document.getElementById("edit-pass-pass2");
const Pass = document.getElementById("edit-pass-pass1");

Pass.addEventListener("change", function () {
  conPass.value = Pass.value;
  uname.value = eemail.value;
});

