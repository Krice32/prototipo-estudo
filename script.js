/* =========================================
   1. VARIÁVEIS E ESTADO
   ========================================= */
let produtosSelecionados = [null, null, null];
let produtosSelecionadosModal = [];
const MAX_PRODUTOS = 3;

/* =========================================
   2. BASE DE DADOS DE PRODUTOS
   ========================================= */
const produtosExemplo = [
    { 
        id: 1, 
        nome: "Luva de Boxe e Muaythai Rhino", 
        marca: "Rhino", 
        categoria: "equipamentos",
        preco: "R$ 89,90", 
        precoOriginal: "R$ 109,90",
        nota: 4.0, 
        avaliacoes: 4,
        imagem: "imagens/9856752VA4.jpg", 
        esporte: "Artes Marciais",
        genero: "Unissex",
        cor: "Vermelho", 
        material: "PU Sintético",
        peso: "12 oz (Padrão)",
        tecnologia: "Espuma Injetada",
        fecho: "Velcro Simples",
        tamanhos: "Único",
        featured: true,
        resumoIA: "✨ <strong>Resumo das Opiniões:</strong> A campeã do custo-benefício para quem está começando agora. Muito elogiada pelo conforto inicial. <br><em>💡 Dica: Ideal para treinos leves e iniciantes. Para atletas de alta intensidade diária, modelos de densidade superior podem oferecer maior longevidade a longo prazo.</em>"
    },
    { 
        id: 2, 
        nome: "Luva de Boxe Pretorian Muay Thai First 14 OZ", 
        marca: "Pretorian", 
        categoria: "equipamentos",
        preco: "R$ 179,99", 
        precoOriginal: "R$ 229,99", 
        nota: 5.0, 
        avaliacoes: 8,
        imagem: "imagens/98567533A6.avif", 
        esporte: "Artes Marciais",
        genero: "Unissex",
        cor: "Preto/Amarelo",
        material: "PU de Alta Resistência",
        peso: "14 oz",
        tecnologia: "HSA Tech (Absorção)",
        fecho: "Velcro Ajustável",
        tamanhos: "12-16 oz",
        featured: true,
        resumoIA: "✨ <strong>Resumo das Opiniões:</strong> Focada em proteção máxima (Tecnologia HS). O encaixe é firme e passa muita segurança no soco. <br><em>💡 Dica: O material é robusto e pode parecer firme nos primeiros usos, mas amacia e se molda à sua mão após algumas semanas de 'break-in'.</em>"
    },
    { 
        id: 3, 
        nome: "Luva de Boxe Pretorian Muay Thai First 14 OZ - Adulto", 
        marca: "Pretorian", 
        categoria: "equipamentos",
        preco: "R$ 179,99", 
        precoOriginal: "R$ 229,99", 
        nota: 5.0, 
        avaliacoes: 25,
        imagem: "imagens/M15A9H60A5.avif", 
        esporte: "Artes Marciais",
        genero: "Unissex",
        cor: "Vermelho",
        material: "PU de Alta Resistência",
        peso: "14 oz",
        tecnologia: "HSA Tech (Absorção)",
        fecho: "Velcro Ajustável",
        tamanhos: "12-16 oz",
        featured: true,
        resumoIA: "✨ <strong>Resumo das Opiniões:</strong> Referência em durabilidade na categoria intermediária. Usuários relatam que as costuras e a cor se mantêm intactas por muito tempo. <br><em>💡 Dica: Excelente equilíbrio entre preço e qualidade profissional. Uma escolha segura para quem treina de 3 a 4 vezes na semana.</em>"
    },
    // --- TÊNIS ---
    { 
        id: 4, 
        nome: "Tênis Nike Air Zoom Pegasus 40", 
        marca: "Nike", 
        categoria: "calcados",
        preco: "R$ 699,99", 
        precoOriginal: "R$ 999,99", 
        nota: 4.8, 
        avaliacoes: 342,
        imagem: "imagens/tenis Nike Pegasus 40.avif", 
        esporte: "Corrida",
        genero: "Masculino",
        cor: "Preto",
        material: "Engineered Mesh",
        peso: "260g",
        tecnologia: "Zoom Air",
        fecho: "Cadarço",
        tamanhos: "38-44",
        featured: true,
        resumoIA: "✨ <strong>Resumo das Opiniões:</strong> O tênis mais versátil da Nike. Perfeito para quem intercala caminhadas, treinos de tiro e longas distâncias. <br><em>💡 Dica: A forma da Nike prioriza a estabilidade e é mais justinha. Se você tem o pé muito largo ou prefere folga, considerar um número maior pode garantir conforto extra.</em>"
    },
    { 
        id: 5, 
        nome: "Tênis Asics Gel-Nimbus 25", 
        marca: "Asics", 
        categoria: "calcados",
        preco: "R$ 899,90", 
        precoOriginal: "R$ 1199,90", 
        nota: 4.9, 
        avaliacoes: 210,
        imagem: "imagens/tenis Asics Gel-Nimbus 25.avif", 
        esporte: "Corrida",
        genero: "Masculino",
        cor: "Branco",
        material: "Malha Elástica",
        peso: "290g",
        tecnologia: "PureGEL",
        fecho: "Cadarço",
        tamanhos: "39-45",
        featured: true,
        resumoIA: "✨ <strong>Resumo das Opiniões:</strong> Sinônimo de 'pisar nas nuvens'. O amortecimento é o destaque absoluto, protegendo seus joelhos em longões. <br><em>💡 Dica: Focado em máximo conforto e proteção, não em leveza extrema. Ideal para rodagens regenerativas e maratonas, menos indicado para quem busca apenas bater recordes de velocidade curta.</em>"
    },
    { 
        id: 6, 
        nome: "Tênis Adidas Ultraboost Light", 
        marca: "Adidas", 
        categoria: "calcados",
        preco: "R$ 799,99", 
        precoOriginal: "R$ 1099,99", 
        nota: 4.7, 
        avaliacoes: 180,
        imagem: "imagens/tenis Adidas Ultraboost Light.avif", 
        esporte: "Corrida",
        genero: "Masculino",
        cor: "Branco",
        material: "Primeknit",
        peso: "299g",
        tecnologia: "Boost Light",
        fecho: "Cadarço",
        tamanhos: "38-43",
        featured: false,
        resumoIA: "✨ <strong>Resumo das Opiniões:</strong> Estilo inconfundível com retorno de energia explosivo. O cabedal veste como uma meia, sem apertar. <br><em>💡 Dica: O solado tem aderência fantástica no asfalto. Para manter essa performance por anos, recomenda-se evitar terrenos muito ásperos ou trilhas de terra batida.</em>"
    },
    // --- LINHA CASUAL / LIFESTYLE ---
    { 
        id: 13, 
        nome: "Tênis Nike Court Vision Low", 
        marca: "Nike", 
        categoria: "calcados",
        preco: "R$ 399,99", 
        precoOriginal: "R$ 449,99", 
        nota: 4.4, 
        avaliacoes: 512,
        imagem: "imagens/tenis nike court vision.png", // Substitua pelo nome do seu arquivo
        esporte: "Casual",
        genero: "Masculino",
        cor: "Branco/Preto",
        material: "Couro Sintético",
        peso: "350g",
        tecnologia: "Cupsole de Borracha",
        fecho: "Cadarço",
        tamanhos: "38-44",
        featured: true,
        resumoIA: "✨ <strong>Resumo das Opiniões:</strong> Ótimo custo-benefício para o dia a dia. Entrega a estética clássica do basquete dos anos 80 por um preço bem mais acessível. <br><em>💡 Dica: Por ser de material sintético de entrada, ele pode ser um pouco rígido nos primeiros dias de uso. É o tênis perfeito para 'bater' no asfalto sem dó.</em>"
    },
    { 
        id: 14, 
        nome: "Tênis Nike Dunk Low Retro", 
        marca: "Nike", 
        categoria: "calcados",
        preco: "R$ 899,99", 
        precoOriginal: "R$ 1099,99", 
        nota: 4.9, 
        avaliacoes: 840,
        imagem: "imagens/tenis nike dunk low.png", // Substitua pelo nome do seu arquivo
        esporte: "Casual/Skate",
        genero: "Masculino",
        cor: "Preto/Branco (Panda)",
        material: "Couro Legítimo",
        peso: "380g",
        tecnologia: "Entressola em Espuma",
        fecho: "Cadarço",
        tamanhos: "38-44",
        featured: true,
        resumoIA: "✨ <strong>Resumo das Opiniões:</strong> Um ícone absoluto da cultura sneaker. O acabamento em couro natural faz total diferença no toque, conforto e na forma como o tênis envelhece. <br><em>💡 Dica: Neste modelo você paga pelo status e pela herança da marca. Super versátil para qualquer look, mas exige hidratação e cuidado na limpeza por ser couro premium.</em>"
    },
    // --- BOLAS ---
    { 
        id: 7, 
        nome: "Bola Futebol Campo Adidas Al Rihla", 
        marca: "Adidas", 
        categoria: "bolas",
        preco: "R$ 149,90", 
        precoOriginal: "R$ 229,90", 
        nota: 4.8, 
        avaliacoes: 88,
        imagem: "imagens/Bola Futebol Campo Adidas Al Rihla.avif", 
        esporte: "Futebol",
        genero: "Unissex",
        cor: "Branco",
        material: "PU Termocolado",
        peso: "430g (Oficial)",
        tecnologia: "TSBE (Sem costuras)",
        fecho: "-",
        tamanhos: "Tamanho 5",
        featured: true,
        resumoIA: "✨ <strong>Resumo das Opiniões:</strong> Voo preciso e toque profissional. A tecnologia sem costuras impede a absorção de água, mantendo o peso ideal mesmo na chuva. <br><em>💡 Dica: Bola de performance oficial. Para garantir a vida útil, utilize sempre a calibragem recomendada e evite usar em asfalto ou concreto.</em>"
    },
    { 
        id: 8, 
        nome: "Bola Futebol Nike Flight Premier", 
        marca: "Nike", 
        categoria: "bolas",
        preco: "R$ 599,90", 
        precoOriginal: "R$ 999,90", 
        nota: 4.9, 
        avaliacoes: 45,
        imagem: "imagens/Bola Futebol Nike Flight Premier.avif", 
        esporte: "Futebol",
        genero: "Unissex",
        cor: "Branco",
        material: "Couro Sintético 3D",
        peso: "430g (Oficial)",
        tecnologia: "Aerowsculpt",
        fecho: "-",
        tamanhos: "Tamanho 5",
        featured: false,
        resumoIA: "✨ <strong>Resumo das Opiniões:</strong> A elite do futebol. As ranhuras Aerowsculpt estabilizam o voo em 30%, garantindo que a bola vá exatamente onde você chutou. <br><em>💡 Dica: Um investimento alto para alta performance. Recomendada para jogos de campeonato em grama natural de boa qualidade.</em>"
    },
    { 
        id: 9, 
        nome: "Bola Society Penalty S11 R2", 
        marca: "Penalty", 
        categoria: "bolas",
        preco: "R$ 119,90", 
        precoOriginal: "R$ 159,90", 
        nota: 4.6, 
        avaliacoes: 320,
        imagem: "imagens/Bola Society Penalty S11 R2.avif", 
        esporte: "Futebol",
        genero: "Unissex",
        cor: "Branco",
        material: "PU Super Soft",
        peso: "420g",
        tecnologia: "Termotec",
        fecho: "-",
        tamanhos: "Society",
        featured: true,
        resumoIA: "✨ <strong>Resumo das Opiniões:</strong> A favorita das peladas de Society. Extremamente macia ao chute e com quique controlado. <br><em>💡 Dica: Por ser focada em maciez (Super Soft), é normal que a pintura sofra desgaste estético com o atrito da grama sintética, mas isso não afeta a estrutura ou o desempenho da bola.</em>"
    },
    // --- RELÓGIOS ---
    { 
        id: 10, 
        nome: "Relógio Garmin Forerunner 55", 
        marca: "Garmin", 
        categoria: "relogio",
        preco: "R$ 1.399,00", 
        precoOriginal: "R$ 1.799,00", 
        nota: 4.9, 
        avaliacoes: 40,
        imagem: "imagens/Relogio Garmin Forerunner 55.avif", 
        esporte: "Corrida",
        genero: "Unissex",
        cor: "Preto",
        material: "Polímero",
        peso: "37g",
        tecnologia: "GPS Glonass/Galileo",
        fecho: "Fivela",
        tamanhos: "42mm",
        featured: true,
        resumoIA: "✨ <strong>Resumo das Opiniões:</strong> O parceiro ideal do corredor. GPS de precisão militar e bateria que dura semanas, não dias. <br><em>💡 Dica: Focado 100% em esporte e métricas. A tela não é touch-screen propositalmente (para funcionar com suor/chuva), o que agrada puristas mas pode estranhar quem vem de smartwatches casuais.</em>"
    },
    { 
        id: 11, 
        nome: "Smartwatch Samsung Galaxy Watch 6", 
        marca: "Samsung", 
        categoria: "relogio",
        preco: "R$ 1.199,00", 
        precoOriginal: "R$ 1.599,00", 
        nota: 4.6, 
        avaliacoes: 120,
        imagem: "imagens/Smartwatch Samsung Galaxy Watch 6.avif", 
        esporte: "Academia",
        genero: "Unissex",
        cor: "Grafite",
        material: "Alumínio",
        peso: "50g",
        tecnologia: "BioActive Sensor",
        fecho: "Magnético",
        tamanhos: "44mm",
        featured: false,
        resumoIA: "✨ <strong>Resumo das Opiniões:</strong> Uma extensão do seu celular no pulso. Tela brilhante, Spotify offline e monitor de sono avançado. <br><em>💡 Dica: É um dispositivo superpotente. Assim como seu smartphone, o ideal é criar o hábito de carregá-lo diariamente (ex: durante o banho) para garantir bateria sempre cheia.</em>"
    },
    { 
        id: 12, 
        nome: "Smartwatch Amazfit GTR 4", 
        marca: "Amazfit", 
        categoria: "relogio",
        preco: "R$ 999,00", 
        precoOriginal: "R$ 1.299,00", 
        nota: 4.7, 
        avaliacoes: 95,
        imagem: "imagens/Smartwatch Amazfit GTR 4.avif", 
        esporte: "Casual",
        genero: "Unissex",
        cor: "Couro Marrom",
        material: "Aço Inoxidável",
        peso: "45g",
        tecnologia: "Zepp OS 2.0",
        fecho: "Fivela",
        tamanhos: "46mm",
        featured: false,
        resumoIA: "✨ <strong>Resumo das Opiniões:</strong> Elegância que vai do escritório ao treino. O GPS é muito rápido e a bateria é impressionante (cerca de 10 dias). <br><em>💡 Dica: O sistema Zepp é leve e fluido, focado em eficiência. Embora receba notificações, ele não permite responder mensagens complexas como relógios com WearOS/Apple.</em>"
    }
];

