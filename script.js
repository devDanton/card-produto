const img = document.getElementById('produto')
const icon = document.getElementById('graus')
const button = document.getElementById('change')

let toggle = false

button.addEventListener('click', () => {
  toggle = !toggle

  if (toggle) {
    img.src = './assets/produto-gif.gif'
    icon.src = './assets/fechar.svg'
  } else {
    img.src = './assets/produto.png'
    icon.src = './assets/360.svg'
  }
})
