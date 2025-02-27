function calcularIdade() {

    let anoNascimento = document.getElementById("anoNascimento").value;

    if (anoNascimento === "" || isNaN(anoNascimento)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira um ano válido.";
        return;
    }

    anoNascimento = parseInt(anoNascimento);

    let anoAtual = new Date().getFullYear(); 

    if (anoNascimento > anoAtual || anoNascimento < 1900) {
        document.getElementById("resultado").innerHTML = "Por favor, insira um ano de nascimento válido.";
        return;
    }

    let idade = anoAtual - anoNascimento;

   
            document.getElementById("resultado").innerHTML = `A sua idade é ${idade} anos.`;
        }