/* =========================================
   3. FUNÇÕES DA MODAL DE SELEÇÃO
   ========================================= */

// Função auxiliar para criar o HTML do card (Evita repetição)
function gerarCardHTML(produto) {
    const isSelected = produtosSelecionadosModal.some(p => p.id === produto.id);
    
    let precoNum = parseFloat(produto.preco.replace('R$', '').replace(',', '.').trim());
    let precoOrigNum = parseFloat(produto.precoOriginal.replace('R$', '').replace(',', '.').trim());
    
    let descontoHTML = '';
    let precoOriginalHTML = '';

    if (precoOrigNum > precoNum) {
        const porcentagem = Math.round(((precoOrigNum - precoNum) / precoOrigNum) * 100);
        descontoHTML = `<span class="discount-badge">-${porcentagem}%</span>`;
        precoOriginalHTML = `<span class="original-price">${produto.precoOriginal}</span>`;
    }

    const estrelas = '★'.repeat(Math.floor(produto.nota)) + '☆'.repeat(5 - Math.floor(produto.nota));

    return `
        <div class="product-card-modal ${isSelected ? 'selected-for-comp' : ''}" 
             data-product-id="${produto.id}" 
             onclick="toggleSelecaoProduto(${produto.id})">
            
            <img src="${produto.imagem}" alt="${produto.nome}">
            <span class="card-brand">${produto.marca}</span>
            <div class="produto-name">${produto.nome}</div>
            
            <div class="card-rating">
                <span>${estrelas}</span>
                <span class="rating-count">(${produto.avaliacoes})</span>
            </div>

            <div class="price-container">
                <span class="current-price">${produto.preco}</span>
                ${descontoHTML}
                ${precoOriginalHTML}
            </div>
        </div>
    `;
}

