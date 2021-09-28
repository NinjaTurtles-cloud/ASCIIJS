const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const image1 = new Image();
image1.src = 'data:image/jpeg;base64,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';

const inputSlider = document.getElementById('resolution');
const inputLabel = document.getElementById('resolutionLabel');
inputSlider.addEventListener('change', handleSlider);

image1.onload = function initialize(){
    canvas.width = image1.width;
    canvas.height = image1.height;
    ctx.drawImage(image1, 0, 0);
}

class Cell {
    constructor(x, y, symbol, color){
        this.x = x;
        this.y = y;
        this.symbol = symbol;
        this.color = color;
    }
    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillText(this.symbol, this.x, this.y)
    }
}

class AsciiEffect{
    #imageCellArray = [];
    #pixels = [];
    #ctx;
    #width;
    #height;
    constructor(ctx, width, height){
        this.#ctx = ctx;
        this.#width = width;
        this.#height = height;
        this.#ctx.drawImage(image1, 0, 0, this.#width, this.#height);
        this.#pixels = this.#ctx.getImageData(0, 0, this.#width, this.#height);
        console.log(this.#pixels.data);
    }
    #convertToSymbol(g){
        if (g > 250) return '@';
        else if (g > 240) return '*';
        else if (g > 220) return '+';
        else if (g > 200) return '#';
        else if (g > 180) return '&';
        else if (g > 160) return '%';
        else if (g > 140) return '_';
        else if (g > 120) return ':';
        else if (g > 100) return '$';
        else if (g > 80) return '/';
        else if (g > 60) return '-';
        else if (g > 60) return 'X';
        else if (g > 60) return 'W';
        else return '';
    }
    #scanImage(cellSize){
        this.#imageCellArray = [];
        for (let y = 0; y < this.#pixels.height; y += cellSize){
            for(let x = 0; x < this.#pixels.width; x += cellSize){
                const posX = x * 4;
                const posY = y * 4;
                const pos = (posY * this.#pixels.width) + posX;

                if(this.#pixels.data[pos + 3] > 128){
                    const red = this.#pixels.data[pos];
                    const green = this.#pixels.data[pos + 1];
                    const blue = this.#pixels.data[pos + 2];
                    const total = red + green + blue;
                    const averageColorValue = total/3;
                    const color = "rgb(" + red + "," + green + "," + blue + ")";
                    const symbol = this.#convertToSymbol(averageColorValue);
                    if (total > 200) this.#imageCellArray.push(new Cell(x, y, symbol, color));
                }
            }
        }
        console.log(this.#imageCellArray);
    }
    #drawAscii(){
        this.#ctx.clearRect(0,0, this.#width, this.#height);
        for (let i = 0; i < this.#imageCellArray.length; i++ ){
            this.#imageCellArray[i].draw(this.#ctx);
        }
    }
    draw(cellSize){
        this.#scanImage(cellSize);
        this.#drawAscii();
    }

}

let effect;
function handleSlider(){
    if (inputSlider.value == 1){
        inputLabel.innerHTML = 'Original image';
        ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
    } else {
        inputLabel.innerHTML = "Resolution: " + inputSlider.value + 'px'; 
        effect.draw(parseInt(inputSlider.value));
    }
}

image1.onload = function initialize(){
    canvas.width = image1.width;
    canvas.height = image1.height;
    //ctx.drawImage(image1, 0, 0);
    effect = new AsciiEffect(ctx, image1.width, image1.height);
    effect.draw(3);
}