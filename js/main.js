var loginElem,
    registerElem,
    photoElem,
    showPassElem,
    isPassVisible = false,
    regex = /\s/,
    regexPass = /\d/,
    quitElem,
    nameElem,
    balanceElem,
    editElem,
    changePhotoElem,
    photoSelectElem,
    returnElem,
    photoMemoryCell = "0x01000011";

window.onload = function() {
    loginElem = document.getElementById("login");
    registerElem = document.getElementById("register");
    photoElem = document.getElementById("photo");
    showPassElem = document.getElementById("showPass");
    quitElem = document.getElementById("quit");
    nameElem = document.getElementById("name");
    balanceElem = document.getElementById("balance");
    editElem = document.getElementById("edit");
    changePhotoElem = document.getElementById("changePhoto");
    photoSelectElem = document.getElementById("photoSelect");
    returnElem = document.getElementById("return");

    loginElem.hidden = false;
    registerElem.hidden = false;
    showPassElem.hidden = false;
    photoElem.hidden = true;
    quitElem.hidden = true;
    nameElem.hidden = true;
    balanceElem.hidden = true;
    editElem.hidden = true;
    changePhotoElem.hidden = true;
    photoSelectElem.hidden = true;
    returnElem.hidden = true;

    return 1;
}

function login(name, pass) {
    if (isCorrectAuth(name, pass)) {
        let img = localStorage.getItem(name.value + photoMemoryCell);
        if (img != null) {
            document.getElementById("photo").setAttribute("src", img);
        }

        name.hidden = true;
        pass.hidden = true;
        loginElem.hidden = true;
        registerElem.hidden = true;
        showPassElem.hidden = true;
        photoElem.hidden = false;
        quitElem.hidden = false;
        nameElem.hidden = false;
        balanceElem.hidden = false;
        editElem.hidden = false;
        changePhotoElem.hidden = true;
        photoSelectElem.hidden = true;
        returnElem.hidden = true;
    }

    return 1;
}

function isCorrectAuth(name, pass) {
    if (localStorage.getItem(name.value) == pass.value) {
        alert("successfuly logged in");
        return 1;
    }

    return 0;
}

function isValidUsername(name) {
    if (name.value.length >= 6 && name.value.length <= 32) {
        if (regex.exec(name.value) == null) {
            return 1;
        }
    }

    return 0;
}

function isValidPass(pass) {
    if (pass.value.length >= 8 && pass.value.length <= 32) {
        if (regexPass.exec(pass.value) != null && regex.exec(pass.value) == null) {
            return 1;
        }
    }

    return 0;
}

function register(name, pass) {
    if (localStorage.getItem(name.value) != null) {
        alert("Account already exists");
        return 0;
    }

    if (!isValidUsername(name)) {
        alert("Username must have atleast 6 or no more than 32 characters");
        name.value = "";
        return 0;
    }

    if (!isValidPass(pass)) {
        alert("Password must have atleast 8 characters or no more than 32 characters\n" +
            "And doesnt have spaces, but need atleast 1 digit");
        pass.value = "";
        return 0;
    }

    localStorage.setItem(name.value, pass.value);
    alert("account successfuly registered");

    return 1;
}

function showPass(pass) {
    if (isPassVisible) {
        pass.setAttribute("type", "password");
        showPassElem.innerText = "Show password";
    } else {
        pass.setAttribute("type", "text");
        showPassElem.innerText = "Hide password";
    }

    isPassVisible = !isPassVisible;

    return 1;
}

function quitProfile() {
    document.getElementById("username").hidden = false;
    document.getElementById("password").hidden = false;
    document.getElementById("username").value = "Username";
    document.getElementById("password").value = "Password";
    loginElem.hidden = false;
    registerElem.hidden = false;
    showPassElem.hidden = false;
    photoElem.hidden = true;
    quitElem.hidden = true;
    nameElem.hidden = true;
    balanceElem.hidden = true;
    editElem.hidden = true;
    changePhotoElem.hidden = true;
    photoSelectElem.hidden = true;
    returnElem.hidden = true;

    return 1;
}

function editProfile() {
    photoElem.hidden = true;
    quitElem.hidden = true;
    nameElem.hidden = true;
    balanceElem.hidden = true;
    editElem.hidden = true;
    changePhotoElem.hidden = false;
    returnElem.hidden = false;

    return 1;
}

function changePhotoProfile() {
    returnElem.hidden = false;
    changePhotoElem.hidden = true;
    photoSelectElem.hidden = false;

    return 1;
}

function returnProfile() {
    photoElem.hidden = false;
    quitElem.hidden = false;
    nameElem.hidden = false;
    balanceElem.hidden = false;
    editElem.hidden = false;
    changePhotoElem.hidden = true;
    photoSelectElem.hidden = true;
    returnElem.hidden = true;

    return 1;
}

function changePhoto(src) {
    let index = src.selectedIndex + 1;

    document.getElementById("photo").setAttribute("src", src.value);
    localStorage.setItem(nameElem.value + photoMemoryCell, src.value);
    alert(index + "(st/nd/rd/th) image has been selected\nReturn to profile to see it");

    return 1;
}