// Renderiza a lista padrão (usada na busca e filtro)
function renderizarCards(listaDeProdutos) {
    const container = document.getElementById('modalProductsContainer');
    if (!container) return; 
    
    if (listaDeProdutos.length === 0) {
        container.innerHTML = `
            <div class="no-results-container">
                <img src="imagens/minotauro-triste1.jpg" alt="Sem resultados" class="no-results-img">
                <div class="no-results-title">Ops! Não encontramos nada.</div>
                <div class="no-results-text">
                    O Minotauro procurou por toda parte, mas não achou esse produto ou combinação de filtros.
                    <br>Tente buscar por termos mais genéricos.
                </div>
                <button class="btn-reset-search" onclick="limparFiltros()">Limpar Filtros</button>
            </div>
        `;
        atualizarBotaoCompararModal();
        return; 
    }

    let htmlContent = '';
    listaDeProdutos.forEach(produto => {
        htmlContent += gerarCardHTML(produto);
    });

    container.innerHTML = htmlContent;
    atualizarBotaoCompararModal();
}

function abrirModalSelecao() {
  // --- CORREÇÃO: Força o fechamento do tutorial ao abrir a modal ---
  const tutorial = document.querySelector('.tutorial-popover');
  if (tutorial) {
      tutorial.remove(); // Remove o balão do HTML imediatamente
      localStorage.setItem("visto_tutorial_comparador", "true"); // Garante que não volte
  }
  // ----------------------------------------------------------------

  // 1. Prepara a lista: Filtra nulos
  produtosSelecionadosModal = produtosSelecionados.filter((p) => p !== null);
  
  // 2. Exibe Modal e limpa busca
  document.getElementById("productModal").style.display = "block";
  document.getElementById("modalSearchInput").value = "";

  const container = document.getElementById('modalProductsContainer');
  const tituloModal = document.querySelector('.modal-title');
  const produtoReferencia = produtosSelecionados.find(p => p !== null);

  if (produtoReferencia) {
      // --- LÓGICA DE SUGESTÃO ---

      // A. Pega produtos da MESMA categoria
      const sugestoes = produtosExemplo.filter(p => 
          p.categoria === produtoReferencia.categoria
      );

      // B. Ordena: Produto já selecionado vai para o TOPO
      sugestoes.sort((a, b) => {
          const aSelected = produtosSelecionadosModal.some(sel => sel.id === a.id);
          const bSelected = produtosSelecionadosModal.some(sel => sel.id === b.id);
          if (aSelected && !bSelected) return -1;
          if (!aSelected && bSelected) return 1;
          return 0;
      });

      // C. Pega o restante (Outras categorias)
      const gerais = produtosExemplo.filter(p => 
          p.categoria !== produtoReferencia.categoria && 
          p.featured === true
      );

      // D. Título do Cabeçalho da Modal (Topo vermelho)
      if(tituloModal) {
          tituloModal.innerHTML = `Gerenciar Comparação`;
      }

      // E. Constrói o HTML com as Seções Internas
      let htmlFinal = '';

      // SEÇÃO 1: TÍTULO IGUAL AO PRINT
      if (sugestoes.length > 0) {
          // Formata categoria (ex: "calcados" -> "Calcados")
          const catNome = produtoReferencia.categoria.charAt(0).toUpperCase() + produtoReferencia.categoria.slice(1);
          
          htmlFinal += `
            <h4 class="modal-section-title">
                <span>✨</span> Sugestões de ${catNome}
            </h4>
          `;
          
          sugestoes.forEach(p => { htmlFinal += gerarCardHTML(p); });
      }

      // SEÇÃO 2: Outros Produtos
      if (gerais.length > 0) {
          htmlFinal += `<h4 class="modal-section-title"><span>📦</span> Outras Categorias</h4>`;
          gerais.forEach(p => { htmlFinal += gerarCardHTML(p); });
      }

      container.innerHTML = htmlFinal;

  } else {
      // CENÁRIO: TUDO VAZIO
      const destaques = produtosExemplo.filter(p => p.featured === true);
      if(tituloModal) tituloModal.innerHTML = `Selecione um <span style="color: #e52d27">Produto</span>`;
      renderizarCards(destaques);
  }
  
  atualizarBotaoCompararModal();
}

