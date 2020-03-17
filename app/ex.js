

//////////////////////////////////////////////////////////////
//  Old simple style to render and justify
//////////////////////////////////////////////////////////////


  wrapText(ctx, text, x, y, maxWidth, lineHeight);


  function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
      let words = text.split(' ');
      let line = '';

      for(let i = 0; i < words.length; i++) {
        let testLine = line + words[i] + ' ';
        let metrics = ctx.measureText(testLine);
        let testWidth = metrics.width;
        if (testWidth > maxWidth && i > 0) {
          ctx.fillText(line, x, y);
          line = words[i] + ' ';
          y += lineHeight;
        }
        else {
          line = testLine;
        }
      }
      ctx.fillText(line, 120, y);
    }

}

/////////////////////////////////////////////////
////////////////////////////////////////////////







let canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d', {
  alpha: false
});

ctx.imageSmoothingQuality = "high";


ctx.fillText("no cambiaría un minuto de ayer" + "contigo por cien años de vida sin ti", canvas.width / 2, canvas.height/ 2);
ctx.fillStyle = "rgba(50,50,50,0.3)";
ctx.fill();

let text = 'no cambiaría un minuto de ayer contigo por cien años de vida sin ti.';


ctx.font = '70px bebas neue';

ctx.strokeJustifyText( text, x, y, width);
ctx.fillStyle = "rgba(0,0,0,1)";
ctx.fillStyle = '#333';





ctx is the 2d context
canvas is the canvas



let left = 20;
let center = canvas.width / 2;
let width = canvas.width - left * 2;
let y = 40;
let size = 40;

ctx.fillJustifyText(text, center, y += size, width);


y += canvas.height / 2 - canvas.height * 0.04;

ctx.beginPath();
ctx.fillJustifyText(text, center, y, width);
ctx.fillJustifyText(text, center, y+=size, width);
ctx.fillJustifyText(text, center, y+=size, width);

//////////////////////////////////////////////////////////////
//                  justify
//////////////////////////////////////////////////////////////

let textInput = document.getElementById('text').value;
let text = textInput.split("\n");
let maxWidth = 1080;
let lineHeight = 90;
