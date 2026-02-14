/* =========================================
   1. BANCO DE DADOS SIMULADO (3 NÍVEIS)
   ========================================= */
const usuariosDB = {
    // NÍVEL 1: ENTUSIASTA
    1: {
        nome: "Lucas Silva",
        avatar: "imagens/avatar-cent-lvl1.png",
        avatarNivel: "imagens/lvl1.png",
        membroDesde: "2025",
        nivelAtual: "ENTUSIASTA",
        nivelId: 1, // Usado para cores
        pontosAtuais: 350,
        pontosMeta: 1000,
        proximoNivelNome: "ATLETA",
        proximaRecompensa: "🚀 1% Cashback",
        
        cashback: "12,50",
        pedidosAbertos: 1,
        incentivo: "Faça um review simples e ganhe 1% na próxima compra!",
        
        pedidosLista: [
            { numero: "98234-BR", data: "06 Fev 2024", total: "R$ 359,90", img: "imagens/tenis Nike Pegasus 40.avif", nome: "Tênis Running Performance Azul", status: "Chega amanhã", statusCor: "#00a650", progresso: 70, entregue: false, avaliado: false }
        ],
        avaliacoesPendentes: [],
        avaliacoesPassadas: [] 
    },
    
    // NÍVEL 2: ATLETA (Fernanda)
    2: {
        nome: "Fernanda Costa",
        avatar: "imagens/avatar-cent-lvl2.png",
        avatarNivel: "imagens/lvl2.png",
        membroDesde: "2024",
        nivelAtual: "ATLETA",
        nivelId: 2,
        pontosAtuais: 1850,
        pontosMeta: 3000,
        proximoNivelNome: "ESPECIALISTA",
        proximaRecompensa: "🏆 4% Cashback",
        
        cashback: "45,90",
        pedidosAbertos: 1,
        incentivo: "📸 Poste uma foto usando o produto e ganhe 4% de cashback!",
        
        pedidosLista: [
            { numero: "99520-BR", data: "08 Fev 2024", total: "R$ 179,90", img: "imagens/98567533A6.avif", nome: "Luva de Boxe Pretorian 14oz", status: "Em separação", statusCor: "#ffc107", progresso: 20, entregue: false, avaliado: false },
            { numero: "77450-BR", data: "10 Dez 2023", total: "R$ 299,90", img: "imagens/tenis Asics Gel-Nimbus 25.avif", nome: "Tênis Asics Gel-Nimbus 25", status: "Entregue", statusCor: "#333", progresso: 100, entregue: true, avaliado: false },
            { numero: "88123-BR", data: "15 Jan 2024", total: "R$ 89,90", img: "imagens/9856752VA4.jpg", nome: "Shorts Treino Dry-Fit", status: "Entregue", statusCor: "#333", progresso: 100, entregue: true, avaliado: true, nota: 5 },
            { numero: "54020-BR", data: "20 Out 2023", total: "R$ 129,90", img: "imagens/Bola Futebol Campo Adidas Al Rihla.avif", nome: "Bola Adidas Campo Al Rihla", status: "Entregue", statusCor: "#333", progresso: 100, entregue: true, avaliado: false }
        ],
        avaliacoesPendentes: [
            { img: "imagens/tenis Asics Gel-Nimbus 25.avif", nome: "Tênis Asics Gel-Nimbus 25", data: "Entregue em 10 Dez" },
            { img: "imagens/Bola Futebol Campo Adidas Al Rihla.avif", nome: "Bola Adidas Campo Al Rihla", data: "Entregue em 20 Out" }
        ],
        avaliacoesPassadas: [
            { img: "imagens/9856752VA4.jpg", nome: "Shorts Treino Dry-Fit", nota: 5, data: "15 Jan" }
        ],
        cashbackHistory: [
            { data: "15/01/2024", desc: "Compra #88123-BR (4%)", valor: "+ R$ 4,50", tipo: "credito" }
        ]
    },

    // NÍVEL 3: ESPECIALISTA (Roberto) - TURBINADO & SEM VIP
    3: {
        nome: "Roberto 'Beto' Almeida",
        avatar: "imagens/avatar-cent-lvl3.png",
        avatarNivel: "imagens/lvl3.png",
        membroDesde: "2022",
        
        nivelAtual: "ESPECIALISTA",
        nivelId: 3,
        pontosAtuais: 4890,
        pontosMeta: 5000,
        proximoNivelNome: "LENDA",
        proximaRecompensa: "6% de cashback", // MUDANÇA: Saiu VIP, entrou Frete Grátis
        
        cashback: "128,00",
        pedidosAbertos: 2,
        incentivo: "🏆 Escreva um comparativo detalhado e maximize seu ganho para 6%!",
        
        // LISTA GRANDE E CONSISTENTE (8 ITENS)
        pedidosLista: [
            // Ativos (2)
            { numero: "10293-BR", data: "09 Fev 2024", total: "R$ 1.399,00", img: "imagens/Relogio Garmin Forerunner 55.avif", nome: "Relógio Garmin Forerunner 55", status: "Preparando envio", statusCor: "#ffc107", progresso: 10, entregue: false, avaliado: false },
            { numero: "10100-BR", data: "07 Fev 2024", total: "R$ 499,90", img: "imagens/tenis Nike Pegasus 40.avif", nome: "Kit 3 Pares Tênis Nike", status: "Em Trânsito", statusCor: "#00a650", progresso: 50, entregue: false, avaliado: false },
            
            // Pendentes de Avaliação (2)
            { numero: "95000-BR", data: "15 Jan 2024", total: "R$ 899,90", img: "imagens/Smartwatch Samsung Galaxy Watch 6.avif", nome: "Samsung Galaxy Watch 6", status: "Entregue", statusCor: "#333", progresso: 100, entregue: true, avaliado: false },
            { numero: "88000-BR", data: "10 Nov 2023", total: "R$ 159,90", img: "imagens/Bola Futebol Nike Flight Premier.avif", nome: "Bola Nike Flight Premier", status: "Entregue", statusCor: "#333", progresso: 100, entregue: true, avaliado: false },

            // Já Avaliados (4)
            { numero: "92000-BR", data: "20 Dez 2023", total: "R$ 1.199,00", img: "imagens/Smartwatch Amazfit GTR 4.avif", nome: "Smartwatch Amazfit GTR 4", status: "Entregue", statusCor: "#333", progresso: 100, entregue: true, avaliado: true, nota: 5 },
            { numero: "81000-BR", data: "01 Out 2023", total: "R$ 259,90", img: "imagens/98567533A6.avif", nome: "Kit Muay Thai Completo", status: "Entregue", statusCor: "#333", progresso: 100, entregue: true, avaliado: true, nota: 5 },
            { numero: "75000-BR", data: "15 Set 2023", total: "R$ 89,90", img: "imagens/9856752VA4.jpg", nome: "Luvas de Boxe Rhino", status: "Entregue", statusCor: "#333", progresso: 100, entregue: true, avaliado: true, nota: 4 },
            { numero: "70000-BR", data: "05 Ago 2023", total: "R$ 459,90", img: "imagens/tenis Nike Pegasus 40.avif", nome: "Tênis Nike Pegasus 39", status: "Entregue", statusCor: "#333", progresso: 100, entregue: true, avaliado: true, nota: 5 }
        ],
        
        avaliacoesPendentes: [
            { img: "imagens/Smartwatch Samsung Galaxy Watch 6.avif", nome: "Samsung Galaxy Watch 6", data: "Entregue em 15 Jan" },
            { img: "imagens/Bola Futebol Nike Flight Premier.avif", nome: "Bola Nike Flight Premier", data: "Entregue em 10 Nov" }
        ],
        
        avaliacoesPassadas: [
            { img: "imagens/Smartwatch Amazfit GTR 4.avif", nome: "Amazfit GTR 4", nota: 5, data: "05 Jan 2024" },
            { img: "imagens/98567533A6.avif", nome: "Kit Muay Thai Completo", nota: 5, data: "05 Out 2023" },
            { img: "imagens/9856752VA4.jpg", nome: "Luvas de Boxe Rhino", nota: 4, data: "20 Set 2023" },
            { img: "imagens/tenis Nike Pegasus 40.avif", nome: "Tênis Nike Pegasus 39", nota: 5, data: "10 Ago 2023" }
        ],
        
        cashbackHistory: [
            { data: "09/02/2024", desc: "Compra #10293-BR (6%)", valor: "+ R$ 83,94", tipo: "credito" },
            { data: "15/01/2024", desc: "Compra #95000-BR (6%)", valor: "+ R$ 53,94", tipo: "credito" }
        ]
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const loggedUserId = localStorage.getItem("minotauro_user_id");
    if (!loggedUserId) { window.location.href = "login.html"; return; }
    carregarUsuario(loggedUserId);
});

