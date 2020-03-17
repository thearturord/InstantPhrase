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
////////// Page name value /////////////////
/////////////////////////////////////////////

let fPervFrases = "PervFrases";
let fJuguetona = "Juguetona";
let fSexologia = "Sexologia";

/////////////////////////////////////////////
////////// Page user naem value /////////////////
/////////////////////////////////////////////

let uPervFrases = "@Perv.frases";
let uJuguetona = "@juguetonaa";
let uSexologia = "@sxlogia";

//////////////////////////////////////////////////////////
//////// Page global name and user name caller //////////
////////////////////////////////////////////////////////

let pageName = fPervFrases;
let pageUserName = uPervFrases;

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
        // tray.width = 1080;
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

      let loadedImg = storeImgCount[i];
      let logoAddUp = 250;

      canvas.className = "canvas";
      canvas.style.display = "block";
      canvas.width = loadedImg.width;
      canvas.height = loadedImg.height + logoAddUp;

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
      let test2 = text[i];
      loadFilter(canvas, ctx, loadedImg);
      wrapText(canvas, ctx, test2)
      attacheIt(canvas, downloadBtn, containDiv);
    }
    // else {
    //   alert("No se ha escrito ninguna frase");
    // }
  }

}

function loadFilter(canvas, ctx, loadedImg) {

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 10, 20, 250, 250);
  let scaledW = canvas.width * 0.95;
  let scaledH = canvas.height * 0.8;
  let addUp = 0;
  ctx.drawImage(loadedImg, canvas.width * 0.029, canvas.height * 0.2, scaledW, scaledH);
  ctx.beginPath();
  ctx.font = "bold 60px helvetica";
  ctx.fillStyle = "black";
  ctx.fillText(pageName, canvas.width / 3 - canvas.width * 0.14, 110);
  ctx.fillStyle = "rgb(101, 119, 134)";
  ctx.font = "400 50px helvetica";
  ctx.fillText(pageUserName, canvas.width / 3 - canvas.width * 0.14, 190);

  // ctx.fillStyle = "rgba(50,50,50,0.3)";
  // ctx.fill();
  // div.appendChild(canvas);
}

function wrapText(canvas, ctx, test2) {

  console.log(test2);

  if (test2 !== undefined) {

    let words = test2.split(' ');
    let line = '';

    let fontStyle = "200px bebasNeue";
    ctx.font = fontStyle;
    ctx.textAlign = "center";

    left = 20;
    center = canvas.width / 2;
    width = canvas.width - left * 2;
    y = 40;
    size = 72;
    maxWidth = 890;
    lineHeight = 90;

    y += canvas.height / 2 - canvas.height * 0.12;

    for (let i = 0; i < words.length; i++) {
      let testLine = line + words[i] + ' ';
      let metrics = ctx.measureText(testLine);
      console.log(metrics); 
      let testWidth = metrics.width;
      if (testWidth > maxWidth && i > 0) {
        ctx.beginPath();
        ctx.textAlign = "center";
        ctx.font = fontStyle;
        // ctx.fillStyle = "rgba(0,0,0,0.2)";
        // ctx.fillRect(0, 0, canvas.width, canvas.height);
        // ctx.fillStyle = "black";
        ctx.fillStyle = "black";
        ctx.fillJustifyText(line, center, y += size, width);
        line = words[i] + ' ';
        // y += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.beginPath();
    ctx.textAlign = "center";
    ctx.fillStyle = "black";
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
  img.src = "media/perv meme.jpg";
  pageName = fPervFrases;
  pageUserName = uPervFrases;
}


function sexologia() {
  imgLogo.src = "media/sex.jpg";
  img.src = "media/sexologia.png";
  pageName = fSexologia;
  pageUserName = uSexologia;
}

function juguetona() {
  imgLogo.src = "media/juguetona.png";
  img.src = "media/juguetona.png";
  pageName = fJuguetona;
  pageUserName = uJuguetona;
}
