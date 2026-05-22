document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DA CALCULADORA SUSTENTÁVEL ---
    const btnCalcular = document.getElementById('btn-calcular');
    const inputHectares = document.getElementById('hectares');
    const divResultado = document.getElementById('resultado');
    
    const spanAgua = document.querySelector('#economia-agua span');
    const spanCo2 = document.querySelector('#economia-co2 span');

    btnCalcular.addEventListener('click', () => {
        const hectares = parseFloat(inputHectares.value);

        if (isNaN(hectares) || hectares <= 0) {
            alert('Por favor, insira um número válido de hectares.');
            return;
        }

        // Cálculos fictícios baseados em médias de sustentabilidade agro
        // Economia média de 15.000 litros de água por hectare/ano com IA
        // Redução de 250kg de CO2 por hectare/ano com manejo inteligente
        const economiaAgua = hectares * 15000;
        const economiaCo2 = hectares * 250;

        // Atualiza os valores na tela com formatação brasileira
        spanAgua.textContent = economiaAgua.toLocaleString('pt-BR');
        spanCo2.textContent = economiaCo2.toLocaleString('pt-BR');

        // Mostra o container de resultado removendo a classe 'hidden'
        divResultado.classList.remove('hidden');
    });

    // --- LÓGICA DO FORMULÁRIO DE CONTATO ---
    const formContato = document.getElementById('form-contato');

    formContato.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede a página de recarregar
        
        // Simulação de envio
        alert('Obrigado pelo contato! A equipe AgroForte retornará em breve.');
        formContato.reset(); // Limpa os campos do formulário
    });
});