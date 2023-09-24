function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
const alt = document.querySelector("#profile img")
  //condições: substituir a img
  if (html.classList.contains("light")) {
    //se tiver light mode, add a img light
    img.setAttribute("src", "./assets/avatar-light.png")
    alt.setAttribute("alt", "maykão muito stylist")
  } else {
    //se não, manter a img padrão
    img.setAttribute("src", "./assets/avatar.png")
    alt.setAttribute("alt",
      "Foto do Mayk Brito, sorrindo, usando óculos e camisa preta, barba e fundo amarelo."
    )
  }
}
