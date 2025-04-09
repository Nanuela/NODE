// SINCRON E ASSINCRONO -> SINCRONO.JS
function tarefaDemorada() {
    const agora = new Date();
    const futuro = agora.getTime() + 3000 //adiciona 3 segundos 
    while (new Date().getTime() < futuro) {} //espera 3 segundos 
} 

console.log("Inicio o progama...")
console.log("Executando tarefa 1")
tarefaDemorada() //simula um processo que leva 3 segundos 
console.log("tarefa 1 concluída")

console.log("executando tarefa 2")
tarefaDemorada() //simla outro processo que leva 3 segundos 
console.log("tarrefa 2 concluída")
console.log("progama finalizado")
