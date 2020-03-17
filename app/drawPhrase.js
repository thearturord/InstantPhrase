/////////////////////////////////////////////
////////// Getting elements /////////////////
/////////////////////////////////////////////

let display = document.getElementById('display');
let download = document.getElementById('download');
let div = document.getElementById('div');
// let img = document.createElement("img");
// img.className = img;
// img.src = "media/imgT.jpg";
let imgLogo = document.getElementById('logoImg');

display.style.display = "block";
/////////////////////////////////////////////
////////// Functions ////////////////////////
/////////////////////////////////////////////

function trigger() {
  justifyIt();
  drawIt();
}

download.addEventListener("click", function() {

  let canvasArray = document.getElementsByClassName('canvas');

  for (let i = 0; i < canvasArray.length; i++) {
    let a = document.createElement("a");
    document.body.appendChild(a);
    a.href = canvasArray[i].toDataURL("image/jpeg");
    a.download = "canvas-picture" + " " + i + ".jpg";
    a.click();
    document.body.removeChild(a);
  }

  if (canvasArray.length === 0) {
    alert("There is nothing to download yet, write some phrases =)");
  }else {
    alert("all downloads completed, please clean all to avoid errors.");
  }



});

function drawIt() {

  createCanvas();

}

function createCanvas() {

  let textInput = document.getElementById('text').value;
  let text = textInput.split("\n");

  while (div.hasChildNodes()) {
    div.removeChild(div.firstChild);
  }

  for (let i = 0; i < text.length; i++) {

    // let img = document.getElementById('img');


    if (text[i] !== "") {

      let canvas = document.createElement("canvas");
      canvas.className = "canvas";
      canvas.style.display = "block";
      canvas.width = img.width;
      canvas.height = img.height;

      let containDiv = document.createElement("div");
      containDiv.className = "containDiv";
      div.appendChild(containDiv);
      let downloadBtn = document.createElement("a");
      downloadBtn.textContent = "Download";
      downloadBtn.download = "canvas-picture" + " " + i + ".jpg";
      downloadBtn.className = "downloadBtn";
      let ctx = canvas.getContext('2d', {
        alpha: false
      });
      let test = text[i];
      loadFilter(canvas, ctx, text);
      wrapText(canvas, ctx, test);
      attacheIt(canvas, downloadBtn, containDiv);
    }
    // else {
    //   alert("No se ha escrito ninguna frase");
    // }
  }

}

function loadFilter(canvas, ctx, text) {

  for (let i = 0; i < text.length; i++) {
    let fontStyle = "72px bebasNeue";
    ctx.font = fontStyle;
    ctx.textAlign = "center";
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    // div.appendChild(canvas);
  }

}

function wrapText(canvas, ctx, test) {

  let words = test.split(' ');
  let line = '';

  left = 20;
  center = canvas.width / 2;
  width = canvas.width - left * 2;
  y = 40;
  size = 72;
  maxWidth = 890;
  lineHeight = 90;
  let fontStyle = "72px bebasNeue";

  y += canvas.height / 2 - canvas.height * 0.12;

  for (let i = 0; i < words.length; i++) {
    let testLine = line + words[i] + ' ';
    let metrics = ctx.measureText(testLine);
    let testWidth = metrics.width;
    if (testWidth > maxWidth && i > 0) {
      ctx.beginPath();
      ctx.textAlign = "center";
      ctx.font = fontStyle;
      ctx.fillJustifyText(line, center, y += size, width);
      line = words[i] + ' ';
      // y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.beginPath();
  ctx.textAlign = "center";
  ctx.fillJustifyText(line, center, y += size, width);
  ctx.beginPath();
  ctx.font = "60px Shellia";
  y += 30;
  ctx.fillJustifyText("PerFrases", center, y += size, width);

  //closing
}

function attacheIt(canvas, downloadBtn, containDiv) {
  containDiv.appendChild(canvas);
  downloadBtn.href = canvas.toDataURL("image/jpeg");
  containDiv.appendChild(downloadBtn);
}

function pervFrases(){
  imgLogo.src = "media/perv.jpg";
  img.src = "media/imgT.jpg";
}


function sexologia(){
  imgLogo.src = "media/sex.jpg";
  img.src = "media/sexologia.jpg";
}
