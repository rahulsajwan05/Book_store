var customerArray = [];
var customerObj;

function init() {
  if (localStorage.customerRecord) {
    customerArray = JSON.parse(localStorage.customerRecord);
  }
}

function registration() {
  var userName = document.getElementById('username').value;
  var userEmail = document.getElementById('email').value;
  var userPassword = document.getElementById('pw').value;

  // alert(customerArray.length);
  if (username.value.length == 0) {
    alert('Please fill in username');

  } else if (email.value.length == 0) {
    alert('Please fill in email');

  } else if (pw.value.length == 0) {
    alert('Please fill in password');
    
  } else if (
    username.value.length == 0 &&
    email.value.length == 0 &&
    pw.value.length == 0
  ) {
    alert('Please fill all Details');
  } else if (
    userEmail.indexOf('@') <= 0 &&
    userEmail.charAt(userEmail.length - 4) != '.' &&
    userEmail.charAt(userEmail.length - 3) != '.'
  ) {
    alert(' plx enter correct email id');
  } else {
    customerArray = JSON.parse(localStorage.customerRecord);
    //alert(customerArray.length);
    for (i = 0; i < customerArray.length; i++) {
      if (customerArray[i].useremail == userEmail) {
        alert('already registered this mail id');
        break;
      }
    }
    if (i == customerArray.length) {
      customerObj = {
        username: userName,
        useremail: userEmail,
        userpassword: userPassword,
      };
      customerArray.push(customerObj);

      localStorage.customerRecord = JSON.stringify(customerArray);

      alert('Your account has been created');

      document.getElementById('username').value = ' ';
      document.getElementById('email').value = ' ';
      document.getElementById('pw').value = ' ';
    }
    window.location.href = './index.html';
  }
}

function login() {
  event.preventDefault();
  const users = JSON.parse(localStorage.getItem('customerRecord'));

  const email = document.getElementById('email').value;
  const pass = document.getElementById('pw').value;
  // find the user where emil = useremail && password = userpassword
  const user = users.find(u => u.useremail === email && u.userpassword === pass);
  // This means we find a user is storage
  if (user) {
    alert('Login Success');
    window.location.href = "./home.html";
  } else {
    alert('User Not Found');
  }
}
