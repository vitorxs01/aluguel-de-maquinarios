// ============================================
//  NEXUM - script.js
//  Lógica principal: dados, auth, UI, navegação
// ============================================

'use strict';

/* ─── DADOS SIMULADOS ─── */

const EQUIPAMENTOS = [
  {
    id: 1,
    nome: 'Escavadeira Hidráulica',
    categoria: 'escavadeira',
    desc: 'Escavadeira hidráulica de grande porte, ideal para obras de terraplanagem e escavações profundas. Motor turbinado com 220 CV.',
    preco: 1800,
    status: 'disponivel',
    src: 'images/escavadeira_hidraulica.jpeg',
    specs: { peso: '22 ton', alcance: '9,8 m', potencia: '220 CV', cap_cacamba: '1,2 m³' },
    tags: ['terraplanagem', 'escavação', 'fundação'],
    destaque: true,
    contato: {
      whatsapp: '65999990001',
      email: 'escavadeira@nexum.com',
      endereco: 'Av. das Máquinas, 100 - Cuiabá, MT'
    }
  },
  {
    id: 2,
    nome: 'Betoneira Elétrica 400L',
    categoria: 'betoneira',
    desc: 'Betoneira elétrica de alta capacidade com tambor de 400 litros. Perfeita para obras de médio e grande porte.',
    preco: 280,
    status: 'disponivel',
    src: 'images/betoneira_eletrica_400.png',
    specs: { capacidade: '400 L', tensao: '220V/380V', motor: '2 CV', peso: '180 kg' },
    tags: ['concreto', 'alvenaria'],
    destaque: false,
    contato: {
      whatsapp: '65999990002',
      email: 'betoneira@nexum.com',
      endereco: 'Rua das Obras, 45 - Várzea Grande, MT'
    }
  },
  {
    id: 3,
    nome: 'Compactador de Solo',
    categoria: 'compactador',
    desc: 'Compactador vibratório para solo e base de pavimentação. Excelente desempenho em terrenos irregulares.',
    preco: 320,
    status: 'disponivel',
    src: 'images/compactador_solo.png',
    specs: { forca: '25 kN', frequencia: '75 Hz', motor: 'Honda GX160', peso: '92 kg' },
    tags: ['pavimentação', 'base'],
    destaque: false,
    contato: {
      whatsapp: '65999990003',
      email: 'compactador@nexum.com',
      endereco: 'Rod. BR-364, Km 5 - Cuiabá, MT'
    }
  },
  {
    id: 4,
    nome: 'Guindaste Telescópico',
    categoria: 'guindaste',
    desc: 'Guindaste telescópico com lança de 40 metros e capacidade de carga de 25 toneladas. Ideal para construções verticais.',
    preco: 3500,
    status: 'disponivel',
    src: 'images/guindaste_telescopico.png',
    specs: { cap_carga: '25 ton', alcance: '40 m', altura_max: '38 m', peso: '65 ton' },
    tags: ['içamento', 'vertical', 'estrutura'],
    destaque: true,
    contato: {
      whatsapp: '65999990004',
      email: 'guindaste@nexum.com',
      endereco: 'Av. CPA, 800 - Cuiabá, MT'
    }
  },
  {
    id: 5,
    nome: 'Retroescavadeira',
    categoria: 'escavadeira',
    desc: 'Retroescavadeira versátil com concha frontal e caçamba traseira. Ideal para pequenas obras e serviços urbanos.',
    preco: 950,
    status: 'indisponivel',
    src: 'images/retroescavadeira.png',
    specs: { potencia: '95 CV', prof_max: '5,5 m', cap_concha: '1,1 m³', peso: '8 ton' },
    tags: ['urbano', 'escavação', 'movimentação'],
    destaque: false,
    contato: {
      whatsapp: '65999990005',
      email: 'retro@nexum.com',
      endereco: 'Rua dos Construtores, 22 - Rondonópolis, MT'
    }
  },
  {
    id: 6,
    nome: 'Rolo Compactador',
    categoria: 'compactador',
    desc: 'Rolo compactador tandem de duplos tambores vibratórios. Perfeito para compactação de asfalto e bases granulares.',
    preco: 1200,
    status: 'disponivel',
    src: 'images/Rolo_compactador.png',
    specs: { largura: '1,2 m', peso_op: '12 ton', amplitude: '0,5 mm', motor: '116 CV' },
    tags: ['asfalto', 'pavimentação'],
    destaque: false,
    contato: {
      whatsapp: '65999990006',
      email: 'rolo@nexum.com',
      endereco: 'Av. Historiador Rubens de Mendonça, 1200 - Cuiabá, MT'
    }
  },
  {
    id: 7,
    nome: 'Andaime Suspenso',
    categoria: 'andaime',
    desc: 'Sistema de andaime suspenso motorizado para fachadas e trabalhos em altura. Capacidade para 2 operadores.',
    preco: 420,
    status: 'disponivel',
    src: 'images/andaime-suspenso.jpg',
    specs: { cap_carga: '300 kg', comprimento: '3,6 m', velocidade: '6 m/min', altura_max: '150 m' },
    tags: ['fachada', 'altura', 'reforma'],
    destaque: false,
    contato: {
      whatsapp: '65999990007',
      email: 'andaime@nexum.com',
      endereco: 'Rua Filinto Müller, 300 - Cuiabá, MT'
    }
  },
  {
    id: 8,
    nome: 'Perfuratriz Rotativa',
    categoria: 'perfuratriz',
    desc: 'Perfuratriz rotativa hidráulica para fundações com trado contínuo. Alta produtividade em solo argiloso e arenoso.',
    preco: 2400,
    status: 'disponivel',
    src: 'images/perfuratriz_rotativa.png',
    specs: { diametro: '300-800 mm', profundidade: '20 m', torque: '50 kNm', peso: '18 ton' },
    tags: ['fundação', 'estaca', 'trado'],
    destaque: true,
    contato: {
      whatsapp: '65999990008',
      email: 'perfuratriz@nexum.com',
      endereco: 'Av. Tenente Coronel Duarte, 500 - Cuiabá, MT'
    }
  },
  {
    id: 9,
    nome: 'Minicarregadeira Skid Steer',
    categoria: 'minicarregadeira',
    desc: 'Minicarregadeira compacta e ágil, ideal para espaços restritos. Diversos implementos disponíveis.',
    preco: 680,
    status: 'disponivel',
    src: 'images/minicarregadeira_skid_steer.png',
    specs: { cap_carga: '760 kg', potencia: '74 CV', altura_desc: '2,8 m', peso: '3,4 ton' },
    tags: ['compacto', 'versátil', 'obra'],
    destaque: false,
    contato: {
      whatsapp: '65999990009',
      email: 'mini@nexum.com',
      endereco: 'Rua das Acácias, 77 - Sinop, MT'
    }
  }
];

const CATEGORIAS = [
  { id: 'todos', label: 'Todos' },
  { id: 'escavadeira', label: 'Escavadeiras' },
  { id: 'betoneira', label: 'Betoneiras' },
  { id: 'compactador', label: 'Compactadores' },
  { id: 'guindaste', label: 'Guindastes' },
  { id: 'andaime', label: 'Andaimes' },
  { id: 'perfuratriz', label: 'Perfuratriz' },
  { id: 'minicarregadeira', label: 'Minicarregadeiras' },
];

/* ─── UTILITÁRIOS ─── */

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function storageGet(key) {
  try { return JSON.parse(localStorage.getItem(key)); } catch { return null; }
}

