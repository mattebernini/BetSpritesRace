
function Corridore(y, speedArr, img) {
    if(gioco.logged)
        this.name = img.slice(7, -4);
    else
        this.name = img.slice(6, -4);
    this.x = 0;
    this.y = y;
    this.speed = speedArr[0];
    this.speedArr = new Array();
    this.speedArr = speedArr;

    this.arrived = false;
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext("2d");

    //sprite e spritesheet
    this.sprite = new Image();
    this.sprite.src = img;
    //dimensioni effettive di un singolo sprite nello spritesheet
    this.spriteWidth = 112/7;
    this.spriteHeight = 96/4 + 1;
    //dimensioni che vogliamo dare al corridore durante la corsa
    this.width = this.spriteWidth*1.5;
    this.height = this.spriteHeight*1.5;

    this.inizia_a_tagliare_x = this.currFrame * this.spriteWidth;
    this.inizia_a_tagliare_y = 2 * this.spriteHeight;

    // variabile per le colonne
    this.currFrame = 0;  // frame corrente
    this.corre_frame = 4;   // numero di frame che ha lo spritesheet per la corsa


    this.updateFrame = function(){
        this.currFrame = ++this.currFrame % this.corre_frame;
        this.inizia_a_tagliare_x = this.currFrame * this.spriteWidth;
        this.x += this.speed;
        if(this.x+this.width >= canvas.width)
        {
            this.x = canvas.width - this.width;
            this.arrived = true;
        }
    }

    this.updateSpeed = function(){
        for (var i = 0; i < 40; i++) {
            if(this.x >= 25*i && this.x < 25*(i+1))
                this.speed = this.speedArr[i];
        }
    }

    this.update = function(){
        if(this.arrived == false)
        {
            this.ctx.clearRect(this.x, this.y, this.width, this.height);
            this.updateFrame();
            this.updateSpeed();
            this.ctx.drawImage(this.sprite, this.inizia_a_tagliare_x, this.inizia_a_tagliare_y, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
        }
        else
        {
            this.ctx.clearRect(this.x, this.y, this.width, this.height);
            this.ctx.drawImage(this.sprite, 0, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
        }
    }


}
