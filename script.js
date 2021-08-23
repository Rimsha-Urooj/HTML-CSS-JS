

// for login Page
function openForm(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// For Profile page
function openTab(action,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent1");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink1");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(action).style.display = "block";
    elmnt.style.backgroundColor = color;
  
}

// Function for Login Form Validation
function validateLoginForm(){
  let x = document.forms["loginForm"]["psw"].value;
  x= x.length;
  let text;
  if (isNaN(x)) 
  {
    text = "Input not valid";
    document.getElementById("demo").style.color = "red";
  } 
  else if (x < 6) {
    text = "Length Too short Input in the range of 6-8 Characters.";
    document.getElementById("demo").style.color = "red";

  }
  else if (x > 8)
  {
    text="Too long length. Allowed range is 6-8 characters.";
    document.getElementById("demo").style.color = "blue";

  }
  else{
    document.getElementById("demo").style.color = "green";

    text="Input Ok";
    document.getElementById("login").onclick = function () {
      location.href = "E-Shop.html";
  };
  }
  document.getElementById("demo").innerHTML = text;
  
}


// Function for Sign Up Form Validations
function validateSignUpForm(){
  let y = document.forms["signupForm"]["psw"].value;
  let z = document.forms["signupForm"]["psw-repeat"].value;

  // Fot password feild
  y= y.length;
  let text;
  if (isNaN(y)) 
  {
    text = "Input not valid";
    document.getElementById("demo1").style.color = "red";
  } 
  else if (y < 6) {
    text = "Length Too short Input in the range of 6-8 Characters.";
    document.getElementById("demo1").style.color = "red";

  }
  else if (y > 8)
  {
    text="Too long length. Allowed range is 6-8 characters.";
    document.getElementById("demo1").style.color = "blue";

  }
  else{
    document.getElementById("demo1").style.color = "green";

    text="Input Ok";
    
  }
  document.getElementById("demo1").innerHTML = text;

    // For reset password feild
  z= z.length;
  let text1, text2;
  if (isNaN(z)) 
  {
    text1 = "Input not valid";
    document.getElementById("demo2").style.color = "red";
  } 
  else if (z < 6) {
    text1 = "Length Too short Input in the range of 6-8 Characters.";
    document.getElementById("demo2").style.color = "red";

  }
  else if (z > 8)
  {
    text1="Too long length. Allowed range is 6-8 characters.";
    document.getElementById("demo2").style.color = "blue";

  }
  else{
    document.getElementById("demo2").style.color = "green";

    text1="Input Ok";

    let p = document.forms["signupForm"]["psw"].value;
    let pr = document.forms["signupForm"]["psw-repeat"].value;
    console.log(p);
    console.log(pr);
    if (p==pr){
      text2="Paswword Matches";
      document.getElementById("demo3").style.color = "green";
      document.getElementById("demo3").innerHTML = text2;
      document.getElementById("defaultOpen").click();
    }
    else{
      text2="Repeat Paswword Dont Matches with the password";
      document.getElementById("demo3").style.color = "red";
      document.getElementById("demo3").innerHTML = text2;
    }
    
  }
  document.getElementById("demo2").innerHTML = text1;
}


// Function for reset password form validation
function validateResetForm(){
  let y = document.forms["resetForm"]["psw"].value;
  let z = document.forms["resetForm"]["psw-repeat"].value;

  // Fot password feild
  y= y.length;
  let text;
  if (isNaN(y)) 
  {
    text = "Input not valid";
    document.getElementById("demo4").style.color = "red";
  } 
  else if (y < 6) {
    text = "Length Too short Input in the range of 6-8 Characters.";
    document.getElementById("demo4").style.color = "red";

  }
  else if (y > 8)
  {
    text="Too long length. Allowed range is 6-8 characters.";
    document.getElementById("demo4").style.color = "blue";

  }
  else{
    document.getElementById("demo4").style.color = "green";

    text="Input Ok";
    
  }
  document.getElementById("demo4").innerHTML = text;

    // For reset password feild
  z= z.length;
  let text1, text2;
  if (isNaN(z)) 
  {
    text1 = "Input not valid";
    document.getElementById("demo5").style.color = "red";
  } 
  else if (z < 6) {
    text1 = "Length Too short Input in the range of 6-8 Characters.";
    document.getElementById("demo5").style.color = "red";

  }
  else if (z > 8)
  {
    text1="Too long length. Allowed range is 6-8 characters.";
    document.getElementById("demo5").style.color = "blue";

  }
  else{
    document.getElementById("demo5").style.color = "green";

    text1="Input Ok";

    let p = document.forms["resetForm"]["psw"].value;
    let pr = document.forms["resetForm"]["psw-repeat"].value;
    console.log(p);
    console.log(pr);
    if (p==pr){
      text2="Paswword Matches";
      document.getElementById("demo6").style.color = "green";
      document.getElementById("demo6").innerHTML = text2;
      document.getElementById("defaultOpen").click();
    }
    else{
      text2="Repeat Paswword Dont Matches with the password";
      document.getElementById("demo6").style.color = "red";
      document.getElementById("demo6").innerHTML = text2;
    }
    
  }
  document.getElementById("demo5").innerHTML = text1;

}