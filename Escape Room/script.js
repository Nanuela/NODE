const enigmas = {
  balao: {
    pergunta: "🎈 Qual gás é mais leve que o ar e usado em balões de festa?",
    resposta: "hélio"
  },
  formula: {
    pergunta: "🧬 Qual o símbolo químico da água?",
    resposta: "h2o"
  },
  cofre: {
    pergunta: "🔒 Resolva o código: Se A=1, B=2, C=3, qual o número da palavra 'CAB'?",
    resposta: "312"
  },
  painel: {
    pergunta: "📟 Quanto é 9 x 9?",
    resposta: "81"
  }
};

const resolvidos = {
  balao: false,
  formula: false,
  cofre: false,
  painel: false
};

let objetoAtual = "";

function abrirEnigma(obj) {
  if (resolvidos[obj]) {
    setFeedback("✅ Você já resolveu este enigma!");
    return;
  }
  objetoAtual = obj;
  document.getElementById("enigma-pergunta").textContent = enigmas[obj].pergunta;
  document.getElementById("resposta-input").value = "";
  document.getElementById("enigma-box").style.display = "block";
  setFeedback("");
}

function fecharEnigma() {
  document.getElementById("enigma-box").style.display = "none";
  setFeedback("");
}

function enviarResposta() {
  const respostaUsuario = document.getElementById("resposta-input").value.trim().toLowerCase();
  const respostaCorreta = enigmas[objetoAtual].resposta.toLowerCase();

  if (respostaUsuario === respostaCorreta) {
    resolvidos[objetoAtual] = true;
    setFeedback("🎉 Resposta correta! Você avançou.");
    fecharEnigma();
  } else {
    setFeedback("❌ Resposta incorreta, tente novamente.");
  }
  atualizarProgresso();
}

function tentarSair() {
  if (Object.values(resolvidos).every(v => v)) {
    setFeedback("🚪 A porta se abriu! Você escapou do laboratório do Cientista Maluco! 🧪🎉");
  } else {
    setFeedback("🔒 A porta está trancada! Resolva todos os enigmas primeiro.");
  }
}

function setFeedback(msg) {
  document.getElementById("feedback").textContent = msg;
}

function atualizarProgresso() {
  const qtd = Object.values(resolvidos).filter(v => v).length;
  document.getElementById("progresso").textContent = `Enigmas resolvidos: ${qtd} / 4`;
}

function iniciarJogo() {
  const overlay = document.getElementById("overlay-inicio");
  overlay.style.display = "none";
}
