let numero_estudantes = parseInt(prompt("Digite o número de estudantes na turma: "));
let notas = 0;
let maior_nota = -Infinity;
let menor_nota = Infinity;
let contador = 0;

while (contador < numero_estudantes) {
    let nota = parseFloat(prompt(`Digite a nota do estudante ${contador + 1}: `));
    
    if (nota < 0 || nota > 10) {  // Assumindo que as notas variam entre 0 e 10
        console.log("Nota inválida. Tente novamente.");
        continue;
    }
    
    notas += nota;

    if (nota > maior_nota) {
        maior_nota = nota;
    }

    if (nota < menor_nota) {
        menor_nota = nota;
    }

    contador++;
}

if (numero_estudantes > 0) {
    let media = notas / numero_estudantes;
    console.log(`A média da turma foi: ${media.toFixed(2)}`);
    console.log(`A maior nota foi: ${maior_nota}`);
    console.log(`A menor nota foi: ${menor_nota}`);
} else {
    console.log("Nenhum estudante foi inserido.");
}

