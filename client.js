$(document).ready(readyNow);

function readyNow() {
    const sounds = [`Ryu's Hadouken`,
                    `Guile's Sonic Boom`,
                    `Sagat's Tiger Shot`,
                      `Sim's Yoga Fire` ]

   sounds.forEach((sound)=>{

        $('#buttons').append(`<button >${sound}</button>`)

   })
}