<?php require "phpTemplate/head.php" ?>

<?php require "phpTemplate/nav.php" ?>

<div class="containAll">

<?php require "phpTemplate/fonts.php" ?>

<?php require "phpTemplate/header.php" ?>

<div class="">
  <h3>Plantillas:</h3>
  <button onclick="pervFrases()" type="button" name="button">PervFrases</button>
  <button onclick="sexologia()" type="button" name="button">Sexologia</button>
  <button onclick="juguetona()" type="button" name="button">juguetona</button>
</div>

  <div class="">

    <input id="file" type="file" id="myFile" name="picture" multiple="">

  </div>

  <!-- <input type="text" name="" placeholder="escribe tu frase"> -->

  <div class="textarea-div">
    <textarea class="textarea" id="text" placeholder="Escribe tus frases, Importante: una frase por cada linea" name="name" rows="8" cols="80"></textarea>

    <div class="divArray" id="div">

    </div>
  </div>

  <img class="img" src="media/perv meme.jpg" alt="" id="img">
  <!-- <canvas id="canvas" width="300" height="300"></canvas> -->
  <div id="preview" class="preview">
    <!-- <img class="img2" src="" alt="" id="img2"> -->
  </div>

</div>

  <script src="app/newProto.js"></script>
  <script src="app/drawMemePhrase.js"></script>

<?php require "phpTemplate/footer.php" ?>
