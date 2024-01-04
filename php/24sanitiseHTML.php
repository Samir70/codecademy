<form method="post" action="">
  <!-- try entering <h1>Hello, world!</h1> -->
  Enter some HTML:
  <br>
  <input type="text" name="html">
  <br>
  <input type="submit" value="Submit">
</form>
<div>
  You entered (unsanitised):
  <?= $_POST["html"] ?>
</div>
<div>
  You entered (sanitised):
  <?= htmlspecialchars($_POST["html"]) ?>
</div>