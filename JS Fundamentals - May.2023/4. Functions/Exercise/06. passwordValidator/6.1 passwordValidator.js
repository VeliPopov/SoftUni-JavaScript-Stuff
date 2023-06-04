function passwordValidator(password) {
    let digitCount = 0;
    let letterCount = 0;

    for (let index = 0; index < password.length; index++) {
        let asciiChek = password.charCodeAt(index);

        if (asciiChek >= 48 && asciiChek <= 57) {
            digitCount++; // check if it's a digit (0-9)
        } else if ((asciiChek >= 65 && asciiChek <= 90) || (asciiChek >= 97 && asciiChek <= 122)) {
            letterCount++; // check if it's a letter (A-Z or a-z)
        }
    }
    // check password length
    if (password.length < 6 || password.length > 10) {
        console.log("Password must be between 6 and 10 characters");
    }
    // check if all characters are digits or letters   
    if (digitCount + letterCount !== password.length) {
        console.log("Password must consist only of letters and digits");
    }
    // check if there are at least 2 digits
    if (digitCount < 2) {
        console.log("Password must have at least 2 digits");
    }
    // if no issues were found, validate the password
    if (password.length >= 6 && password.length <= 10 && digitCount + letterCount === password.length && digitCount >= 2) {
        console.log("Password is valid");
    }
}
passwordValidator('logIn')
passwordValidator('MyPass123')
passwordValidator('Pa$s$s')

