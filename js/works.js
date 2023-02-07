"use strict";

{

    for(let i = 1; i <= 20; i++) {
        const titles = document.getElementById(`title${i}`);
        const accordions = document.getElementById(`accordion${i}`);
        titles.addEventListener('click', () => {
            accordions.classList.toggle('appear');
            titles.classList.toggle('appear');
        })
    };

}