// Funções de Segurança
function safeContent(id, text) { const el = document.getElementById(id); if (el) el.textContent = text; }
function safeSrc(id, src) { const el = document.getElementById(id); if (el) el.src = src; }
function safeStyle(id, prop, value) { const el = document.getElementById(id); if (el) el.style[prop] = value; }

function navegarPara(tela) {
    const views = ['geral', 'pedidos', 'avaliacoes', 'cashback'];
    views.forEach(v => {
        const el = document.getElementById(`view-${v}`);
        const menu = document.getElementById(`menu-${v}`);
        if(el) el.style.display = 'none';
        if(menu) menu.classList.remove('active');
    });
    const activeEl = document.getElementById(`view-${tela}`);
    const activeMenu = document.getElementById(`menu-${tela}`);
    if(activeEl) activeEl.style.display = 'block';
    if(activeMenu) activeMenu.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function carregarUsuario(id) {
    const user = usuariosDB[id];
    if (!user) { fazerLogout(); return; }

    // DADOS GERAIS
    safeContent("user-name", user.nome);
    safeContent("member-since", `Membro desde ${user.membroDesde}`);
    safeSrc("user-avatar", user.avatar);
    // Cores: 1=Cinza, 2=Vermelho, 3=Dourado
    const cores = { 1: "#ccc", 2: "#e52d27", 3: "#ffd700" };
    safeStyle("avatar-border", "borderColor", cores[user.nivelId]);
    
    safeContent("lbl-nivel-atual", user.nivelAtual);
    safeStyle("lbl-nivel-atual", "color", cores[user.nivelId]);
    const porcentagem = (user.pontosAtuais / user.pontosMeta) * 100;
    safeStyle("progress-bar", "width", `${porcentagem}%`);
    safeStyle("progress-bar", "backgroundColor", cores[user.nivelId]);
    safeContent("points-needed", `Faltam ${user.pontosMeta - user.pontosAtuais} pts.`);
    
    safeContent("menu-cash", `R$ ${user.cashback}`);
    safeContent("menu-reviews", user.avaliacoesPendentes.length);
    safeContent("welcome-name", user.nome.split(' ')[0]);
    safeContent("open-orders", user.pedidosAbertos);
    safeContent("dash-cashback", `R$ ${user.cashback}`);
    
    // --- HERO CARD ---
    safeContent("dash-level-name", user.nivelAtual);
    safeSrc("hero-level-badge", user.avatarNivel); // Avatar do Selo
    safeContent("hero-pill-level", `NÍVEL ${user.nivelId}`);
    safeContent("hero-rank-name", user.nivelAtual);
    safeStyle("hero-rank-name", "color", cores[user.nivelId]);
    safeContent("next-reward-text", user.proximaRecompensa);
    safeContent("points-current", `Pontos: ${user.pontosAtuais}`);
    safeContent("points-next", `Meta: ${user.pontosMeta}`);
    safeStyle("hero-progress-bar", "width", `${porcentagem}%`);
    safeStyle("hero-progress-bar", "backgroundColor", cores[user.nivelId]);
    safeContent("points-missing", `Faltam ${user.pontosMeta - user.pontosAtuais} pontos para subir!`);
    
    safeContent("gami-desc", user.incentivo);

    // Resumo Último Pedido
    if(user.pedidosLista.length > 0) {
        const last = user.pedidosLista[0];
        safeContent("order-product-name", last.nome);
        safeSrc("order-img", last.img);
        safeContent("order-details", `Pedido ${last.numero} • Minotauro`);
        safeContent("order-badge", last.entregue ? 'ENTREGUE' : 'EM TRÂNSITO');
        
        const btnAction = document.getElementById("btn-last-order-action");
        if(btnAction) {
            btnAction.textContent = last.entregue ? "AVALIAR" : "RASTREAR";
            if(last.entregue) {
                btnAction.onclick = function() { navegarPara('avaliacoes'); };
            } else {
                btnAction.onclick = function() { alert('Rastreando...'); };
            }
        }
    }

    renderizarListas(user);
}

function renderizarListas(user) {
    const pedidosContainer = document.getElementById("lista-pedidos-container");
    if(pedidosContainer) {
        pedidosContainer.innerHTML = "";
        user.pedidosLista.forEach(p => {
            let btnHtml = p.entregue ? 
                (p.avaliado ? `<button class="btn-outline-gray">Ver Minha Avaliação</button>` : `<button class="btn-outline-gray" style="color:#e52d27; border-color:#e52d27;" onclick="navegarPara('avaliacoes')">Avaliar Produto</button>`) : 
                `<button class="btn-solid-red">Rastrear Entrega</button>`;
            let statusHtml = p.avaliado ? `● ENTREGUE • <span style="color:#28a745;">AVALIADO</span>` : (p.entregue ? `● ENTREGUE` : `● ${p.status}`);
            let estrelasHtml = p.avaliado ? `<div style="color:#ffc107; font-size:12px; margin-top:2px;">Sua nota: ${'★'.repeat(p.nota)}</div>` : '';

            pedidosContainer.innerHTML += `
            <div class="full-order-card">
                <div class="order-header"><span>DATA <strong>${p.data}</strong></span><span>TOTAL <strong>${p.total}</strong></span><span># ${p.numero}</span></div>
                <div class="order-body">
                    <div class="order-product-row">
                        <div class="order-img"><img src="${p.img}"></div>
                        <div class="order-info"><h4>${p.nome}</h4>${estrelasHtml}<div class="status-tracker"><span class="status-text" style="color:${p.entregue?'#333':'#00a650'}">${statusHtml}</span><div class="status-bar-bg"><div class="status-bar-fill" style="width:${p.progresso}%"></div></div></div></div>
                    </div>
                    <div class="order-buttons-row">${btnHtml}<button class="btn-outline-gray">Ajuda</button></div>
                </div>
            </div>`;
        });
    }
    
    const pendentesContainer = document.getElementById("lista-avaliacoes-pendentes");
    if(pendentesContainer) {
        pendentesContainer.innerHTML = "";
        safeContent("count-pendentes", user.avaliacoesPendentes.length);
        if(user.avaliacoesPendentes.length===0) pendentesContainer.innerHTML='<p style="color:#999;text-align:center;padding:20px;">Nenhuma avaliação pendente.</p>';
        else user.avaliacoesPendentes.forEach(r=>{
            pendentesContainer.innerHTML+=`<div class="review-item-card"><div class="review-product-info"><div class="review-img-box"><img src="${r.img}"></div><div class="review-texts"><h4>${r.nome}</h4><p>${r.data}</p></div></div><div style="display:flex;align-items:center;"><div class="review-stars">☆☆☆☆☆</div><button class="btn-black-small">AVALIAR</button></div></div>`;
        });
    }
    const passadasContainer = document.getElementById("lista-avaliacoes-passadas");
    if(passadasContainer) {
        passadasContainer.innerHTML = "";
        if(user.avaliacoesPassadas.length===0) passadasContainer.innerHTML='<div class="empty-state-box"><i class="fas fa-history"></i><p>Nenhuma avaliação anterior.</p></div>';
        else user.avaliacoesPassadas.forEach(r=>{
            passadasContainer.innerHTML+=`<div class="review-item-card" style="opacity:0.9;"><div class="review-product-info"><div class="review-img-box"><img src="${r.img}"></div><div class="review-texts"><h4>${r.nome}</h4><div class="status-evaluated"><i class="fas fa-check-circle"></i> Avaliado em ${r.data}</div></div></div><div style="display:flex;align-items:center;gap:15px;"><div class="stars-display">${'★'.repeat(r.nota)+ '☆'.repeat(5-r.nota)}</div><button class="btn-outline-gray" style="padding:6px 15px;font-size:10px;">VER OPINIÃO</button></div></div>`;
        });
    }

    const historyBody = document.getElementById("cashback-history-body");
    if(historyBody) {
        historyBody.innerHTML = "";
        safeContent("page-cashback-value", `R$ ${user.cashback}`);
        if(user.cashbackHistory && user.cashbackHistory.length>0) user.cashbackHistory.forEach(i=>{
            const cor = i.tipo==='credito'?'val-positive':'val-negative';
            historyBody.innerHTML+=`<tr><td>${i.data}</td><td>${i.desc}</td><td style="text-align:right;" class="${cor}">${i.valor}</td></tr>`;
        });
        else historyBody.innerHTML='<tr><td colspan="3" style="text-align:center;">Sem histórico.</td></tr>';
    }
}

function fazerLogout() {
    localStorage.removeItem("minotauro_user_id");
    localStorage.removeItem("minotauro_user_name");
    window.location.href = "login.html";
}