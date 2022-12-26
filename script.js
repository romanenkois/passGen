/*var password_length = 8;
var upper = 1;
var lower = 1;
var numbers = 1;
var symbols = 1;

var options = document.getElementsByName("options")

options.addEventListener("click", function(event) {
    event.preventDefault()

    var password_length = document.getElementById("length").value;
})

/*options.addEventListener("click", function() {
    if (this.value == "length") {
        password_length = this.value;
    } else

    if (this.value == "upper") {
        if (upper == 1) {
            upper = 0;
        } else {
            upper = 1;
        }
    } else if (this.value == "lower") {
        if (lower == 1) {
            lower = 0;
        } else {
            lower = 1;
        }
    } else if (this.value == "numbers") {
        if (numbers == 1) {
            numbers = 0;
        } else {
            numbers = 1;
        }
    } else if (this.value == "symbols") {
        if (symbols == 1) {
            symbols = 0;
        } else {
            symbols = 1;
        }
    }
});
*/
var password_length = 8;
var upper = true;
var lower = true;
var numbers = true;
var symbols = true;

function generate_password() {
    var password = "";
    var possible = "";
    var possibleupper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var possiblelower = "abcdefghijklmnopqrstuvwxyz";
    var possiblenumbers = "0123456789";
    var possiblesymbols = "!@#$%^&*()_+?></-=";

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

        }

        document.getElementById("password-output").innerHTML = password;
    }
}
