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
   
    const value = $(this).data('sound')
    

    $(`#${value}`).trigger('play').siblings('.sound').trigger('pause')
}

