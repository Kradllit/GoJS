var login = prompt('Login:', '');
if (login == "admin") {
    var pass = prompt('Password:', '');
    if (pass == "passw0rd") alert("Welcome home!");
    else alert("Wrong password")
}
else if (login === null) alert("Canceled!");
else alert("Access denied");