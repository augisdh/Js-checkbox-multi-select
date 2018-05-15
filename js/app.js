"use strict";

const checkBoxes = document.querySelectorAll(".item input");
let lastChecked;

function selectMulti(event){
    let between = false;

    if(event.shiftKey && this.checked){
        checkBoxes.forEach(checkbox => {
            if(checkbox === this || checkbox === lastChecked){
                between = !between;
            }

            if(between){
                checkbox.checked = true;
            }
        });
    }

    lastChecked = this;
}

checkBoxes.forEach(checkbox => checkbox.addEventListener("click", selectMulti));