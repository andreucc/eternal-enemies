'use strict'

class Game{
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.player;
        this.enemies = [];
    }

    startLoop (){
        console.log('out of loop');
        this.player = new Player(this.canvas, 3)
        const loop = () => {
            console.log('in the loop');
            this.updateCanvas();
            this.clearCanvas();
            this.drawCanvas();
            window.requestAnimationFrame(loop);
        }
        window.requestAnimationFrame(loop);
    }
     

    updateCanvas(){
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        this.player.update();
    };

    clearCanvas(){
        
    };

    drawCanvas(){
        this.player.draw()
    };
}