function toggleSelecaoProduto(idProduto) {
  const produto = produtosExemplo.find((p) => p.id === idProduto);
  const index = produtosSelecionadosModal.findIndex((p) => p.id === idProduto);
  const cardElement = document.querySelector(`.product-card-modal[data-product-id="${idProduto}"]`);

  // Se já está selecionado, remove
  if (index > -1) {
    produtosSelecionadosModal.splice(index, 1);
    if(cardElement) cardElement.classList.remove("selected-for-comp");
    atualizarBotaoCompararModal();
    return; 
  }

  // Verifica categoria
  if (produtosSelecionadosModal.length > 0) {
      const primeiroProduto = produtosSelecionadosModal[0];
      if (primeiroProduto.categoria !== produto.categoria) {
          mostrarErroToast(); 
          return; 
      }
  }

  // Verifica limite
  if (produtosSelecionadosModal.length < MAX_PRODUTOS) {
    produtosSelecionadosModal.push(produto);
    if(cardElement) cardElement.classList.add("selected-for-comp");
  } else {
    alert(`Você pode selecionar no máximo ${MAX_PRODUTOS} produtos.`);
  }
  
  atualizarBotaoCompararModal();
}

function mostrarErroToast() {
    const toast = document.getElementById("errorToast");
    if(toast) {
        toast.classList.add("show");
        setTimeout(() => { toast.classList.remove("show"); }, 5000);
    }
}

function atualizarBotaoCompararModal() {
  const count = produtosSelecionadosModal.length;
  const btn = document.getElementById("btnCompararModal");

  if (count >= 1) {
    btn.disabled = false;
    btn.textContent = `Selecionar (${count} Produto${count > 1 ? "s" : ""})`;
  } else {
    btn.disabled = true;
    btn.textContent = `Selecionar (Min: 1)`;
  }
}

function fecharModal() {
  document.getElementById("productModal").style.display = "none";
  togglePopularTerms(false);
}

function togglePopularTerms(abrir) {
  const popularTerms = document.getElementById("popularTerms");
  if (!popularTerms) return;
  popularTerms.style.display = abrir ? "block" : "none";
}

