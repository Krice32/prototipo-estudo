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

    // --- TÊNIS (Categoria: calcados) ---
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

    // --- BOLAS (Categoria: bolas) ---
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

    // --- RELÓGIOS (Categoria: relogio) ---
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

function renderizarCards(listaDeProdutos) {
    const container = document.getElementById('modalProductsContainer');
    
    // Verifica se há resultados para exibir
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
        const isSelected = produtosSelecionadosModal.some(p => p.id === produto.id);
        
        // Formatação de preço e cálculo de desconto
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

        htmlContent += `
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
    });

    container.innerHTML = htmlContent;
    atualizarBotaoCompararModal();
}

function toggleSelecaoProduto(idProduto) {
  const produto = produtosExemplo.find((p) => p.id === idProduto);
  const index = produtosSelecionadosModal.findIndex((p) => p.id === idProduto);
  const cardElement = document.querySelector(`.product-card-modal[data-product-id="${idProduto}"]`);

  // Remove se já estiver selecionado
  if (index > -1) {
    produtosSelecionadosModal.splice(index, 1);
    cardElement.classList.remove("selected-for-comp");
    atualizarBotaoCompararModal();
    return; 
  }

  // Verifica compatibilidade de categoria
  if (produtosSelecionadosModal.length > 0) {
      const primeiroProduto = produtosSelecionadosModal[0];

      if (primeiroProduto.categoria !== produto.categoria) {
          mostrarErroToast(); 
          return; 
      }
  }

  // Verifica limite máximo
  if (produtosSelecionadosModal.length < MAX_PRODUTOS) {
    produtosSelecionadosModal.push(produto);
    cardElement.classList.add("selected-for-comp");
  } else {
    alert(`Você pode selecionar no máximo ${MAX_PRODUTOS} produtos.`);
  }
  
  atualizarBotaoCompararModal();
}

function mostrarErroToast() {
    const toast = document.getElementById("errorToast");
    toast.classList.add("show");
    
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
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

function abrirModalSelecao() {
  produtosSelecionadosModal = produtosSelecionados.filter((p) => p !== null);
  document.getElementById("productModal").style.display = "block";
  const produtosEmDestaque = produtosExemplo.filter((p) => p.featured === true);
  renderizarCards(produtosEmDestaque);
  document.getElementById("modalSearchInput").value = "";
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
  
  // 1. Normaliza o texto (tira acentos e põe minúsculo)
  let termoLimpo = normalizarTexto(inputBusca);


  termoLimpo = termoLimpo.replace(/\b(de|da|do|das|dos|em|com|para|e|a|o|u)\b/g, " ");

  const palavrasChave = termoLimpo.split(" ").filter(palavra => palavra.length > 0);

  let produtosFiltrados;

  if (palavrasChave.length > 0) {
    togglePopularTerms(false);
    
    produtosFiltrados = produtosExemplo.filter((produto) => {
 
      const textoProduto = normalizarTexto(
          `${produto.nome} ${produto.esporte} ${produto.marca} ${produto.categoria}`
      );
 
      return palavrasChave.every(palavra => textoProduto.includes(palavra));
    });

  } else {
    // Se apagou tudo, mostra os destaques
    togglePopularTerms(true);
    produtosFiltrados = produtosExemplo.filter((p) => p.featured === true);
  }
  
  renderizarCards(produtosFiltrados);
}

// Eventos de clique para fechar modais
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
   4. FUNÇÕES DOS SLOTS PRINCIPAIS
   ========================================= */

function renderizarSlotsPrincipais() {
    for (let i = 0; i < MAX_PRODUTOS; i++) {
        const slotId = 'slot' + (i + 1);
        const slotElement = document.getElementById(slotId);
        const produto = produtosSelecionados[i]; 
        const slotPai = slotElement.parentElement; 

        if (produto) {
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
            slotPai.classList.add('selected'); 
        } else {
            slotElement.innerHTML = `
                <div class="produto-placeholder">
                    <div class="icon-plus">+</div>
                    <div>Adicionar produto</div>
                    <small>Clique para selecionar</small>
                </div>
            `;
            slotPai.classList.remove('selected'); 
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
  event.stopPropagation();
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
    filtrarProdutos();
}

/* =========================================
   6. FUNÇÃO PRINCIPAL DE COMPARAÇÃO
   ========================================= */

function compararProdutos() {
    const produtosParaComparar = produtosSelecionados.filter(p => p !== null);
    const secaoResultados = document.getElementById("comparacao-resultado");
    
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
            // Limpa coluna se não houver produto
            document.getElementById(`marca${colNum}`).textContent = '-';
            document.getElementById(`preco${colNum}`).textContent = '-';
            document.getElementById(`resumo${colNum}`).innerHTML = '';
            document.getElementById(`material${colNum}`).textContent = '-';
            document.getElementById(`peso${colNum}`).textContent = '-';
            document.getElementById(`cor${colNum}`).textContent = '-';
            document.getElementById(`tecnologia${colNum}`).textContent = '-';
            document.getElementById(`fecho${colNum}`).textContent = '-';
            document.getElementById(`tamanhos${colNum}`).textContent = '-';
        }
    }
    
    // Renderiza Abas (Mobile)
    renderizarMobileTabs();

    secaoResultados.style.display = "block";
    document.getElementById("comparacao-resultado").scrollIntoView({ behavior: 'smooth' });
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

        // Cabeçalho da Aba
        const btnHTML = `
            <div class="tab-btn ${index === 0 ? 'active' : ''}" onclick="switchMobileTab(${index})">
                <img src="${produto.imagem}" alt="${produto.nome}">
                <span>${produto.nome}</span> 
            </div>
        `;
        headerContainer.innerHTML += btnHTML;

        // Conteúdo da Aba
       let iaCardHTML = '';
        if (produto.resumoIA) {
            let textoLimpo = produto.resumoIA.replace("✨ <strong>Resumo das Opiniões:</strong>", "");
            
            // AQUI ESTÁ A MUDANÇA: Adicionei o footer dentro do template string
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