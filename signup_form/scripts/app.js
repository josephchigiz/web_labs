// form validation
function formValidate() {
  let checkName = document.form1.name.value;
  let checkEmail = document.form1.email.value;
  let checkNum = document.form1.number.value;
  let displayFlex = document.getElementById("displayData");

  if (checkName == "") {
    alert("Kindly fill your name.");
    return false;
  } else if (checkEmail == "") {
    alert("Hey! Don't forget your email now.");
    return false;
  } else if (checkNum == "") {
    alert("Input your phone number too!");
    return false;
  } else {
    displayFlex.style.display = "flex";
  }
}

// display data on submit
document.getElementById("form1").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const tel = document.getElementById("tel").value;
  const course = document.getElementById("courses").value;

  const displayFormData = `<p>Congratulations ${name}! Registration Successful.🥳<br><br>Name: ${name} <br>Email: ${email} <br>Phone No: ${tel} <br>Course: ${course}</p>`;
  document.getElementById("displayData").innerHTML = displayFormData;

  const myForm = document.getElementById("form1");
  myForm.reset();
});
