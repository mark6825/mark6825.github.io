function check_login() {
    var log = document.getElementById("login").value;
    var pass = document.getElementById("password").value;

    if (log == "log123") {
      document.getElementById("tx").innerHTML = log;
      document.location.href = 'profil.html';
      if (pass == "pass123") {
        document.getElementById("txV").innerHTML = pass;
        document.location.href = 'main.html';
      }
    }
    else {
      document.location.href = 'index.html';
      document.getElementById("tx").innerHTML = "orevuar!";
    }
  }