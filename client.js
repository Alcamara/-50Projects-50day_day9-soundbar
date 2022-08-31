$(document).ready(readyNow);

function readyNow() {
    const sounds = [`hadouken`,
                    `sonicBoom`,
                    `tigerShot`,
                      `yogaFire` ]

   sounds.forEach((sound, indx)=>{

        $('#buttons').append(`<button id='${indx}' data-sound='${sound}'class='btn' >${sound}</button>`)

        $(`#${indx}`).on('click',playEffect)
   })
}


function playEffect() {
    console.log('test');
    const value = $(this).data('sound')
    console.log(value);

    $(`#${value}`).trigger('play')
    $(`#${value}`).siblings('.sound').trigger('pause')
}

