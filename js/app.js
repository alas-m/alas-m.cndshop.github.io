/* ============================================================
 * CND SHOP — app logic
 * Рендер каталога из data.js, фильтры, TG-покупка, декор.
 * ============================================================ */
(function () {
  'use strict';

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  const TG = SHOP.tg;
  const CATS = ['ALL', ...Array.from(new Set(SHOP.products.map(p => p.cat)))];

  /* ---------- helpers ---------- */

  function tgLink(product, tier) {
    const price = tier ? tier.price : product.price;
    const tierSuffix = tier ? ' (' + tier.label + ')' : '';
    const msg = encodeURIComponent(
      'Hi! I want to buy **' + product.name + tierSuffix + '** — ' + price + ' from CND Shop. ' +
      'I consent to immediate digital delivery and I understand that this ends the 14-day ' +
      'EU withdrawal right once delivery has started.'
    );
    return 'https://t.me/' + TG.handle + '?text=' + msg;
  }

  function featList(items, cls) {
    return '<ul class="' + cls + '">' + items.map(f => '<li>' + f + '</li>').join('') + '</ul>';
  }

  function tierBlock(tier, product) {
    const isFree = !!tier.free;
    const href = isFree && tier.link ? tier.link : tgLink(product, tier);
    const cta = isFree ? 'Get free →' : 'Buy · ' + tier.price;
    const clone = isFree ? 'Open repo →' : 'Get ' + tier.label + ' →';

    return (
      '<div class="tier' + (tier.hot ? ' tier--hot' : '') + '">' +
        '<div class="tier-head">' +
          '<span class="tier-label">' + tier.label + '</span>' +
          (tier.hot ? '<span class="tier-tag">BEST VALUE</span>' : '') +
        '</div>' +
        '<div class="tier-price">' + tier.price + ' <span class="tier-note">' + tier.note + '</span></div>' +
        '<ul class="tier-feats">' + tier.feat.map(f => '<li>' + f + '</li>').join('') + '</ul>' +
        '<a class="btn ' + (isFree ? 'btn--ghost' : 'btn--accent') + '" href="' + href + '" target="_blank" rel="noopener"' + (isFree ? '' : ' data-tg') + ' aria-label="' + product.name + ' ' + tier.label + ': ' + tier.price + '">' +
          '<span class="btn-label">' + cta + '</span>' +
          '<span class="btn-label btn-label--clone" aria-hidden="true">' + clone + '</span>' +
        '</a>' +
      '</div>'
    );
  }

  function cardHTML(p) {
    const badges = '<span class="status-dot" aria-hidden="true"></span><span class="sr-only">Available</span>' +
      (p.badge ? '<span class="badge badge--hot">' + p.badge + '</span>' : '');

    const body = p.tiers
      ? '<div class="tiers">' + p.tiers.map(t => tierBlock(t, p)).join('') + '</div>'
      : '<ul class="card-feats">' + p.feat.map(f => '<li>' + f + '</li>').join('') + '</ul>';

    const foot = p.tiers
      ? ''
      : '<div class="card-foot">' +
          '<div class="price">' +
            '<span class="price-amount">' + p.price + '</span>' +
            '<span class="price-note">' + p.priceNote + '</span>' +
          '</div>' +
          '<a class="btn btn--accent btn--buy" href="' + tgLink(p) + '" target="_blank" rel="noopener" data-tg aria-label="Buy ' + p.name + ' — ' + p.price + '">' +
            '<span class="btn-label">Buy →</span>' +
            '<span class="btn-label btn-label--clone" aria-hidden="true">Buy →</span>' +
          '</a>' +
        '</div>';

    return (
      '<article class="card" data-cat="' + p.cat + '" data-reveal>' +
        '<div class="card-top">' +
          '<div class="card-glyph"><i class="fa-solid ' + p.icon + '" aria-hidden="true"></i></div>' +
          '<div class="card-badges">' + badges + '</div>' +
        '</div>' +
        '<div class="card-cat">' + p.cat + ' // PRODUCT</div>' +
        '<h3 class="card-name">' + p.name + '</h3>' +
        '<p class="card-tagline">' + p.tagline + '</p>' +
        '<p class="card-desc">' + p.desc + '</p>' +
        body +
        foot +
      '</article>'
    );
  }

  /* ---------- build: chips ---------- */
  const chipsWrap = $('#filters');
  CATS.forEach(cat => {
    const b = document.createElement('button');
    b.className = 'chip mono' + (cat === 'ALL' ? ' is-active' : '');
    b.dataset.cat = cat;
    b.setAttribute('type', 'button');
    b.setAttribute('aria-pressed', cat === 'ALL' ? 'true' : 'false');
    b.textContent = cat;
    chipsWrap.appendChild(b);
  });

  /* ---------- build: grid ---------- */
  const grid = $('#grid');
  const cards = SHOP.products.map(p => cardHTML(p)).join('');
  grid.innerHTML = cards;
  let cardEls = $$('.card', grid);

  /* ---------- filter ---------- */
  let activeCat = 'ALL';
  chipsWrap.addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (!chip || chip.dataset.cat === activeCat) return;
    activeCat = chip.dataset.cat;

    $$('.chip', chipsWrap).forEach(c => {
      const on = c === chip;
      c.classList.toggle('is-active', on);
      c.setAttribute('aria-pressed', on ? 'true' : 'false');
    });

    cardEls.forEach((card, i) => {
      const show = activeCat === 'ALL' || card.dataset.cat === activeCat;
      if (show) {
        card.classList.remove('is-hidden');
        card.style.animation = 'none';
        void card.offsetWidth; /* restart entrance */
        card.style.animation = '';
        card.style.animationDelay = Math.min(i * 45, 360) + 'ms';
      } else {
        card.classList.add('is-hidden');
      }
    });
  });

  /* ---------- build: services ---------- */
  function svcLink(svc) {
    const msg = encodeURIComponent(
      'Hi! I want to start a custom project: **' + svc.title + '** (CND Shop services).'
    );
    return 'https://t.me/' + TG.handle + '?text=' + msg;
  }

  function svcHTML(svc) {
    const rows = svc.items.map(it =>
      '<div class="svc-row">' +
        '<span class="svc-name">' + it.name + '</span>' +
        '<span class="svc-price mono">' + it.price + '</span>' +
      '</div>'
    ).join('');

    return (
      '<article class="svc-card" data-reveal>' +
        '<div class="svc-head">' +
          '<div class="svc-icon"><i class="fa-solid ' + svc.icon + '" aria-hidden="true"></i></div>' +
          '<div class="svc-heading">' +
            '<div class="svc-title">' + svc.title + '</div>' +
            '<div class="svc-tag mono">CUSTOM BUILD</div>' +
          '</div>' +
        '</div>' +
        '<p class="svc-desc">' + svc.desc + '</p>' +
        '<div class="svc-list">' + rows + '</div>' +
        '<div class="svc-foot">' +
          '<a class="btn btn--ghost btn--small" href="' + svcLink(svc) + '" target="_blank" rel="noopener" data-tg>' +
            '<span class="btn-label">Start a project →</span>' +
            '<span class="btn-label btn-label--clone" aria-hidden="true">Discuss @cnddev →</span>' +
          '</a>' +
        '</div>' +
      '</article>'
    );
  }

  const svcGrid = $('#services-grid');
  if (svcGrid) svcGrid.innerHTML = SHOP.services.map(svcHTML).join('');

  /* ---------- hero marquee ---------- */
  const track = $('#marquee-track');
  const names = SHOP.products.map(p => p.name.toUpperCase());
  const seq = names.concat(names); /* дубль для бесшовного цикла */
  track.innerHTML = seq.map(n => '<span>' + n + '</span>').join('');

  /* ---------- hero stats: счётчик продуктов ---------- */
  const statNum = $('#hero-stats .stat-num');
  if (statNum) {
    statNum.textContent = String(SHOP.products.length).padStart(2, '0');
  }

  /* ---------- reveal on scroll ---------- */
  const revealEls = $$('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-in'));
  }

  /* ---------- внешние TG-ссылки: пометка ---------- */
  $$('[data-tg]').forEach(a => a.setAttribute('aria-label', 'Open Telegram @' + TG.handle));
})();
