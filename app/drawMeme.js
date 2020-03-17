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

let scale = 1;
let imgHeight = img.height * scale;
let imgWidth = img.width * scale;


function createCanvas() {

  // let textInput = document.getElementById('text').value;
  // let text = textInput.split("\n");

  let imgObtainedArray = document.getElementsByClassName('imgObtained');
  let text = imgObtainedArray;

  while (div.hasChildNodes()) {
    div.removeChild(div.firstChild);
  }

  for (let i = 0; i < text.length; i++) {

    let img = document.getElementById('img');

    if (text[i] !== "") {

      let canvas = document.createElement("canvas");

      let loadedImg = text[i];
      let logoAddUpH = img.height;
      let logoAddUpW = 100;

      ///////////////////////////////////////////////////
      ////////// scale rules ///////////////////////////
      /////////////////////////////////////////////////

      let imgSize = loadedImg.height * loadedImg.width / 1000;

      console.log(imgSize * 0.05);
      //
      if (imgSize > 100 && imgSize < 299 ) {
        scale = 0.2;
        imgHeight = img.height * scale;
        imgWidth = img.width * scale;
      }

      if (imgSize > 300 && imgSize < 600 ) {
        scale = 0.3;
        imgHeight = img.height * scale;
        imgWidth = img.width * scale;
      }

      if (imgSize > 600 && imgSize < 900 ) {
        scale = 0.3;
        imgHeight = img.height * scale;
        imgWidth = img.width * scale;
      }

      if (imgSize > 901 ) {
        scale = 0.6;
        imgHeight = img.height * scale;
        imgWidth = img.width * scale;
      }


      //
      // if (loadedImg.height < 300) {
      //   scale = 0.1;
      //   imgHeight = img.height * scale;
      //   imgWidth = img.width * scale;
      // }
      //
      // if (loadedImg.height >= 301 && loadedImg.height <= 509) {
      //   scale = 0.15;
      //   imgHeight = img.height * scale;
      //   imgWidth = img.width * scale;
      // }
      //
      // if (loadedImg.height >= 510 && loadedImg.height <= 850) {
      //   scale = 0.27;
      //   imgHeight = img.height * scale;
      //   imgWidth = img.width * scale;
      // }
      //
      // if (loadedImg.height > 900 && loadedImg.width > 900) {
      //   scale = 0.65;
      //   imgHeight = img.height * scale;
      //   imgWidth = img.width * scale;
      // }
      //
      // if (loadedImg.width > 350 && loadedImg.width < 700) {
      //   scale = 0.4;
      //   imgHeight = img.height * scale;
      //   imgWidth = img.width * scale;
      // }
      //
      // if (loadedImg.width < 349) {
      //   scale = 0.2;
      //   imgHeight = img.height * scale;
      //   imgWidth = img.width * scale;
      // }


      // if (img.width >= loadedImg.width) {
      //   canvas.width = loadedImg.width + logoAddUpW;
      // } else {
      //   canvas.width = loadedImg.width;
      // }

      // if (img.width >= loadedImg.width) {
      //   canvas.width = loadedImg.width + logoAddUpW;
      // } else {
      //   canvas.width = loadedImg.width;
      // }

      let letraSpace = 5;
      let imgSpace = 5;

      canvas.width = loadedImg.width;
      canvas.height = loadedImg.height + imgHeight + imgSpace;
      canvas.className = "canvas";
      canvas.style.display = "block";

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

      loadFilter(canvas, ctx, loadedImg, imgSpace);
      // loadMeme(canvas, ctx, test);
      attacheIt(canvas, downloadBtn, containDiv);
    }
    // else {
    //   alert("No se ha escrito ninguna frase");
    // }
  }

}

// canvas.height * 0.00001
// canvas.width * 0.001

function loadFilter(canvas, ctx, loadedImg, imgSpace) {

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, imgSpace, imgSpace, imgWidth, imgHeight);
  let ratioLoaded = 1;
  let scaledW = loadedImg.width * ratioLoaded;
  let scaledH = loadedImg.height * ratioLoaded;
  let addUp = 0;
  ctx.drawImage(loadedImg, 0, imgHeight + imgSpace, scaledW, scaledH);
  // ctx.beginPath();
  // ctx.font = "bold 60px helvetica";
  // ctx.fillStyle = "black";
  // ctx.fillText(pageName, canvas.width / 3 - canvas.width * 0.14, 110);
  // // ctx.fillStyle = "rgb(101, 119, 134)";
  // ctx.beginPath();
  // ctx.fillStyle = "rgb(151,167,177)";
  // ctx.font = "bold 60px helveticaCn";
  // ctx.fillText(pageUserName, canvas.width / 3 - canvas.width * 0.14, 190);

  // ctx.fillStyle = "rgba(50,50,50,0.3)";
  // ctx.fill();
  // div.appendChild(canvas);
}

function attacheIt(canvas, downloadBtn, containDiv) {
  containDiv.appendChild(canvas);
  downloadBtn.href = canvas.toDataURL("image/jpeg");
  containDiv.appendChild(downloadBtn);
}

function pervFrases() {
  imgLogo.src = "media/la uvitaa.jpg";
  img.src = "media/la uvita2.jpg";
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