function storageSet(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch { /* silent */ }
}

function getUsuarios() { return storageGet('nexum_usuarios') || []; }
function setUsuarios(list) { storageSet('nexum_usuarios', list); }

function getUsuarioAtual() { return storageGet('nexum_usuario_atual'); }
function setUsuarioAtual(user) { storageSet('nexum_usuario_atual', user); }

function getAlugueis() { return storageGet('nexum_alugueis') || []; }
function setAlugueis(list) { storageSet('nexum_alugueis', list); }

function getEquipamentosEmpresa() { return storageGet('nexum_equipamentos_empresa') || []; }
function setEquipamentosEmpresa(list) { storageSet('nexum_equipamentos_empresa', list); }

function getEquipamentos() {
  return [
    ...EQUIPAMENTOS.map(eq => ({ ...eq, origem: 'catalogo', ownerEmail: null })),
    ...getEquipamentosEmpresa().map(normalizeEquipamentoEmpresa)
  ];
}

function normalizeEquipamentoEmpresa(eq) {
  return {
    id: eq.id,
    nome: eq.nome || 'Equipamento sem nome',
    categoria: eq.categoria || 'outros',
    desc: eq.desc || '',
    preco: Number(eq.preco) || 0,
    status: eq.status || 'disponivel',
    src: eq.src || 'images/escavadeira_hidraulica.jpeg',
    specs: eq.specs && typeof eq.specs === 'object' ? eq.specs : {},
    tags: Array.isArray(eq.tags) ? eq.tags : [],
    destaque: Boolean(eq.destaque),
    contato: eq.contato || {},
    ownerEmail: eq.ownerEmail || null,
    ownerName: eq.ownerName || '',
    origem: 'empresa',
    criadoEm: eq.criadoEm,
    atualizadoEm: eq.atualizadoEm
  };
}

function findEquipamentoById(id) {
  return getEquipamentos().find(eq => String(eq.id) === String(id));
}

function userCanEditEquipamento(eq, user = getUsuarioAtual()) {
  return Boolean(user && user.tipo === 'empresa' && eq?.ownerEmail === user.email);
}

function formatBRL(val) {
  return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function formatDate(iso) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(iso)) {
    const [year, month, day] = iso.split('-');
    return `${day}/${month}/${year}`;
  }

  return new Date(iso).toLocaleDateString('pt-BR');
}

function toISODateInput(value) {
  if (!value) return '';
  return new Date(value).toISOString().split('T')[0];
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }[char]));
}

function formatarTelefone(num) {
  const n = num.replace(/\D/g, '');
  if (n.length === 11) return `(${n.slice(0,2)}) ${n.slice(2,7)}-${n.slice(7)}`;
  if (n.length === 10) return `(${n.slice(0,2)}) ${n.slice(2,6)}-${n.slice(6)}`;
  return num;
}

/* ─── TOAST ─── */

function showToast(msg, type = 'info', duration = 3500) {
  let container = $('#toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = msg;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'slideInRight 0.3s ease reverse both';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

/* ─── NAVBAR ─── */

function initNavbar() {
  const navbar = $('#navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  const ham = $('.nav-hamburger');
  const mobileMenu = $('.nav-mobile');

  if (ham && mobileMenu) {
    ham.addEventListener('click', () => {
      ham.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
  }

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  $$('.nav-links a, .nav-mobile a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  updateNavUser();
}

function updateNavUser() {
  const user = getUsuarioAtual();
  const actionsEl = $('.nav-actions');
  if (!actionsEl) return;

  if (user) {
    const nome = user.nome || user.nomeEmpresa || 'Usuário';
    const inicial = nome.charAt(0).toUpperCase();
    actionsEl.innerHTML = `
      <div class="nav-user">
        <a href="painel.html" class="btn btn-ghost btn-sm">Painel</a>
        <div class="nav-avatar" title="${nome}">${inicial}</div>
        <button onclick="logout()" class="btn btn-ghost btn-sm">Sair</button>
      </div>
    `;
  } else {
    actionsEl.innerHTML = `
      <a href="login.html" class="btn btn-ghost btn-sm">Login</a>
      <a href="cadastro.html" class="btn btn-primary btn-sm">Cadastrar</a>
    `;
  }
}

function logout() {
  setUsuarioAtual(null);
  showToast('Você saiu da conta.', 'info');
  setTimeout(() => window.location.href = 'index.html', 800);
}

/* ─── LOADING ─── */

function initLoading() {
  const el = $('#loading');
  if (!el) return;
  setTimeout(() => el.classList.add('hidden'), 1200);
}

/* ─── SCROLL REVEAL ─── */

function initReveal() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  $$('.reveal').forEach(el => observer.observe(el));
}

/* ─── CARD DE EQUIPAMENTO ─── */


/* ═══════════════════════════════════════════
   HOME — index.html
   ═══════════════════════════════════════════ */

function initHome() {
  const grid = $('#destaque-grid');
  if (!grid) return;

  const destaques = getEquipamentos().filter(e => e.destaque).slice(0, 4);
  destaques.forEach((eq, i) => {
    grid.appendChild(criarCardEquipamento(eq, i * 80));
  });

  animateNumbers();
}

function animateNumbers() {
  $$('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    let current = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current.toLocaleString('pt-BR') + (el.dataset.suffix || '');
      if (current >= target) clearInterval(timer);
    }, 24);
  });
}

/* ═══════════════════════════════════════════
   EQUIPAMENTOS — equipamentos.html
   ═══════════════════════════════════════════ */

let filtroAtual = 'todos';
let buscaAtual = '';

function initEquipamentos() {
  const grid = $('#equip-grid');
  if (!grid) return;

  $$('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filtroAtual = btn.dataset.cat;
      renderEquipamentos();
    });
  });

  const searchInput = $('#equip-search');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      buscaAtual = e.target.value.toLowerCase();
      renderEquipamentos();
    });
  }

  renderEquipamentos();
}

