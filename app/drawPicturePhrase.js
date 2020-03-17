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
let file = document.getElementById('file');


/////////////////////////////////////////////
////////// Functions ////////////////////////
/////////////////////////////////////////////

function trigger() {
  justifyIt();
  drawIt();
}

file.addEventListener("change", function loadMeme() {

  for (let i = 0; i < this.files.length; i++) {
    const filex = this.files[i];

    if (filex) {
      const reader = new FileReader();

      reader.addEventListener("load", function() {
        let tray = document.createElement("img");
        tray.setAttribute("src", this.result);
        tray.id = "imgObtained";
        tray.className = "imgObtained";
        tray.width = 200;
        document.body.appendChild(tray);
        display.style.display = "block";
      });
      reader.readAsDataURL(filex);
    }
  }

});

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
  } else {
    alert("all downloads completed, please clean all to avoid errors.");
  }



});

function drawIt() {

  createCanvas();

}

function createCanvas() {

  let imgObtainedArray = document.getElementsByClassName('imgObtained');
  let storeImgCount = imgObtainedArray;

  let textInput = document.getElementById('text').value;
  let text = textInput.split("\n");

  while (div.hasChildNodes()) {
    div.removeChild(div.firstChild);
  }

  for (let i = 0; i < storeImgCount.length; i++) {

    let img = document.getElementById('img');

    if (storeImgCount[i] !== "") {

      let canvas = document.createElement("canvas");

      canvas.className = "canvas";
      canvas.style.display = "block";
      canvas.width = 1080;
      canvas.height = 1080;

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
      let test = storeImgCount[i];
      let test2 = text[i];
      loadFilter(canvas, ctx, test, test2);
      attacheIt(canvas, downloadBtn, containDiv);
    }
    // else {
    //   alert("No se ha escrito ninguna frase");
    // }
  }

}

function loadFilter(canvas, ctx, test, test2) {

  let sexLogo = document.getElementById('sex');

  let fontStyle = "72px bebasNeue";
  ctx.font = fontStyle;
  ctx.textAlign = "center";
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(test, 0 , 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(0,0,0,0.3)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(sexLogo, canvas.width / 2 - canvas.width * 0.02, 295, 100, 150);
  wrapText(canvas, ctx, test2);

}

function wrapText(canvas, ctx, test2) {

  if (test2 !== undefined) {

  let words = test2.split(' ');
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
      // ctx.fillStyle = "rgba(0,0,0,0.2)";
      // ctx.fillRect(0, 0, canvas.width, canvas.height);
      // ctx.fillStyle = "black";
      ctx.fillStyle = "white";
      ctx.fillJustifyText(line, center, y += size, width);
      line = words[i] + ' ';
      // y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.beginPath();
  ctx.textAlign = "center";
  ctx.fillStyle = "white";
  ctx.fillJustifyText(line, center, y += size, width);
  }
  //closing
}

function attacheIt(canvas, downloadBtn, containDiv) {
  containDiv.appendChild(canvas);
  downloadBtn.href = canvas.toDataURL("image/jpeg");
  containDiv.appendChild(downloadBtn);
}

function pervFrases() {
  imgLogo.src = "media/perv.jpg";
  img.src = "media/imgT.jpg";
}


function sexologia() {
  imgLogo.src = "media/sex.jpg";
  img.src = "media/sexologia.jpg";
}
