/**
 * 
 */
//% color=190 weight=100 icon="\f2bb"
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