function renderEquipamentos() {
  const grid = $('#equip-grid');
  if (!grid) return;

  let lista = getEquipamentos();

  if (filtroAtual !== 'todos') {
    lista = lista.filter(e => e.categoria === filtroAtual);
  }

  if (buscaAtual) {
    lista = lista.filter(e =>
      e.nome.toLowerCase().includes(buscaAtual) ||
      e.desc.toLowerCase().includes(buscaAtual) ||
      e.categoria.toLowerCase().includes(buscaAtual)
    );
  }

  grid.innerHTML = '';

  if (lista.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <div class="icon">🔍</div>
        <p class="title">Nenhum equipamento encontrado</p>
        <p class="desc">Tente outra busca ou categoria</p>
      </div>
    `;
    return;
  }

  lista.forEach((eq, i) => {
    grid.appendChild(criarCardEquipamento(eq, i * 60));
  });
}

/* ═══════════════════════════════════════════
   DETALHES — detalhes.html
   ═══════════════════════════════════════════ */

function initDetalhes() {
  const container = $('#detalhe-container');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const eq = findEquipamentoById(id);

  if (!eq) {
    container.innerHTML = `
      <div class="empty-state" style="padding:120px 0">
        <div class="icon">😕</div>
        <p class="title">Equipamento não encontrado</p>
        <p class="desc"><a href="equipamentos.html" style="color:var(--orange)">Voltar aos equipamentos</a></p>
      </div>
    `;
    return;
  }

  document.title = `${eq.nome} — Nexum`;

  const disponivel = eq.status === 'disponivel';
  const detalheSafeId = String(eq.id).replace(/\\/g, '\\\\').replace(/'/g, "\\'");

  container.innerHTML = `
    <div class="breadcrumb">
      <a href="index.html">Home</a>
      <span class="sep">/</span>
      <a href="equipamentos.html">Equipamentos</a>
      <span class="sep">/</span>
      <span>${eq.nome}</span>
    </div>

    <div class="detail-grid">
      <div>
        <img src="${eq.src}">
      </div>
      <div class="detail-info">
        <p class="detail-category">${eq.categoria}</p>
        <h1 class="detail-name">${eq.nome}</h1>
        <div>
          <span class="status-badge ${disponivel ? 'status-available' : 'status-unavailable'}">
            ${disponivel ? '✓ Disponível' : '✗ Indisponível'}
          </span>
        </div>

        <div style="margin: 24px 0;">
          <div class="detail-price">${formatBRL(eq.preco)} <small>/ dia</small></div>
        </div>

        <p class="detail-desc">${eq.desc}</p>

        <div class="detail-specs">
          ${Object.entries(eq.specs).map(([k, v]) => `
            <div class="spec-item">
              <div class="spec-label">${k.replace('_', ' ')}</div>
              <div class="spec-val">${v}</div>
            </div>
          `).join('')}
        </div>

        <div class="detail-actions">
          ${disponivel
            ? `<button onclick="solicitarAluguel('${detalheSafeId}')" class="btn btn-primary btn-lg">
                 🔑 Solicitar Aluguel
               </button>`
            : `<button class="btn btn-ghost btn-lg" disabled style="opacity:.5;cursor:not-allowed">
                 Indisponível no momento
               </button>`
          }
          <a href="equipamentos.html" class="btn btn-outline btn-lg">← Voltar</a>
        </div>

        <div style="margin-top:24px; display:flex; gap:10px; flex-wrap:wrap;">
          ${eq.tags.map(t => `<span style="
            background:rgba(255,255,255,0.05);
            border:1px solid rgba(255,255,255,0.08);
            border-radius:100px;
            padding:4px 12px;
            font-size:0.75rem;
            color:var(--gray-400);
          ">#${t}</span>`).join('')}
        </div>

        ${eq.contato ? `
        <div class="contato-vendedor">
          <h3 class="contato-titulo">📋 Contato do Vendedor</h3>
          <div class="contato-grid">
            <a class="contato-item" href="https://wa.me/55${eq.contato.whatsapp}" target="_blank">
              <span class="contato-icon">💬</span>
              <div>
                <p class="contato-label">WhatsApp</p>
                <p class="contato-value">${formatarTelefone(eq.contato.whatsapp)}</p>
              </div>
            </a>
            <a class="contato-item" href="mailto:${eq.contato.email}">
              <span class="contato-icon">✉️</span>
              <div>
                <p class="contato-label">E-mail</p>
                <p class="contato-value">${eq.contato.email}</p>
              </div>
            </a>
            <div class="contato-item contato-endereco">
              <span class="contato-icon">📍</span>
              <div>
                <p class="contato-label">Endereço</p>
                <p class="contato-value">${eq.contato.endereco}</p>
              </div>
            </div>
          </div>
        </div>
        ` : ''}
      </div>
    </div>
  `;
}

function solicitarAluguel(id) {
  const user = getUsuarioAtual();
  if (!user) {
    showToast('Faça login para solicitar um aluguel.', 'error');
    setTimeout(() => window.location.href = 'login.html', 1000);
    return;
  }

  openModalAluguel(id);
}

function openModalAluguel(id) {
  const eq = findEquipamentoById(id);
  if (!eq) return;
  const safeId = String(eq.id).replace(/\\/g, '\\\\').replace(/'/g, "\\'");

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal" style="position:relative">
      <div class="modal-header">
        <div>
          <p class="modal-title">Solicitar Aluguel</p>
          <p class="modal-sub">${eq.nome} — ${formatBRL(eq.preco)}/dia</p>
        </div>
        <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">✕</button>
      </div>

      <div class="form-group">
        <label class="form-label">Data de Início</label>
        <input type="date" id="modal-inicio" class="form-input" min="${new Date().toISOString().split('T')[0]}">
      </div>
      <div class="form-group">
        <label class="form-label">Data de Fim</label>
        <input type="date" id="modal-fim" class="form-input">
      </div>
      <div id="modal-total" style="
        background:rgba(242,101,34,0.08);
        border:1px solid rgba(242,101,34,0.2);
        border-radius:8px;
        padding:14px;
        margin-bottom:20px;
        font-size:0.88rem;
        color:var(--gray-200);
        display:none;
      "></div>
      <button onclick="confirmarAluguel('${safeId}')" class="btn btn-primary btn-full btn-lg">
        Confirmar Solicitação
      </button>
    </div>
  `;

  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('open'), 10);

  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.remove();
  });

  ['modal-inicio', 'modal-fim'].forEach(id => {
    document.getElementById(id)?.addEventListener('change', () => calcularTotal(eq.preco));
  });
}

function calcularTotal(precoDia) {
  const inicio = document.getElementById('modal-inicio')?.value;
  const fim = document.getElementById('modal-fim')?.value;
  const totalEl = document.getElementById('modal-total');
  if (!inicio || !fim || !totalEl) return;

  const dias = Math.ceil((new Date(fim) - new Date(inicio)) / 86400000);
  if (dias <= 0) {
    totalEl.style.display = 'none';
    return;
  }

  const total = dias * precoDia;
  totalEl.style.display = 'block';
  totalEl.innerHTML = `
    <span style="color:var(--gray-400)">Duração:</span> <strong style="color:var(--white)">${dias} dia${dias > 1 ? 's' : ''}</strong>
    &nbsp;&nbsp;|&nbsp;&nbsp;
    <span style="color:var(--gray-400)">Total estimado:</span> <strong style="color:var(--orange)">${formatBRL(total)}</strong>
  `;
}

function confirmarAluguel(id) {
  const inicio = document.getElementById('modal-inicio')?.value;
  const fim = document.getElementById('modal-fim')?.value;

  if (!inicio || !fim) {
    showToast('Selecione as datas de início e fim.', 'error');
    return;
  }

  if (new Date(fim) <= new Date(inicio)) {
    showToast('A data de fim deve ser após a de início.', 'error');
    return;
  }

  const user = getUsuarioAtual();
  const eq = EQUIPAMENTOS.find(e => e.id === id);
  const dias = Math.ceil((new Date(fim) - new Date(inicio)) / 86400000);
  const total = dias * eq.preco;

  const aluguel = {
    id: Date.now(),
    equipamentoId: eq.id,
    equipamentoNome: eq.nome,
    equipamentoImagem: eq.src,
    userEmail: user.email,
    inicio,
    fim,
    dias,
    total,
    status: 'ativo',
    criadoEm: new Date().toISOString()
  };

  const alugueis = getAlugueis();
  alugueis.push(aluguel);
  setAlugueis(alugueis);

  document.querySelector('.modal-overlay')?.remove();

  showToast(`✅ Aluguel solicitado com sucesso! Total: ${formatBRL(total)}`, 'success', 4000);
}

/* ═══════════════════════════════════════════
   LOGIN — login.html
   ═══════════════════════════════════════════ */

