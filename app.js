//Querry all imgage on page
let img = document.querySelectorAll("img");

//Flag status of extension
let isOpen = false;

// store key pressed
let keysPressed = {};

//Check alt and insert element to notice
function checkAlt() {
    if(img.length>0){
        img.forEach(item => {
            if (item.alt) {
                item.insertAdjacentHTML("beforebegin", `<p style="color:green;font-weight: bold; border: 2px solid green; padding: 5px; border-radius: 7px; position:relative; top: 65px">${item.alt}</p>`);
            } else {
                item.insertAdjacentHTML("beforebegin", "<p style=\"color:red;font-weight: bold; border: 2px solid" +
                    " red; padding: 5px; border-radius: 7px;position:relative; top: 65px\n" + "            text-align:center;background-color:yellow;\">Alt is\n" + "                missing\n" + "                !!!</p>");
            }

        })
    }

}

//If turn off remove all element notice
function stopCheckAlt() {
    if(img.length>0){
        img.forEach(item => {
            let last;
            while (last = item.lastChild) {
                item.removeChild(last);
            }
        })
    }
}

//Add event listener when press Ctrl + Z to open of off
document.addEventListener('keydown', (event) => {
    keysPressed[event.code] = true;
    if (keysPressed['ControlLeft'] && event.code === 'KeyZ' && !isOpen) {
        isOpen = true;
        checkAlt();
    } else if (keysPressed['ControlLeft'] && event.code === 'KeyZ' && isOpen) {
        alert("Check Alt Img extension is turnOff !!!!!")
        isOpen = false;
        stopCheckAlt();
        location.reload();
    }
});

//Remove key pressed
document.addEventListener('keyup', (event) => {
    delete keysPressed[event.key];
});