function normalizarTexto(texto) {
  return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function filtrarProdutos() {
  const inputBusca = document.getElementById("modalSearchInput").value;
  let termoLimpo = normalizarTexto(inputBusca);
  termoLimpo = termoLimpo.replace(/\b(de|da|do|das|dos|em|com|para|e|a|o|u)\b/g, " ");
  const palavrasChave = termoLimpo.split(" ").filter(palavra => palavra.length > 0);

  let produtosFiltrados;

  if (palavrasChave.length > 0) {
    togglePopularTerms(false);
    produtosFiltrados = produtosExemplo.filter((produto) => {
      const textoProduto = normalizarTexto(`${produto.nome} ${produto.esporte} ${produto.marca} ${produto.categoria}`);
      return palavrasChave.every(palavra => textoProduto.includes(palavra));
    });
  } else {
    togglePopularTerms(true);
    produtosFiltrados = produtosExemplo.filter((p) => p.featured === true);
  }
  
  // Na busca, usamos renderizarCards padrão (lista única)
  renderizarCards(produtosFiltrados);
}

// Fechar modal ao clicar fora
window.onclick = function (event) {
  const modal = document.getElementById("productModal");
  if (event.target == modal) fecharModal();
};

document.addEventListener("mousedown", function (event) {
  const popularTerms = document.getElementById("popularTerms");
  const searchInput = document.getElementById("modalSearchInput");
  if (popularTerms && popularTerms.style.display === "block") {
    if (event.target !== searchInput && !popularTerms.contains(event.target)) {
      togglePopularTerms(false);
    }
  }
});

/* =========================================
   4. FUNÇÕES DOS SLOTS (CORRIGIDO)
   ========================================= */

function renderizarSlotsPrincipais() {
    for (let i = 0; i < MAX_PRODUTOS; i++) {
        const slotId = 'slot' + (i + 1);
        const slotElement = document.getElementById(slotId);
        if(!slotElement) continue;

        const produto = produtosSelecionados[i]; 
        const slotPai = slotElement.parentElement; // div.produto-slot
        
        // Limpa estado anterior visual do slot pai
        slotPai.classList.remove('selected', 'suggestion-active');
        
        if (produto) {
            // SE TEM PRODUTO: 
            // 1. Remove clique do pai (para não abrir modal ao clicar no card)
            slotPai.onclick = null; 
            slotPai.classList.add('selected'); 
            
            // 2. Remove a classe placeholder para habilitar os cliques (CORREÇÃO AQUI)
            slotElement.classList.remove('produto-placeholder');

            slotElement.innerHTML = `
                <div class="produto-card-wrapper">
                    <img src="${produto.imagem}" alt="${produto.nome}" class="produto-image">
                    <div class="produto-info-col">
                        <div class="produto-name" title="${produto.nome}">${produto.nome}</div>
                    </div>
                    <div class="produto-actions-col">
                        <div class="produto-price">${produto.preco}</div>
                        <button class="btn-remover" onclick="removerProduto(event, ${i})">Remover</button>
                    </div>
                </div>
            `;
        } else {
            // SE ESTÁ VAZIO: 
            // 1. Clique no pai abre a modal
            slotPai.onclick = abrirModalSelecao;
            slotPai.classList.remove('selected'); 

            // 2. Adiciona a classe placeholder de volta para estilizar o "+" (CORREÇÃO AQUI)
            slotElement.classList.add('produto-placeholder');

            slotElement.innerHTML = `
                <div class="icon-plus">+</div>
                <div>Adicionar produto</div>
                <small>Clique para selecionar</small>
            `;
        }
    }
}

function confirmarSelecao() {
  produtosSelecionados = [...produtosSelecionadosModal];
  while (produtosSelecionados.length < MAX_PRODUTOS) {
    produtosSelecionados.push(null);
  }
  renderizarSlotsPrincipais();
  fecharModal();
  compararProdutos();
}

function removerProduto(event, slotIndex) {
  if(event) event.stopPropagation();
  produtosSelecionados[slotIndex] = null;
  renderizarSlotsPrincipais();
  compararProdutos();
}

/* =========================================
   5. FILTROS E BUSCA
   ========================================= */

function selecionarTermoPopular(elemento) {
  let clone = elemento.cloneNode(true);
  let numeroSpan = clone.querySelector('.term-number');
  if (numeroSpan) numeroSpan.remove();
  
  let termoLimpo = clone.textContent.trim();
  const inputBusca = document.getElementById("modalSearchInput");
  inputBusca.value = termoLimpo;

  filtrarProdutos();
  togglePopularTerms(false);
}

function aplicarFiltrosAvancados() {
    const esporte = document.getElementById('filterEsporte').value;
    const genero = document.getElementById('filterGenero').value;
    const cor = document.getElementById('filterCor').value;
    const preco = document.getElementById('filterPreco').value;
    
    let filtrados = produtosExemplo.filter(p => {
        if (esporte && p.esporte !== esporte) return false;
        if (genero && p.genero !== genero) return false;
        if (cor && !p.cor.includes(cor)) return false;
        let valor = parseFloat(p.preco.replace('R$', '').replace(',', '.'));
        if (preco === 'low' && valor > 100) return false;
        if (preco === 'mid' && (valor <= 100 || valor > 200)) return false;
        if (preco === 'high' && valor <= 200) return false;
        return true;
    });
    renderizarCards(filtrados);
}

function limparFiltros() {
    document.getElementById('filterEsporte').value = "";
    document.getElementById('filterGenero').value = "";
    document.getElementById('filterCor').value = "";
    document.getElementById('filterPreco').value = "";
    document.getElementById('modalSearchInput').value = "";
    
    // Reseta para a visualização dividida se houver produto referência
    abrirModalSelecao();
    
    togglePopularTerms(false); 
}

/* =========================================
   6. FUNÇÃO PRINCIPAL DE COMPARAÇÃO
   ========================================= */

function compararProdutos() {
    const produtosParaComparar = produtosSelecionados.filter(p => p !== null);
    const secaoResultados = document.getElementById("comparacao-resultado");
    if(!secaoResultados) return;
    
    if (produtosParaComparar.length < 2) {
        secaoResultados.style.display = "none";
        return;
    }

    // Renderiza Tabela (Desktop)
    for (let i = 0; i < MAX_PRODUTOS; i++) {
        const produto = produtosSelecionados[i];
        const colNum = i + 1;

        if (produto) {
            document.getElementById(`marca${colNum}`).textContent = produto.marca || '-';
            document.getElementById(`preco${colNum}`).textContent = produto.preco || '-';
            
            const resumoContainer = document.getElementById(`resumo${colNum}`);
            if (produto.resumoIA) {
                let textoLimpo = produto.resumoIA.replace("✨ <strong>Resumo das Opiniões:</strong>", "");
                resumoContainer.innerHTML = `
                    <div class="ai-card">
                        <div class="ai-card-header"><span>✨</span> Destaques do Produto</div>
                        <div class="ai-card-body">${textoLimpo}</div>
                        <div class="ai-card-footer">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                            Resumo de opiniões gerado por IA
                        </div>
                    </div>`;
            } else {
                resumoContainer.innerHTML = '-'; 
            }

            document.getElementById(`material${colNum}`).textContent = produto.material || '-';
            document.getElementById(`peso${colNum}`).textContent = produto.peso || '-';
            document.getElementById(`cor${colNum}`).textContent = produto.cor || '-';
            document.getElementById(`tecnologia${colNum}`).textContent = produto.tecnologia || '-';
            document.getElementById(`fecho${colNum}`).textContent = produto.fecho || '-';
            document.getElementById(`tamanhos${colNum}`).textContent = produto.tamanhos || '-';
        } else {
            // Limpa coluna
            document.getElementById(`marca${colNum}`).textContent = '-';
            document.getElementById(`preco${colNum}`).textContent = '-';
            const resumoElem = document.getElementById(`resumo${colNum}`);
            if(resumoElem) resumoElem.innerHTML = '';
            document.getElementById(`material${colNum}`).textContent = '-';
            document.getElementById(`peso${colNum}`).textContent = '-';
            document.getElementById(`cor${colNum}`).textContent = '-';
            document.getElementById(`tecnologia${colNum}`).textContent = '-';
            document.getElementById(`fecho${colNum}`).textContent = '-';
            document.getElementById(`tamanhos${colNum}`).textContent = '-';
        }
    }
    
    renderizarMobileTabs();
    secaoResultados.style.display = "block";
    secaoResultados.scrollIntoView({ behavior: 'smooth' });
}

/* =========================================
   7. FUNÇÕES AUXILIARES MOBILE
   ========================================= */

function renderizarMobileTabs() {
    const headerContainer = document.getElementById('mobileTabsHeader');
    const contentContainer = document.getElementById('mobileTabsContent');
    
    if (!headerContainer || !contentContainer) return;

    headerContainer.innerHTML = '';
    contentContainer.innerHTML = '';

    const produtosValidos = produtosSelecionados.filter(p => p !== null);

    produtosValidos.forEach((produto, index) => {
        let precoNum = parseFloat(produto.preco.replace('R$', '').replace(',', '.').trim());
        let precoOrigNum = parseFloat(produto.precoOriginal.replace('R$', '').replace(',', '.').trim());
        let promoHTML = '';
        
        if (precoOrigNum > precoNum) {
            const porcentagem = Math.round(((precoOrigNum - precoNum) / precoOrigNum) * 100);
            promoHTML = `
                <div class="mobile-promo-container">
                    <span class="mobile-original-price">${produto.precoOriginal}</span>
                    <span class="mobile-discount-badge">-${porcentagem}%</span>
                </div>
            `;
        }

        const btnHTML = `
            <div class="tab-btn ${index === 0 ? 'active' : ''}" onclick="switchMobileTab(${index})">
                <img src="${produto.imagem}" alt="${produto.nome}">
                <span>${produto.nome}</span> 
            </div>
        `;
        headerContainer.innerHTML += btnHTML;

        let iaCardHTML = '';
        if (produto.resumoIA) {
            let textoLimpo = produto.resumoIA.replace("✨ <strong>Resumo das Opiniões:</strong>", "");
            iaCardHTML = `
                <div class="mobile-ai-card-wrapper" style="margin: 15px 0;">
                    <div class="ai-card">
                        <div class="ai-card-header"><span>✨</span> Destaques</div>
                        <div class="ai-card-body">${textoLimpo}</div>
                        <div class="ai-card-footer">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                            </svg>
                            Resumo de opiniões gerado por IA
                        </div>
                    </div>
                </div>
            `;
        }

        const contentHTML = `
            <div class="mobile-product-detail ${index === 0 ? 'active' : ''}" id="mob-tab-${index}">
                <div class="mobile-price-block">
                    <div class="mobile-main-price">${produto.preco}</div>
                    ${promoHTML}
                </div>
                ${iaCardHTML}
                <div class="mobile-spec-item"><span class="mobile-spec-label">Marca</span><span class="mobile-spec-value">${produto.marca}</span></div>
                <div class="mobile-spec-item"><span class="mobile-spec-label">Material</span><span class="mobile-spec-value">${produto.material}</span></div>
                <div class="mobile-spec-item"><span class="mobile-spec-label">Peso</span><span class="mobile-spec-value">${produto.peso}</span></div>
                <div class="mobile-spec-item"><span class="mobile-spec-label">Cor</span><span class="mobile-spec-value">${produto.cor}</span></div>
                <div class="mobile-spec-item"><span class="mobile-spec-label">Tecnologia</span><span class="mobile-spec-value">${produto.tecnologia}</span></div>
                <div class="mobile-spec-item"><span class="mobile-spec-label">Fecho</span><span class="mobile-spec-value">${produto.fecho}</span></div>
            </div>
        `;
        contentContainer.innerHTML += contentHTML;
    });
}

function switchMobileTab(index) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.mobile-product-detail').forEach(content => content.classList.remove('active'));
    document.querySelectorAll('.tab-btn')[index].classList.add('active');
    document.getElementById(`mob-tab-${index}`).classList.add('active');
}