function openModalEditarAluguel(aluguelId) {
  const aluguel = getAlugueis().find(a => String(a.id) === String(aluguelId));
  if (!aluguel) {
    showToast('Aluguel nao encontrado.', 'error');
    return;
  }

  const eq = findEquipamentoById(aluguel.equipamentoId);
  const precoDia = eq?.preco || Math.round(aluguel.total / Math.max(aluguel.dias, 1));
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal" style="position:relative">
      <div class="modal-header">
        <div>
          <p class="modal-title">Editar Aluguel</p>
          <p class="modal-sub">${escapeHtml(aluguel.equipamentoNome)} - ${formatBRL(precoDia)}/dia</p>
        </div>
        <button class="modal-close" type="button" aria-label="Fechar" onclick="this.closest('.modal-overlay').remove()">x</button>
      </div>

      <div class="form-group">
        <label class="form-label">Data de Inicio</label>
        <input type="date" id="edit-aluguel-inicio" class="form-input" value="${toISODateInput(aluguel.inicio)}">
      </div>
      <div class="form-group">
        <label class="form-label">Data de Fim</label>
        <input type="date" id="edit-aluguel-fim" class="form-input" value="${toISODateInput(aluguel.fim)}">
      </div>
      <div id="edit-aluguel-total" class="modal-total"></div>
      <div class="modal-actions">
        <button type="button" class="btn btn-ghost btn-full" onclick="this.closest('.modal-overlay').remove()">Cancelar</button>
        <button type="button" class="btn btn-primary btn-full" onclick="salvarEdicaoAluguel(${aluguel.id})">Salvar Alteracoes</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('open'), 10);

  const updateTotal = () => atualizarTotalEdicaoAluguel(precoDia);
  ['edit-aluguel-inicio', 'edit-aluguel-fim'].forEach(id => {
    document.getElementById(id)?.addEventListener('change', updateTotal);
  });
  updateTotal();

  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.remove();
  });
}

function atualizarTotalEdicaoAluguel(precoDia) {
  const inicio = $('#edit-aluguel-inicio')?.value;
  const fim = $('#edit-aluguel-fim')?.value;
  const totalEl = $('#edit-aluguel-total');
  if (!inicio || !fim || !totalEl) return;

  const dias = Math.ceil((new Date(fim) - new Date(inicio)) / 86400000);
  if (dias <= 0) {
    totalEl.textContent = 'A data de fim deve ser depois da data de inicio.';
    totalEl.classList.add('error');
    return;
  }

  totalEl.classList.remove('error');
  totalEl.innerHTML = `
    <span>Duracao:</span> <strong>${dias} dia${dias > 1 ? 's' : ''}</strong>
    <span>Total:</span> <strong>${formatBRL(dias * precoDia)}</strong>
  `;
}

function salvarEdicaoAluguel(aluguelId) {
  const inicio = $('#edit-aluguel-inicio')?.value;
  const fim = $('#edit-aluguel-fim')?.value;

  if (!inicio || !fim) {
    showToast('Informe as datas do aluguel.', 'error');
    return;
  }

  if (new Date(fim) <= new Date(inicio)) {
    showToast('A data de fim deve ser apos a data de inicio.', 'error');
    return;
  }

  const alugueis = getAlugueis();
  const index = alugueis.findIndex(a => String(a.id) === String(aluguelId));
  if (index < 0) {
    showToast('Aluguel nao encontrado.', 'error');
    return;
  }

  const eq = findEquipamentoById(alugueis[index].equipamentoId);
  const precoDia = eq?.preco || Math.round(alugueis[index].total / Math.max(alugueis[index].dias, 1));
  const dias = Math.ceil((new Date(fim) - new Date(inicio)) / 86400000);

  alugueis[index] = {
    ...alugueis[index],
    inicio,
    fim,
    dias,
    total: dias * precoDia,
    atualizadoEm: new Date().toISOString()
  };

  setAlugueis(alugueis);
  document.querySelector('.modal-overlay')?.remove();
  showToast('Aluguel atualizado com sucesso.', 'success');
  renderPainelData();
}

function confirmarExclusaoAluguel(aluguelId) {
  const aluguel = getAlugueis().find(a => String(a.id) === String(aluguelId));
  if (!aluguel) {
    showToast('Aluguel nao encontrado.', 'error');
    return;
  }

  openConfirmModal({
    title: 'Excluir Aluguel',
    message: `Deseja excluir o aluguel de ${aluguel.equipamentoNome}? Esta acao nao pode ser desfeita.`,
    confirmText: 'Excluir',
    danger: true,
    onConfirm: () => excluirAluguel(aluguelId)
  });
}

function excluirAluguel(aluguelId) {
  const before = getAlugueis();
  const after = before.filter(a => String(a.id) !== String(aluguelId));
  if (after.length === before.length) {
    showToast('Aluguel nao encontrado.', 'error');
    return;
  }

  setAlugueis(after);
  showToast('Aluguel excluido com sucesso.', 'success');
  renderPainelData();
}

function openConfirmModal({ title, message, confirmText = 'Confirmar', danger = false, onConfirm }) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal modal-confirm" role="dialog" aria-modal="true" aria-labelledby="confirm-title">
      <div class="modal-header">
        <div>
          <p class="modal-title" id="confirm-title">${escapeHtml(title)}</p>
          <p class="modal-sub">${escapeHtml(message)}</p>
        </div>
        <button class="modal-close" type="button" aria-label="Fechar">x</button>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn btn-ghost btn-full" data-modal-cancel>Cancelar</button>
        <button type="button" class="btn ${danger ? 'btn-danger' : 'btn-primary'} btn-full" data-modal-confirm>${escapeHtml(confirmText)}</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('open'), 10);

  const close = () => overlay.remove();
  overlay.querySelector('.modal-close')?.addEventListener('click', close);
  overlay.querySelector('[data-modal-cancel]')?.addEventListener('click', close);
  overlay.querySelector('[data-modal-confirm]')?.addEventListener('click', () => {
    close();
    onConfirm?.();
  });
  overlay.addEventListener('click', e => {
    if (e.target === overlay) close();
  });
}

function initLogin() {
  const form = $('#login-form');
  if (!form) return;

  if (getUsuarioAtual()) {
    window.location.href = 'painel.html';
    return;
  }

  $$('.form-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      $$('.form-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    fazerLogin();
  });
}

function fazerLogin() {
  const email = $('#login-email');
  const senha = $('#login-senha');
  const alertEl = $('#login-alert');

  [email, senha].forEach(el => el.classList.remove('error'));
  alertEl.classList.remove('show', 'alert-error', 'alert-success');

  let valido = true;

  if (!validarEmail(email.value)) {
    email.classList.add('error');
    showFieldError('login-email-err', 'E-mail inválido');
    valido = false;
  }

  if (senha.value.length < 6) {
    senha.classList.add('error');
    showFieldError('login-senha-err', 'Senha deve ter ao menos 6 caracteres');
    valido = false;
  }

  if (!valido) return;

  const usuarios = getUsuarios();
  const user = usuarios.find(u => u.email === email.value && u.senha === senha.value);

  if (!user) {
    alertEl.textContent = '✕ E-mail ou senha incorretos.';
    alertEl.className = 'alert alert-error show';
    return;
  }

  setUsuarioAtual(user);
  alertEl.textContent = '✓ Login realizado! Redirecionando...';
  alertEl.className = 'alert alert-success show';

  setTimeout(() => window.location.href = 'painel.html', 1000);
}

/* ═══════════════════════════════════════════
   CADASTRO — cadastro.html
   ═══════════════════════════════════════════ */

let tipoCadastro = 'cliente';

