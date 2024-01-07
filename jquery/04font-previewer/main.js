$(document).ready(() => {
  $("#text").on("keyup", (event) => {
    $(".preview").html($(event.currentTarget).val())
  })
  $("#size").on("keyup", (event) => {
    let fontSize = $(event.currentTarget).val() + "px";
    $(".preview").css("font-size", fontSize);
  })
  $("#font").on("change", () => {
    $(".preview").css("font-family", $("#font").val())
  });
  $("#weight").on("change", () => {
    $(".preview").css("font-weight", $("#weight").val())
  });
})