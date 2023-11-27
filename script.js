var numeroSecreto = Math.floor(Math.random() * (1000 - 1 + 1)) + 1
var maximoTentativas = 10
var contador = 0
var tentativasEsgotadas = false

for (var contador = 1; contador <= maximoTentativas; contador++) {
  var chute = prompt(
    "Digite um número entre 1 e 1000 (tentativa " +
      contador +
      " de " +
      maximoTentativas +
      ")"
  )
  if (chute == null) {
    alert("Jogo cancelado!")
    break
  } else if (chute > numeroSecreto) {
    alert(
      "Errou... o número secreto é menor que " +
        chute +
        "." +
        " Você deu " +
        contador +
        "         chutes."
    )
  } else if (chute < numeroSecreto) {
    alert(
      "Errou... o número secreto é maior que " +
        chute +
        "." +
        " Você deu " +
        contador +
        " chutes."
    )
  } else {
    alert("Yay! Você Acertou! Você deu" + contador + " chutes!")
    break
  }
  if (contador == maximoTentativas) {
    tentativasEsgotadas = true
  }
}
if (tentativasEsgotadas) {
  alert(
    "Ops... Suas tentativas acabaram! O número secreto era " +
      numeroSecreto +
      "."
  )
} else {
  alert("Você deu " + contador + " chutes.")
}