function initCadastro() {
  const form = $('#cadastro-form');
  if (!form) return;

  if (getUsuarioAtual()) {
    window.location.href = 'painel.html';
    return;
  }

  $$('.form-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      $$('.form-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      tipoCadastro = tab.dataset.type;
      alternarCamposCadastro();
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    fazerCadastro();
  });

  alternarCamposCadastro();
}

function alternarCamposCadastro() {
  const camposCliente = $('#campos-cliente');
  const camposEmpresa = $('#campos-empresa');

  if (camposCliente) camposCliente.style.display = tipoCadastro === 'cliente' ? 'block' : 'none';
  if (camposEmpresa) camposEmpresa.style.display = tipoCadastro === 'empresa' ? 'block' : 'none';
}

function fazerCadastro() {
  const email = $('#cad-email');
  const senha = $('#cad-senha');
  const confirmSenha = $('#cad-confirma-senha');
  const alertEl = $('#cad-alert');

  $$('#cadastro-form .form-input').forEach(el => el.classList.remove('error'));
  $$('#cadastro-form .form-error').forEach(el => el.classList.remove('show'));
  alertEl.classList.remove('show');

  let valido = true;
  let userData = { tipo: tipoCadastro };

  if (tipoCadastro === 'cliente') {
    const nome = $('#cad-nome');
    if (!nome.value.trim() || nome.value.trim().length < 3) {
      nome.classList.add('error');
      showFieldError('cad-nome-err', 'Nome deve ter ao menos 3 caracteres');
      valido = false;
    } else {
      userData.nome = nome.value.trim();
    }
  } else {
    const nomeEmpresa = $('#cad-nome-empresa');
    const cnpj = $('#cad-cnpj');

    if (!nomeEmpresa.value.trim()) {
      nomeEmpresa.classList.add('error');
      showFieldError('cad-empresa-err', 'Nome da empresa obrigatório');
      valido = false;
    } else {
      userData.nomeEmpresa = nomeEmpresa.value.trim();
    }

    if (!validarCNPJ(cnpj.value)) {
      cnpj.classList.add('error');
      showFieldError('cad-cnpj-err', 'CNPJ inválido (formato: XX.XXX.XXX/XXXX-XX)');
      valido = false;
    } else {
      userData.cnpj = cnpj.value;
    }
  }

  if (!validarEmail(email.value)) {
    email.classList.add('error');
    showFieldError('cad-email-err', 'E-mail inválido');
    valido = false;
  }

  if (senha.value.length < 6) {
    senha.classList.add('error');
    showFieldError('cad-senha-err', 'Mínimo 6 caracteres');
    valido = false;
  }

  if (senha.value !== confirmSenha.value) {
    confirmSenha.classList.add('error');
    showFieldError('cad-confirma-err', 'As senhas não coincidem');
    valido = false;
  }

  if (!valido) return;

  const usuarios = getUsuarios();
  if (usuarios.find(u => u.email === email.value)) {
    alertEl.textContent = '✕ Este e-mail já está cadastrado.';
    alertEl.className = 'alert alert-error show';
    return;
  }

  userData.email = email.value;
  userData.senha = senha.value;
  userData.criadoEm = new Date().toISOString();
  userData.id = Date.now();

  usuarios.push(userData);
  setUsuarios(usuarios);
  setUsuarioAtual(userData);

  alertEl.textContent = '✓ Conta criada com sucesso! Redirecionando...';
  alertEl.className = 'alert alert-success show';

  setTimeout(() => window.location.href = 'painel.html', 1200);
}

/* ═══════════════════════════════════════════
   PAINEL — painel.html
   ═══════════════════════════════════════════ */

