$(document).ready(() => {
  const $cart = $("#cart")
  const $account = $("#account")
  const $help = $("#help")
  const $cartMenu = $("#cartMenu")
  const $accountMenu = $("#accountMenu")
  const $helpMenu = $("#helpMenu")

  $cart.on('click', () => {
    $cartMenu.show()
  })
  $account.on('click', () => {
    $accountMenu.show()
  })
  $help.on('click', () => {
    $helpMenu.show()
  })
  $cartMenu.on('mouseleave', () => {
    $cartMenu.hide()
  })
  $accountMenu.on('mouseleave', () => {
    $accountMenu.hide()
  })
  $helpMenu.on('mouseleave', () => {
    $helpMenu.hide()
  })
})