/* =========================================
   8. PÁGINA DE PRODUTO + CARRINHO + INTEGRAÇÃO
   ========================================= */

// --- A. Lógica da Página de Detalhes (produto.html) ---
function carregarPaginaProduto() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const produto = produtosExemplo.find(p => p.id === id);

    if (!produto) {
        document.querySelector('.product-container').innerHTML = '<h2>Produto não encontrado :(</h2><a href="home.html">Voltar</a>';
        return;
    }

    // Preenchimento de Textos
    document.title = `${produto.nome} - Minotauro`;
    document.getElementById('detalhe-nome').textContent = produto.nome;
    document.getElementById('detalhe-preco').textContent = produto.preco.replace('R$', '').trim();
    if(produto.precoOriginal) {
        const elOld = document.getElementById('detalhe-preco-antigo');
        if(elOld) elOld.textContent = produto.precoOriginal;
    }
    document.getElementById('bread-categoria').textContent = produto.categoria || 'Esportes';
    document.getElementById('bread-nome').textContent = produto.nome;

    // Imagens
    const imgPrincipal = document.getElementById('main-img');
    if(imgPrincipal) {
        imgPrincipal.src = produto.imagem;
        imgPrincipal.alt = produto.nome;
    }
    for(let i=1; i<=4; i++) {
        const thumb = document.getElementById(`thumb-${i}`);
        if(thumb) thumb.src = produto.imagem;
    }
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.addEventListener('click', function() {
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('selected'));
            this.classList.add('selected');
            if(imgPrincipal) imgPrincipal.src = this.querySelector('img').src;
        });
    });

    // Cor
    const elemCor = document.getElementById('detalhe-cor');
    if(elemCor) elemCor.textContent = produto.cor;
    const corPreview = document.getElementById('cor-preview');
    if(corPreview) {
        const coresMap = { 'Vermelho': '#e52d27', 'Preto': '#222', 'Branco': '#eee', 'Azul': '#0056b3', 'Verde': '#28a745', 'Amarelo': '#ffc107', 'Laranja': '#fd7e14' };
        const corEncontrada = Object.keys(coresMap).find(key => produto.cor && produto.cor.includes(key));
        corPreview.style.backgroundColor = corEncontrada ? coresMap[corEncontrada] : '#999';
    }

    // Descrição e IA
    const elemIA = document.getElementById('detalhe-ia-desc');
    if (elemIA) {
        elemIA.innerHTML = produto.resumoIA || "Análise em processamento pela IA do Minotauro...";
    }
    const specsContainer = document.getElementById('detalhe-specs');
    if(specsContainer) {
        specsContainer.innerHTML = `
            <p><strong>Marca:</strong> ${produto.marca}</p>
            <p><strong>Categoria:</strong> ${produto.esporte || produto.categoria}</p>
            <p><strong>Material:</strong> ${produto.material}</p>
            <p><strong>Tecnologia:</strong> ${produto.tecnologia || 'Padrão'}</p>
            <p><strong>Peso:</strong> ${produto.peso || 'N/A'}</p>
        `;
    }

    // Interações: Tamanho
    const botoesTamanho = document.querySelectorAll('.size-btn');
    botoesTamanho.forEach(btn => {
        btn.addEventListener('click', function() {
            botoesTamanho.forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    // Interações: Calculadora de Frete
    const btnCalc = document.getElementById('btn-calc-frete');
    const inputCep = document.getElementById('cep-input');
    const resultadoFrete = document.getElementById('frete-resultado');

    if(btnCalc && inputCep && resultadoFrete) {
        btnCalc.addEventListener('click', function() {
            const cep = inputCep.value.replace(/\D/g, '');
            if (cep.length !== 8) {
                resultadoFrete.innerHTML = '<span style="color:red">CEP inválido. Digite 8 números.</span>';
                return;
            }
            const precoFrete = (Math.random() * (45 - 15) + 15).toFixed(2).replace('.', ',');
            const diasFrete = Math.floor(Math.random() * (12 - 3) + 3);
            resultadoFrete.innerHTML = `Frete: R$ ${precoFrete} <span style="color:#666">(Econômico)</span> <span class="prazo">Chega em até <strong>${diasFrete} dias úteis</strong></span>`;
        });
    }

    // Interação: Botão de Compra (Carrinho)
    const btnAddCart = document.querySelector('.btn-add-cart');
    const btnBuyNow = document.querySelector('.btn-buy-now');
    if(btnAddCart) btnAddCart.addEventListener('click', () => adicionarAoCarrinho(produto));
    if(btnBuyNow) btnBuyNow.addEventListener('click', () => {
        adicionarAoCarrinho(produto);
        setTimeout(() => alert('Redirecionando para o Checkout...'), 500);
    });

    // Ativa Integração com Comparador
    configurarBotaoComparar(produto.id);
}


// --- B. Integração Botão Comparar -> Home (Automático) ---
function configurarBotaoComparar(produtoId) {
    const btnComparar = document.getElementById('btn-comparar-auto');
    
    if (btnComparar) {
        btnComparar.addEventListener('click', function() {
            
            // --- A MÁGICA ESTÁ AQUI ---
            let listaNova = [produtoId]; 
            
            localStorage.setItem('minotauro_comparador', JSON.stringify(listaNova));

            this.innerHTML = 'Carregando Comparador... 🤖';
            this.style.background = '#b38728';
            this.style.color = 'white';

            setTimeout(() => {
                window.location.href = 'index.html'; 
            }, 500);
        });
    }
}

// --- C. Sistema de Carrinho Inteligente (LocalStorage + Toast) ---

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Atualiza bolinha do carrinho
    atualizarContadorCarrinho();

    // 2. Cria container de toasts se não existir
    if (!document.getElementById('toast-container')) {
        const toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        document.body.appendChild(toastContainer);
    }

    // 3. Se estiver na página do COMPARADOR (verifica se existe o slot1)
    if (document.getElementById('slot1')) {
        const listaIds = JSON.parse(localStorage.getItem('minotauro_comparador'));
        
        // Se tiver produtos na memória, carrega eles nas variáveis
        if (listaIds && listaIds.length > 0) {
            listaIds.forEach((id, index) => {
                const p = produtosExemplo.find(x => x.id === id);
                if (p) produtosSelecionados[index] = p;
            });
            compararProdutos();
        }
        renderizarSlotsPrincipais();
    }
});

function adicionarAoCarrinho(produto) {
    let carrinho = JSON.parse(localStorage.getItem('minotauro_carrinho')) || [];
    carrinho.push(produto);
    localStorage.setItem('minotauro_carrinho', JSON.stringify(carrinho));
    
    atualizarContadorCarrinho();
    mostrarToast(produto.nome);
}

function atualizarContadorCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('minotauro_carrinho')) || [];
    const badge = document.getElementById('cart-count');
    if(badge) {
        badge.textContent = carrinho.length;
        badge.style.display = carrinho.length > 0 ? 'flex' : 'none';
    }
}

