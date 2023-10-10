function determineVencedor() {
    const A = document.getElementById("A").value;
    const B = document.getElementById("B").value;
    const resultadoElement = document.getElementById("resultado");

    if (A > B) {
        resultadoElement.textContent = "O vencedor é: A";
    } else if (B > A) {
        resultadoElement.textContent = "O vencedor é: B";
    } else {
        resultadoElement.textContent = "*";
    }
}