function initPainel() {
  const user = getUsuarioAtual();
  if (!user) {
    showToast('Faça login para acessar o painel.', 'error');
    setTimeout(() => window.location.href = 'login.html', 800);
    return;
  }

  const nome = user.nome || user.nomeEmpresa || 'Usuário';
  const inicial = nome.charAt(0).toUpperCase();

  setEl('#dash-avatar', inicial);
  setEl('#dash-nome', nome);
  setEl('#dash-email', user.email);
  setEl('#dash-type', user.tipo === 'empresa' ? '🏢 Empresa' : '👤 Cliente');
  setEl('#dash-nome-info', nome);
  setEl('#dash-email-info', user.email);
  setEl('#dash-tipo-info', user.tipo === 'empresa' ? 'Empresa' : 'Cliente');
  setEl('#dash-membro-desde', formatDate(user.criadoEm));

  if (user.tipo === 'empresa') {
    const cnpjEl = $('#dash-cnpj-row');
    if (cnpjEl) { cnpjEl.style.display = 'flex'; }
    setEl('#dash-cnpj-info', user.cnpj || '—');
  }

  const meusAlugueis = getAlugueis().filter(a => a.userEmail === user.email);

  setEl('#dash-total-alugueis', meusAlugueis.length);
  const totalGasto = meusAlugueis.reduce((acc, a) => acc + a.total, 0);
  setEl('#dash-total-gasto', formatBRL(totalGasto));
  const ativos = meusAlugueis.filter(a => a.status === 'ativo').length;
  setEl('#dash-ativos', ativos);

  const listaEl = $('#dash-alugueis-lista');
  if (listaEl) {
    if (meusAlugueis.length === 0) {
      listaEl.innerHTML = `
        <div class="empty-state">
          <div class="icon">📦</div>
          <p class="title">Nenhum aluguel ainda</p>
          <p class="desc"><a href="equipamentos.html" style="color:var(--orange)">Explore nossos equipamentos</a></p>
        </div>
      `;
    } else {
      meusAlugueis.forEach(a => {
        const card = document.createElement('div');
        card.className = 'rental-card';
        card.innerHTML = `
          <div class="rental-icon"><img src=${a.equipamentoImagem}></div>
          <div class="rental-info">
            <p class="rental-name">${a.equipamentoNome}</p>
            <p class="rental-dates">📅 ${formatDate(a.inicio)} → ${formatDate(a.fim)} (${a.dias} dia${a.dias > 1 ? 's' : ''})</p>
          </div>
          <div class="rental-status">
            <p class="rental-price">${formatBRL(a.total)}</p>
            <span class="status-badge status-available">Ativo</span>
          </div>
        `;
        listaEl.appendChild(card);
      });
    }
  }

  renderPainelData();

  $$('.dash-nav-item').forEach(item => {
    item.addEventListener('click', () => {
      $$('.dash-nav-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      const target = item.dataset.section;
      $$('.dash-section').forEach(s => s.classList.remove('active'));
      const section = $(`#dash-${target}`);
      if (section) section.classList.add('active');
    });
  });
}

/* ─── HELPERS ─── */

function renderPainelData() {
  const user = getUsuarioAtual();
  if (!user) return;

  const nome = user.nome || user.nomeEmpresa || 'Usuario';
  const inicial = nome.charAt(0).toUpperCase();

  setEl('#dash-avatar', inicial);
  setEl('#dash-avatar-perfil', inicial);
  setEl('#dash-nome', nome);
  setEl('#dash-nome-perfil-header', nome);
  setEl('#dash-email', user.email);
  setEl('#dash-email-perfil', user.email);
  setEl('#dash-type', user.tipo === 'empresa' ? 'Empresa' : 'Cliente');
  setEl('#dash-nome-info', nome);
  setEl('#dash-email-info', user.email);
  setEl('#dash-tipo-info', user.tipo === 'empresa' ? 'Empresa' : 'Cliente');
  setEl('#dash-membro-desde', user.criadoEm ? formatDate(user.criadoEm) : '-');

  const cnpjEl = $('#dash-cnpj-row');
  if (cnpjEl) cnpjEl.style.display = user.tipo === 'empresa' ? 'flex' : 'none';
  setEl('#dash-cnpj-info', user.cnpj || '-');

  const meusAlugueis = getAlugueis()
    .filter(a => a.userEmail === user.email)
    .sort((a, b) => new Date(b.criadoEm || b.inicio) - new Date(a.criadoEm || a.inicio));

  setEl('#dash-total-alugueis', meusAlugueis.length);
  setEl('#dash-total-gasto', formatBRL(meusAlugueis.reduce((acc, a) => acc + a.total, 0)));
  setEl('#dash-ativos', meusAlugueis.filter(a => a.status === 'ativo').length);

  renderRentalList('#dash-alugueis-lista', meusAlugueis.slice(0, 3), false);
  renderRentalList('#dash-alugueis-lista-full', meusAlugueis, true);
  renderEquipamentosEmpresaPainel(user);
}

function renderRentalList(selector, alugueis, showActions) {
  const listaEl = $(selector);
  if (!listaEl) return;

  listaEl.innerHTML = '';

  if (alugueis.length === 0) {
    listaEl.innerHTML = `
      <div class="empty-state">
        <div class="icon">📦</div>
        <p class="title">Nenhum aluguel ainda</p>
        <p class="desc"><a href="equipamentos.html" style="color:var(--orange)">Explore nossos equipamentos</a></p>
      </div>
    `;
    return;
  }

  alugueis.forEach(a => {
    const card = document.createElement('div');
    card.className = 'rental-card';
    card.innerHTML = `
      <div class="rental-icon"><img src="${escapeHtml(a.equipamentoImagem)}" alt=""></div>
      <div class="rental-info">
        <p class="rental-name">${escapeHtml(a.equipamentoNome)}</p>
        <p class="rental-dates">📅 ${formatDate(a.inicio)} → ${formatDate(a.fim)} (${a.dias} dia${a.dias > 1 ? 's' : ''})</p>
      </div>
      <div class="rental-status">
        <p class="rental-price">${formatBRL(a.total)}</p>
        <span class="status-badge status-available">Ativo</span>
      </div>
      ${showActions ? `
        <div class="rental-actions">
          <button type="button" class="btn btn-ghost btn-sm" onclick="openModalEditarAluguel(${a.id})">Editar</button>
          <button type="button" class="btn btn-danger btn-sm" onclick="confirmarExclusaoAluguel(${a.id})">Excluir</button>
        </div>
      ` : ''}
    `;
    listaEl.appendChild(card);
  });
}

function setEl(sel, val) {
  const el = $(sel);
  if (el) el.textContent = val;
}

function showFieldError(id, msg) {
  const el = document.getElementById(id);
  if (el) { el.textContent = msg; el.classList.add('show'); }
}

function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validarCNPJ(cnpj) {
  return /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/.test(cnpj);
}

function formatarCNPJ(input) {
  let v = input.value.replace(/\D/g, '');
  v = v.replace(/^(\d{2})(\d)/, '$1.$2');
  v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
  v = v.replace(/\.(\d{3})(\d)/, '.$1/$2');
  v = v.replace(/(\d{4})(\d)/, '$1-$2');
  input.value = v.slice(0, 18);
}

/* ─── INIT GERAL ─── */

document.addEventListener('DOMContentLoaded', () => {
  initLoading();
  initNavbar();
  initReveal();

  const page = window.location.pathname.split('/').pop();

  if (!page || page === 'index.html') initHome();
  else if (page === 'equipamentos.html') initEquipamentos();
  else if (page === 'detalhes.html') initDetalhes();
  else if (page === 'login.html') initLogin();
  else if (page === 'cadastro.html') initCadastro();
  else if (page === 'painel.html') initPainel();

  document.body.classList.add('page-enter');
});

/* ═══════════════════════════════════════════
   PERFIL — painel.html
   ═══════════════════════════════════════════ */

const STORAGE_KEY = 'meuPerfil';

function getPerfilStorageKey(user = getUsuarioAtual()) {
  return user?.email ? `${STORAGE_KEY}_${user.email}` : STORAGE_KEY;
}

function loadState() {
  const user = getUsuarioAtual();
  const saved = storageGet(getPerfilStorageKey(user));

  return {
    nome:      saved?.nome      || user?.nome || user?.nomeEmpresa || '',
    sobrenome: saved?.sobrenome || '',
    email:     user?.email      || '',
    telefone:  saved?.telefone  || '',
    cidade:    saved?.cidade    || '',
    estado:    saved?.estado    || ''
  };
}

function savePerfilState(s) {
  const user = getUsuarioAtual();
  storageSet(getPerfilStorageKey(user), s);

  if (!user) return;

  const nomeCompleto = (s.nome + (s.sobrenome ? ` ${s.sobrenome}` : '')).trim();
  const updatedUser = {
    ...user,
    nome: user.tipo === 'empresa' ? user.nome : nomeCompleto,
    nomeEmpresa: user.tipo === 'empresa' ? nomeCompleto : user.nomeEmpresa,
    telefone: s.telefone,
    cidade: s.cidade,
    estado: s.estado
  };

  setUsuarioAtual(updatedUser);
  setUsuarios(getUsuarios().map(u => u.email === user.email ? updatedUser : u));
}

function renderView(s) {
  const full = (s.nome + ' ' + s.sobrenome).trim();
  const loc  = [s.cidade, s.estado].filter(Boolean).join(' / ') || '—';

  document.getElementById('vNome').textContent     = full;
  document.getElementById('vEmail').textContent    = s.email;
  document.getElementById('vTelefone').textContent = s.telefone || '—';
  document.getElementById('vCidade').textContent   = loc;

  const sideName  = document.getElementById('sideName');
  const sideEmail = document.getElementById('sideEmail');
  if (sideName)  sideName.textContent  = full;
  if (sideEmail) sideEmail.textContent = s.email;
}

function openEdit(s) {
  document.getElementById('fNome').value      = s.nome;
  document.getElementById('fSobrenome').value = s.sobrenome;
  document.getElementById('fEmail').value     = s.email;
  document.getElementById('fTelefone').value  = s.telefone;
  document.getElementById('fCidade').value    = s.cidade;
  document.getElementById('fEstado').value    = s.estado;

  document.getElementById('viewMode').style.display = 'none';
  document.getElementById('editForm').classList.add('show');
  document.getElementById('btnEdit').style.display  = 'none';
}

function closeEdit() {
  document.getElementById('viewMode').style.display = 'grid';
  document.getElementById('editForm').classList.remove('show');
  document.getElementById('btnEdit').style.display  = '';
}

function showPerfilToast() {
  const t = document.getElementById('toast');
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

if (document.getElementById('btnEdit')) {
  let perfilState = loadState();
  renderView(perfilState);

  document.getElementById('btnEdit').addEventListener('click', () => openEdit(perfilState));
  document.getElementById('btnCancel').addEventListener('click', closeEdit);
  document.getElementById('btnSave').addEventListener('click', () => {
    perfilState.nome      = document.getElementById('fNome').value.trim() || perfilState.nome;
    perfilState.sobrenome = document.getElementById('fSobrenome').value.trim();
    perfilState.telefone  = document.getElementById('fTelefone').value.trim();
    perfilState.cidade    = document.getElementById('fCidade').value.trim();
    perfilState.estado    = document.getElementById('fEstado').value;

    savePerfilState(perfilState);
    renderView(perfilState);
    renderPainelData();
    updateNavUser();
    closeEdit();
    showToast('Perfil salvo com sucesso.', 'success');
  });
}

/* CRUD de equipamentos das empresas */

function criarCardEquipamento(eq, delay = 0) {
  const disponivel = eq.status === 'disponivel';
  const canEdit = userCanEditEquipamento(eq);
  const safeId = String(eq.id).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  const card = document.createElement('div');
  card.className = 'equip-card';
  card.style.animationDelay = `${delay}ms`;
  card.innerHTML = `
    <div class="equip-card-img"><img src="${escapeHtml(eq.src)}" alt="${escapeHtml(eq.nome)}"></div>
    <div class="equip-card-body">
      <span class="equip-card-category">${escapeHtml(eq.categoria)}</span>
      <h3 class="equip-card-name">${escapeHtml(eq.nome)}</h3>
      <p class="equip-card-desc">${escapeHtml(eq.desc.substring(0, 90))}...</p>
      <div class="equip-card-footer">
        <div class="equip-card-price">
          ${formatBRL(eq.preco)} <small>/ dia</small>
        </div>
        <span class="status-badge ${disponivel ? 'status-available' : 'status-unavailable'}">
          ${disponivel ? 'Disponivel' : 'Indisponivel'}
        </span>
      </div>
      <div class="equip-card-actions">
        <a href="detalhes.html?id=${encodeURIComponent(eq.id)}" class="btn btn-outline btn-sm">Ver Detalhes</a>
        ${canEdit ? `<button type="button" class="btn btn-ghost btn-sm" onclick="openModalEquipamento('${safeId}')">Editar</button>` : ''}
      </div>
    </div>
  `;
  return card;
}

function renderEquipamentosEmpresaPainel(user = getUsuarioAtual()) {
  const isEmpresa = user?.tipo === 'empresa';

  $$('.dash-company-only').forEach(el => {
    el.style.display = isEmpresa ? 'flex' : 'none';
  });

  const listaEl = $('#dash-equipamentos-lista');
  if (!listaEl) return;

  if (!isEmpresa) {
    listaEl.innerHTML = '';
    return;
  }

  const equipamentos = getEquipamentosEmpresa()
    .map(normalizeEquipamentoEmpresa)
    .filter(eq => eq.ownerEmail === user.email)
    .sort((a, b) => new Date(b.atualizadoEm || b.criadoEm || 0) - new Date(a.atualizadoEm || a.criadoEm || 0));

  if (equipamentos.length === 0) {
    listaEl.innerHTML = `
      <div class="empty-state">
        <div class="icon">+</div>
        <p class="title">Nenhum equipamento cadastrado</p>
        <p class="desc">Cadastre o primeiro equipamento da sua empresa.</p>
        <button type="button" class="btn btn-primary" onclick="openModalEquipamento()">Novo Equipamento</button>
      </div>
    `;
    return;
  }

  listaEl.innerHTML = '';
  equipamentos.forEach(eq => {
    const card = document.createElement('div');
    card.className = 'company-equipment-card';
    card.innerHTML = `
      <div class="company-equipment-img"><img src="${escapeHtml(eq.src)}" alt="${escapeHtml(eq.nome)}"></div>
      <div class="company-equipment-info">
        <p class="rental-name">${escapeHtml(eq.nome)}</p>
        <p class="rental-dates">${escapeHtml(eq.categoria)} - ${formatBRL(eq.preco)}/dia</p>
        <span class="status-badge ${eq.status === 'disponivel' ? 'status-available' : 'status-unavailable'}">
          ${eq.status === 'disponivel' ? 'Disponivel' : 'Indisponivel'}
        </span>
      </div>
      <div class="rental-actions">
        <a class="btn btn-outline btn-sm" href="detalhes.html?id=${encodeURIComponent(eq.id)}">Ver</a>
        <button type="button" class="btn btn-ghost btn-sm" onclick="openModalEquipamento('${String(eq.id).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}')">Editar</button>
        <button type="button" class="btn btn-danger btn-sm" onclick="confirmarExclusaoEquipamento('${String(eq.id).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}')">Excluir</button>
      </div>
    `;
    listaEl.appendChild(card);
  });
}

function openModalEquipamento(equipamentoId = null) {
  const user = getUsuarioAtual();
  if (!user || user.tipo !== 'empresa') {
    showToast('Apenas contas empresa podem cadastrar ou editar equipamentos.', 'error');
    return;
  }

  const equipamento = equipamentoId ? findEquipamentoById(equipamentoId) : null;
  if (equipamentoId && !userCanEditEquipamento(equipamento, user)) {
    showToast('Voce nao tem permissao para editar este equipamento.', 'error');
    return;
  }

  const isEdit = Boolean(equipamento);
  const specsText = isEdit
    ? Object.entries(equipamento.specs || {}).map(([key, value]) => `${key}: ${value}`).join('\n')
    : '';

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal modal-equipment" role="dialog" aria-modal="true" aria-labelledby="equipment-modal-title">
      <div class="modal-header">
        <div>
          <p class="modal-title" id="equipment-modal-title">${isEdit ? 'Editar Equipamento' : 'Novo Equipamento'}</p>
          <p class="modal-sub">${isEdit ? 'Atualize os dados sem criar um novo registro.' : 'Cadastre um equipamento para aparecer no catalogo.'}</p>
        </div>
        <button class="modal-close" type="button" aria-label="Fechar">x</button>
      </div>

      <form id="equipamento-form" class="equipment-form">
        <input type="hidden" id="equip-id" value="${isEdit ? escapeHtml(equipamento.id) : ''}">

        <div class="form-row">
          <div class="form-group">
            <label class="form-label" for="equip-nome">Nome</label>
            <input class="form-input" id="equip-nome" type="text" value="${isEdit ? escapeHtml(equipamento.nome) : ''}" required>
          </div>
          <div class="form-group">
            <label class="form-label" for="equip-categoria">Categoria</label>
            <select class="form-input" id="equip-categoria">
              ${CATEGORIAS.filter(c => c.id !== 'todos').map(c => `
                <option value="${c.id}" ${isEdit && equipamento.categoria === c.id ? 'selected' : ''}>${c.label}</option>
              `).join('')}
              <option value="outros" ${isEdit && equipamento.categoria === 'outros' ? 'selected' : ''}>Outros</option>
            </select>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <div class="form-row">

<div class="form-group">
<label class="form-label" for="equip-preco-dia">
Preco por dia
</label>

<input
class="form-input"
id="equip-preco-dia"
type="number"
min="1"
step="1"
placeholder="Diaria">
</div>

<div class="form-row">

  <div class="form-group">
    <label class="form-label" for="equip-preco-dia">
      Preço por dia
    </label>

    <input
      class="form-input"
      id="equip-preco-dia"
      type="number"
      min="1"
      step="1"
      placeholder="Diária">
  </div>

  <div class="form-group">
    <label class="form-label" for="equip-preco-semana">
      Preço semanal
    </label>

    <input
      class="form-input"
      id="equip-preco-semana"
      type="number"
      min="1"
      step="1"
      placeholder="Semanal">
  </div>

  <div class="form-group">
    <label class="form-label" for="equip-preco-mes">
      Preço mensal
    </label>

    <input
      class="form-input"
      id="equip-preco-mes"
      type="number"
      min="1"
      step="1"
      placeholder="Mensal">
  </div>

</div>

</div>
          <div class="form-group">
            <label class="form-label" for="equip-status">Status</label>
            <select class="form-input" id="equip-status">
              <option value="disponivel" ${!isEdit || equipamento.status === 'disponivel' ? 'selected' : ''}>Disponivel</option>
              <option value="indisponivel" ${isEdit && equipamento.status === 'indisponivel' ? 'selected' : ''}>Indisponivel</option>
            </select>
          </div>
        </div>

        <div class="form-group">
  <label class="form-label" for="equip-images">
    Imagens do Equipamento
  </label>

  <input
    class="form-input"
    id="equip-images"
    type="file"
    accept="image/*"
    multiple
  >

  <div id="preview-images" style="
    display:flex;
    gap:10px;
    flex-wrap:wrap;
    margin-top:15px;
  "></div>

        </div>

        <div class="form-group">
          <label class="form-label" for="equip-desc">Descricao</label>
          <textarea class="form-input" id="equip-desc" rows="4" required>${isEdit ? escapeHtml(equipamento.desc) : ''}</textarea>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label" for="equip-tags">Tags</label>
            <input class="form-input" id="equip-tags" type="text" value="${isEdit ? escapeHtml((equipamento.tags || []).join(', ')) : ''}" placeholder="obra, compactacao">
          </div>
          <div class="form-group">
            <label class="form-label" for="equip-whatsapp">WhatsApp</label>
            <input class="form-input" id="equip-whatsapp" type="text" value="${isEdit ? escapeHtml(equipamento.contato?.whatsapp || '') : ''}" placeholder="65999990000">
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="equip-specs">Especificacoes</label>
          <textarea class="form-input" id="equip-specs" rows="3" placeholder="peso: 22 ton&#10;potencia: 220 CV">${escapeHtml(specsText)}</textarea>
        </div>

        <div class="modal-actions">
          <button type="button" class="btn btn-ghost btn-full" data-modal-cancel>Cancelar</button>
          <button type="submit" class="btn btn-primary btn-full">${isEdit ? 'Salvar Alteracoes' : 'Cadastrar'}</button>
        </div>
      </form>
    </div>
  `;

  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('open'), 10);

  const close = () => overlay.remove();
  overlay.querySelector('.modal-close')?.addEventListener('click', close);
  overlay.querySelector('[data-modal-cancel]')?.addEventListener('click', close);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) close();
  });
  overlay.querySelector('#equipamento-form')?.addEventListener('submit', e => {
    e.preventDefault();
    salvarEquipamentoEmpresa();
  });
}

function salvarEquipamentoEmpresa() {
  const user = getUsuarioAtual();
  if (!user || user.tipo !== 'empresa') {
    showToast('Apenas contas empresa podem salvar equipamentos.', 'error');
    return;
  }

  const id = $('#equip-id')?.value.trim();
  const nome = $('#equip-nome')?.value.trim();
  const categoria = $('#equip-categoria')?.value;
  const preco = Number($('#equip-preco')?.value);
  const status = $('#equip-status')?.value;
  const src = $('#equip-imagem')?.value.trim() || 'images/escavadeira_hidraulica.jpeg';
  const desc = $('#equip-desc')?.value.trim();
  const tags = ($('#equip-tags')?.value || '').split(',').map(tag => tag.trim()).filter(Boolean);
  const specs = parseSpecs($('#equip-specs')?.value || '');
  const whatsapp = $('#equip-whatsapp')?.value.replace(/\D/g, '');

  if (!nome || !categoria || !desc || !preco || preco <= 0) {
    showToast('Preencha nome, categoria, descricao e preco valido.', 'error');
    return;
  }

  const equipamentos = getEquipamentosEmpresa().map(normalizeEquipamentoEmpresa);
  const index = id ? equipamentos.findIndex(eq => String(eq.id) === String(id)) : -1;

  if (id && index < 0) {
    showToast('Equipamento nao encontrado para edicao.', 'error');
    return;
  }

  if (id && equipamentos[index].ownerEmail !== user.email) {
    showToast('Voce nao tem permissao para editar este equipamento.', 'error');
    return;
  }

  const now = new Date().toISOString();
  const payload = {
    ...(index >= 0 ? equipamentos[index] : {}),
    id: id || `emp_${Date.now()}`,
    nome,
    categoria,
    desc,
    preco,
    status,
    src,
    specs,
    tags,
    destaque: false,
    contato: {
      whatsapp,
      email: user.email,
      endereco: user.cidade && user.estado ? `${user.cidade} - ${user.estado}` : ''
    },
    ownerEmail: user.email,
    ownerName: user.nomeEmpresa || user.nome || 'Empresa',
    criadoEm: index >= 0 ? equipamentos[index].criadoEm : now,
    atualizadoEm: now
  };

  if (index >= 0) {
    equipamentos[index] = payload;
  } else {
    equipamentos.push(payload);
  }

  setEquipamentosEmpresa(equipamentos);
  document.querySelector('.modal-overlay')?.remove();
  renderEquipamentosEmpresaPainel(user);
  if ($('#equip-grid')) renderEquipamentos();
  showToast(index >= 0 ? 'Equipamento atualizado com sucesso.' : 'Equipamento cadastrado com sucesso.', 'success');
}

function parseSpecs(value) {
  return value.split('\n').reduce((acc, line) => {
    const [rawKey, ...rest] = line.split(':');
    const key = rawKey?.trim();
    const val = rest.join(':').trim();
    if (key && val) acc[key] = val;
    return acc;
  }, {});
}

function confirmarExclusaoEquipamento(equipamentoId) {
  const equipamento = findEquipamentoById(equipamentoId);
  if (!userCanEditEquipamento(equipamento)) {
    showToast('Voce nao tem permissao para excluir este equipamento.', 'error');
    return;
  }

  openConfirmModal({
    title: 'Excluir Equipamento',
    message: `Deseja excluir ${equipamento.nome}? Esta acao nao pode ser desfeita.`,
    confirmText: 'Excluir',
    danger: true,
    onConfirm: () => excluirEquipamentoEmpresa(equipamentoId)
  });
}

function excluirEquipamentoEmpresa(equipamentoId) {
  const user = getUsuarioAtual();
  const equipamentos = getEquipamentosEmpresa();
  const equipamento = equipamentos.find(eq => String(eq.id) === String(equipamentoId));

  if (!equipamento || equipamento.ownerEmail !== user?.email) {
    showToast('Equipamento nao encontrado ou sem permissao.', 'error');
    return;
  }

  setEquipamentosEmpresa(equipamentos.filter(eq => String(eq.id) !== String(equipamentoId)));
  renderEquipamentosEmpresaPainel(user);
  if ($('#equip-grid')) renderEquipamentos();
  showToast('Equipamento excluido com sucesso.', 'success');
}
document.addEventListener("change", function(e){

  if(e.target && e.target.id === "equip-images"){

    const preview = document.getElementById("preview-images");

    if(!preview) return;

    preview.innerHTML = "";

    const arquivos = e.target.files;

    for(let i = 0; i < arquivos.length; i++){

      const reader = new FileReader();

      reader.onload = function(ev){

        const img = document.createElement("img");

        img.src = ev.target.result;

        img.style.width = "120px";
        img.style.height = "120px";
        img.style.objectFit = "cover";
        img.style.borderRadius = "10px";
        img.style.border = "1px solid #333";

        preview.appendChild(img);

      };

      reader.readAsDataURL(arquivos[i]);

    }

  }

});
