// Exemplo de uso
const ingredientesReceita = [
    "250g de cenoura descascada e crua",
    "3 ovos",
    "240ml de óleo de girrasol",
    "1½ xícara de chá de açúcar",
    "2 xícaras de chá de farinha de trigo",
    "1 colher de sopa de fermento em pó para bolos",
];

function listarIngredientes(ingredientes) {
    // Verifica se a lista de ingredientes está vazia
    if (ingredientes.length === 0) {
        console.log("Nenhum ingrediente foi informado.");
        return;
    }
    
    console.log("Ingredientes da receita:");
    ingredientes.forEach((ingrediente, index) => {
        console.log(`${index + 1}. ${ingrediente}`);
    });
}

function prepararReceita(temLiquidificador, ingredientes) {
    if (temLiquidificador) {
        console.log("Você tem um liquidificador!");
        console.log("Adicionando os ingredientes no liquidificador:");
        console.log("Ligando o liquidificador e batendo por 30 segundos...");
    } else {
        console.log("Você não tem um liquidificador.");
        console.log("Adicionando os ingredientes em um recipiente:");
        console.log("Misturando com um fouet por 40 segundos...");
    }
}

function prepararForma() {
    console.log("Preparando a forma...");
    console.log("1. Untando a forma com manteiga.");
    console.log("2. Polvilhando farinha de trigo por toda a superfície.");
    console.log("Forma preparada! Pronta para receber a massa do bolo.");
}

function transferirMassaParaForma() {
    console.log("Transferindo a massa do bolo para a forma...");    
    console.log("1. Despeje a massa delicadamente na forma.");   
    console.log("A massa foi transferida para a forma com sucesso!");
}

function levarAoForno() {
    console.log("Levando a massa ao forno pré-aquecido a 180°C...");
    
    let tempoTotal = 0; 
    let boloPronto = false; 
    
    
    while (!boloPronto) {
        console.log(`Deixando o bolo no forno por 45 minutos...`);
        tempoTotal += 45;
        
        
        boloPronto = verificarSeBoloEstaPronto();
        
        if (!boloPronto) {
            console.log("O bolo não está pronto. Adicionando mais 10 minutos no forno...");
            tempoTotal += 10;
        }
    }
    
    console.log(`O bolo está pronto após ${tempoTotal} minutos! Pode retirar do forno.`);
}

// Função simulando a verificação se o bolo está pronto
function verificarSeBoloEstaPronto() {    
    const chanceDeEstarPronto = Math.random(); 
    return chanceDeEstarPronto > 0.7; 
}

    function montarBolo() {
        console.log("Iniciando o processo de montagem do bolo...");
    }
    
    function cortarBolo() {
        console.log("1. Cortando o bolo ao meio...");
        return "bolo cortado ao meio";
    }

    function espalharBrigadeiro() {
        console.log("2. Espalhando brigadeiro no bolo...");
        return "brigadeiro espalhado";
    }

    function juntarPedaços() {
        console.log("3. Juntando os pedaços do bolo...");
        return "pedaços do bolo juntos";
    }

    function cobrirComBrigadeiro() {
        console.log("4. Cobrir o bolo com brigadeiro...");
        return "bolo coberto com brigadeiro";
    }

// Cobertura
    function listarIngredientesCobertura() {
        return [
            "lata de leite condensado",
            "colheres de sopa de chocolate em pó",
            "caixinha de creme de leite",
            "colher de sopa de manteiga"
        ];
    }
    
    function adicionarIngredientesNaPanela() {
        const ingredientes = listarIngredientesCobertura();
        console.log("Adicionando os seguintes ingredientes na panela:");
        ingredientes.forEach((ingrediente) => {
            console.log("- " + ingrediente);
        });
        console.log("Ingredientes adicionados na panela.");
    }
    
    function misturarIngredientes() {
        console.log("Misturando todos os ingredientes na panela...");        
        console.log("Ingredientes misturados e prontos para uso!");
    }
    
    
    function colocarFogo() {
        console.log("Colocando a mistura no fogo...");
        console.log("Mexa até ferver...");
        console.log("Desligue o fogo momentaneamente...");
        console.log("Ligue o fogo novamente...");
        console.log("Coloque um pouco de chocolate meio amargo...");
        console.log("Mexa até derreter...");
        console.log("A cobertura está pronta!");
    }

// finalizando cobertura

function resfriarEDecorarBolo() {
    console.log("Colocando o bolo na geladeira por 30 minutos...");
    
    
    console.log("Aguardando 30 minutos...");
    
    let boloProntoParaDecorar = true; 
    if (boloProntoParaDecorar) {
        let opcao;
        do {
            console.log("O bolo está pronto para ser decorado!");
            console.log("Escolha uma opção:");
            console.log("1. Decorar com M&M's e raspas de chocolate.");
            console.log("2. Não decorar e comer o bolo.");
            
            
            opcao = Math.floor(Math.random() * 2) + 1; 
            console.log(`Opção escolhida: ${opcao}`);

            if (opcao === 1) {
                console.log("Decorando o bolo com M&M's e raspas de chocolate...");
                console.log("O bolo está decorado e pronto para comer!");
            } else if (opcao === 2) {
                console.log("Pulando a decoração. O bolo será comido sem decoração!");
            } 
        } while (opcao !== 1 && opcao !== 2);
        console.log("Comendo o bolo... Está uma delícia!");
    } 
}
  



listarIngredientes(ingredientesReceita);
prepararReceita(false, ingredientesReceita);
prepararForma();
levarAoForno();
cortarBolo();
espalharBrigadeiro();
juntarPedaços();
cobrirComBrigadeiro();
listarIngredientesCobertura();
adicionarIngredientesNaPanela();
misturarIngredientes();
colocarFogo();
resfriarEDecorarBolo();
