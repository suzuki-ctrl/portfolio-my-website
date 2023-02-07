"use strict";

{
    const toggle = document.querySelector('.toggle');
    const menu = document.querySelector('.menu');

    toggle.addEventListener('click' , () => {
        menu.classList.toggle('active');
        toggle.classList.toggle('active')
    });

    for(let i = 1; i <= 3; i++) {
        const titles = document.getElementById(`title${i}`);
        const accordions = document.getElementById(`accordion${i}`);
        titles.addEventListener('click', () => {
            accordions.classList.toggle('appear');
            titles.classList.toggle('appear');
        })
    };

}