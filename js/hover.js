document.body.onmouseover = handler;
document.body.onmouseout = handler;
document.body.onmousedown = handler;

function handler(event) {
    if (event.type == "mouseover") {
        if (event.target.tagName == "BUTTON") {
            event.target.style.borderBottom = "4px solid #ffcc00";
            return 1;
        }
    }

    if (event.type == "mouseout") {
        if (event.target.tagName == "BUTTON") {
            event.target.style.borderBottom = "";
            return 1;
        }
    }

    if (event.type == "mousedown") {
        if (event.target.tagName == "INPUT") {
            event.target.setAttribute("value", "");
            return 1;
        }
    }

    return 0;
}
