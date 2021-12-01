/**
 * 
 */
//% color=190 weight=100 icon="<i class="audio description icon"></i>" block="Prueba de Botones"
namespace Botones {
    //% block
    export function Pruebadebotones() : void{
        if(input.buttonIsPressed(Button.A)){
            basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            # . . . #
            # . . . #
            `);
        }
        else if(input.buttonIsPressed(Button.B)){
            basic.showLeds(`
            # # # # .
            # . . . #
            # . # # .
            # . . . #
            # # # # .
            `);
        }
        return;
    }
}