function mostrarToast(nomeProduto) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <div class="toast-icon">✅</div>
        <div class="toast-content">
            <strong>Adicionado ao carrinho!</strong>
            <span>${nomeProduto}</span>
        </div>
    `;
    container.appendChild(toast);
    setTimeout(() => { toast.remove(); }, 3000);
}

/* =========================================
   FUNÇÃO DE LIMPEZA (RESET)
   ========================================= */
function limparTudo() {
    produtosSelecionados = [null, null, null];
    localStorage.removeItem('minotauro_comparador');
    renderizarSlotsPrincipais();
    compararProdutos(); 
    alert("Comparador limpo com sucesso!");
}
/* =========================================
   9. SISTEMA DE ONBOARDING (TUTORIAL AVANÇADO)
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. CONFIGURAÇÃO DA HOME (Botão Comparador) ---
    // Verifica se estamos na home pela presença do Slider
    const isHomePage = document.querySelector('.hero-slider'); 
    const btnComparadorMenu = document.getElementById("btn-comparador-menu");

    // Só executa se for Home, tiver o botão e o usuário nunca tiver visto
    if (isHomePage && btnComparadorMenu && !localStorage.getItem("visto_tutorial_home")) {
        setTimeout(() => {
            criarPopover({
                alvo: btnComparadorMenu,
                titulo: "Nova IA do Minotauro",
                texto: "Compare produtos lado a lado e deixe nossa Inteligência Artificial analisar qual é o melhor para você! 🤖",
                badge: "NOVIDADE",
                idStorage: "visto_tutorial_home",
                // Novos parâmetros para o botão
                botaoTexto: "Vamos lá!",
                botaoLink: "index.html"
            });
        }, 1500);
    }

    // --- 2. CONFIGURAÇÃO DO COMPARADOR (Slots) ---
    const slot1 = document.getElementById("slot1");
    // Verifica se existe slot (estamos no comparador) e se nunca viu
    if (slot1 && !localStorage.getItem("visto_tutorial_comparador")) {
        setTimeout(() => {
            criarPopover({
                alvo: slot1.parentElement, 
                titulo: "Comece sua comparação",
                texto: "Clique no cartão tracejado para adicionar o primeiro produto.",
                badge: "DICA",
                idStorage: "visto_tutorial_comparador"
                // Sem botão aqui, pois é apenas informativo
            });
        }, 1000);
    }
});

// --- Função Genérica Inteligente ---
function criarPopover({ alvo, titulo, texto, badge, idStorage, botaoTexto, botaoLink }) {
    if (!alvo) return;

    // Remove anteriores
    const antigo = document.querySelector('.tutorial-popover');
    if (antigo) antigo.remove();

    // 1. Constrói o HTML (Incluindo botão opcional)
    const btnHtml = botaoTexto 
        ? `<button class="popover-action-btn">${botaoTexto}</button>` 
        : '';

    const popover = document.createElement("div");
    popover.className = "tutorial-popover";
    popover.innerHTML = `
        <div class="tutorial-arrow"></div>
        <div class="popover-header">
            <div class="popover-title-group">
                <span class="popover-badge">${badge}</span>
                <h4 class="popover-title">${titulo}</h4>
            </div>
            <button class="popover-close">&times;</button>
        </div>
        <p class="popover-text">${texto}</p>
        ${btnHtml}
    `;
    document.body.appendChild(popover);

    // 2. Lógica de Fechamento
    function fecharDefinitivamente() {
        if (!popover.classList.contains("visible")) return;
        popover.classList.remove("visible");
        localStorage.setItem(idStorage, "true"); // Grava que viu
        setTimeout(() => popover.remove(), 400);
        document.removeEventListener("click", verificarCliqueFora);
        window.removeEventListener("resize", fecharDefinitivamente);
    }

    // Evento do Botão de Ação ("Vamos lá!")
    if (botaoTexto) {
        const btnAction = popover.querySelector('.popover-action-btn');
        btnAction.onclick = (e) => {
            e.stopPropagation(); // Impede que o clique feche antes de redirecionar
            fecharDefinitivamente();
            if (botaoLink) window.location.href = botaoLink;
        };
    }

    // Evento de Fechar (X)
    popover.querySelector(".popover-close").onclick = (e) => {
        e.stopPropagation();
        fecharDefinitivamente();
    };

    // Fecha ao clicar fora
    function verificarCliqueFora(e) {
        if (!popover.contains(e.target) && !alvo.contains(e.target)) {
            fecharDefinitivamente();
        }
    }
    setTimeout(() => { document.addEventListener("click", verificarCliqueFora); }, 100);
    window.addEventListener("resize", fecharDefinitivamente);


    // 3. Matemática de Posicionamento (Correção do "Visual Quebrado")
    const rect = alvo.getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset;
    
    // Vertical: Abaixo do elemento + 15px
    let top = rect.bottom + scrollY + 15; 
    
    // Horizontal: Tenta centralizar
    let popoverWidth = 280; // Largura definida no CSS (width + padding)
    let left = rect.left + (rect.width / 2) - (popoverWidth / 2);

    // Proteção contra estouro de tela (Direita)
    if (left + popoverWidth > window.innerWidth - 20) {
        left = window.innerWidth - popoverWidth - 20;
    }
    // Proteção contra estouro de tela (Esquerda)
    if (left < 20) {
        left = 20;
    }

    // Ajuste fino da SETA para apontar sempre para o centro do elemento
    // Posição da seta relativa ao balão = (Centro do Alvo) - (Borda esquerda do balão) - (Metade da seta)
    let arrowLeft = (rect.left + rect.width / 2) - left - 8; 
    
    // Aplica posições
    popover.style.top = `${top}px`;
    popover.style.left = `${left}px`;
    
    const arrow = popover.querySelector('.tutorial-arrow');
    arrow.style.left = `${arrowLeft}px`;

    // Mostra
    requestAnimationFrame(() => {
        popover.classList.add("visible");
    });
}

/* =========================================
   GERENCIAMENTO DE SESSÃO GLOBAL (HEADER)
   ========================================= */
document.addEventListener("DOMContentLoaded", () => {
    verificarSessaoHeader();
});

function verificarSessaoHeader() {
    // 1. Pega os dados salvos no login
    const userId = localStorage.getItem("minotauro_user_id");
    const userName = localStorage.getItem("minotauro_user_name"); // Certifique-se que o login.html salva isso!
    
    // 2. Busca o botão "Entrar" no HTML (presente na Home e Index)
    const btnLogin = document.getElementById("btn-login-header");
    const headerIcons = document.querySelector(".header-icons");

    if (btnLogin && userId) {
        // --- CENÁRIO: USUÁRIO LOGADO ---
        
        // A. Muda o botão Entrar para "Olá, [Nome]"
        btnLogin.href = "perfil.html";
        // Pega só o primeiro nome se houver
        const primeiroNome = userName ? userName.split(' ')[0] : 'Atleta';
        btnLogin.innerHTML = `<i class="fas fa-user-circle"></i> <span>Olá, ${primeiroNome}</span>`;
        btnLogin.style.opacity = "1";
        
        // B. Cria o botão "Sair" ao lado, se ainda não existir
        if (!document.getElementById("btn-header-logout")) {
            const btnLogout = document.createElement("a");
            btnLogout.id = "btn-header-logout";
            btnLogout.className = "header-item";
            btnLogout.href = "#";
            btnLogout.innerHTML = `<i class="fas fa-sign-out-alt"></i> <span>Sair</span>`;
            
            // Lógica de Logout
            btnLogout.onclick = function(e) {
                e.preventDefault();
                localStorage.removeItem("minotauro_user_id");
                localStorage.removeItem("minotauro_user_name");
                window.location.href = "login.html";
            };
            
            // Adiciona na barra
            headerIcons.appendChild(btnLogout);
        }
    } 

  
}

  /* =========================================
   10. MENU MOBILE (HAMBÚRGUER)
   ========================================= */

function toggleMenu() {
    const nav = document.getElementById('navBar');
    if (!nav) return;

    // 1. Abre ou fecha o menu
    nav.classList.toggle('active');

    // 2. Procura se a película escura já existe
    let overlay = document.getElementById('menu-overlay');

    // 3. Se o menu acabou de ser aberto
    if (nav.classList.contains('active')) {
        // Se a película não existe, cria ela do zero
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'menu-overlay';
            
            // Estilo da película (Cobre a tela toda, cor preta com 60% de transparência)
            overlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.6); z-index: 990; cursor: pointer;';
            
            // Adiciona a película no site
            document.body.appendChild(overlay);

            // A MÁGICA: Clicar na película escura fecha tudo!
            overlay.addEventListener('click', function() {
                nav.classList.remove('active');
                overlay.style.display = 'none';
            });
        } else {
            // Se já existe, só mostra de novo
            overlay.style.display = 'block';
        }
    } 
    // 4. Se o menu fechou pelo botão de hambúrguer, esconde a película
    else {
        if (overlay) {
            overlay.style.display = 'none';
        }
    }
}