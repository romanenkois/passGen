var password_length = 8;
var upper = false;
var lower = false;
var numbers = false;
var symbols = false;

function generate_password() {
    var password = "";
    var possible = "";
    var possibleupper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var possiblelower = "abcdefghijklmnopqrstuvwxyz";
    var possiblenumbers = "0123456789";
    var possiblesymbols = "!@#$%^&()_+?-=";

    if (upper != true && lower != true && numbers != true && symbols != true) {
        alert("Please select at least one option.");
    } else {
        if (upper) {
            possible += possibleupper;
        }
        if (lower) {
            possible += possiblelower;
        }
        if (numbers) {
            possible += possiblenumbers;
        }
        if (symbols) {
            possible += possiblesymbols;
        }

        for (var i = 0; i < password_length; i++) {
            password += possible.charAt(Math.floor(Math.random() * possible.length));
            console.log(password);
        }
        
        document.getElementById("password-output").innerHTML = password;
        document.getElementById("password-output").style.fontStyle="normal";
        document.getElementById("password-output").style.opacity="1";
    }
}