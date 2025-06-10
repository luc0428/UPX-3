import { Util } from './Util.js'; // Nome do arquivo sensível a maiúsculas!

let resultadoAtual ={
    data: null,
    calculadora: "",
    numeroPessoas: null,
    valor: null,
    classificacao:""  
};

function limpar(){
    resultadoAtual ={
        data: null,
        calculadora: "",
        numeroPessoas: null,
        valor: null,
        classificacao:""  
    };
}


function calculateSum() {
  const pessoas = parseFloat(document.getElementById('n_pessoas').value);
  const valorTotal = parseFloat(document.getElementById('valor_total').value);
  const resultEl = document.getElementById('result');

  if (pessoas <= 0 || valorTotal <= 0 || isNaN(pessoas) || isNaN(valorTotal)) {
      resultEl.innerText = "⚠️ Preencha todos os campos com valores positivos.";
      return;
  }

  const valorPorPessoa = valorTotal / pessoas;
  let classificacao = "";

  if (valorPorPessoa > 80) {
      classificacao = "🔴 Muito alto";
  } else if (valorPorPessoa > 60) {
      classificacao = "🟠 Alto";
  } else if (valorPorPessoa > 40) {
      classificacao = "🟡 Médio";
  } else if (valorPorPessoa > 25) {
      classificacao = "🟢 Adequado";
  } else {
      classificacao = "✅ Econômico";
  }
  
  resultEl.innerHTML = `💰 Valor por pessoa: R$ ${valorPorPessoa.toFixed(2)}<br>📊 Classificação: <strong>${classificacao}</strong>`;

  // jeito do kaun 
  // Armazena temporariamente os dados para salvar depois 
    // window.resultadoAtual = {
    // data: new Date().toLocaleDateString(),
    // calculadora: "Água",
    // pessoas: pessoas,
    // valor: `R$ ${valorTotal.toFixed(2)}`,
    // descricao: ` ${classificacao}`
    // };

    resultadoAtual = {
        data: new Date().toLocaleDateString(),
        calculadora: "Agua",
        numeroPessoas: pessoas,
        valor: valorTotal.toFixed(2),
        classificacao : ` ${classificacao}`
    };

}



function salvarResultado() {

    if (resultadoAtual.classificacao === "") {
        alert("⚠️ Calcule antes de salvar.");
        return;
    }
    if (Util.lerBooleano("loginAtivo")) {
        // jeito do kaun
        // const historico = JSON.parse(localStorage.getItem("historico")) || [];
        // historico.push(window.resultadoAtual);
        //localStorage.setItem("historico", JSON.stringify(historico));


        // console.log(resultadoAtual.numeroPessoas)
        // console.log(resultadoAtual.valor)
        // console.log(resultadoAtual.classificacao)

        fetch("http://localhost:8080/historico", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json' // faz ele esperar uma resposta em json boa prática
            },
            body: JSON.stringify(resultadoAtual)
        })
        .then(response => {
            if (!response.ok) throw new Error("Erro ao salvar no servidor");
            return response.json();
        })
        .then(data => {
            alert("✅ Resultado salvo com sucesso!");
            window.location.href = "calculo-agua.html";
            limpar();
        })
        .catch(error => {
            alert("❌ Erro ao salvar: " + error.message);
            console.error(error);
        });


    }else{
        alert("Faça login para salvar o resultado")
    }
}

window.salvarResultado = salvarResultado;
window.calculateSum = calculateSum;
