"use strict";

const checkBoxes = document.querySelectorAll(".item input");
let lastChecked;

function selectMulti(event){
    let between = false;

    if(event.shiftKey && this.checked){
        checkBoxes.forEach(checkBox => {
            if(checkBox === this || checkBox === lastChecked){
                between = !between;
            }

            if(between){
                checkBox.checked = true;
            }
        });
    }

    lastChecked = this;
}

checkBoxes.forEach(checkBox => checkBox.addEventListener("click", selectMulti));
