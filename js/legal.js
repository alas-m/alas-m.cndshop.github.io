/* ============================================================
 * CND SHOP — legal identity (single source of truth)
 * Заполни реальные данные продавца ЗДЕСЬ — они подставятся
 * на страницах Terms / Privacy / Refunds автоматически.
 * Пустые поля оставляют плейсхолдер [fill in].
 * ВАЖНО: данные должны быть точными — это обязательное
 * раскрытие продавца (ČR: §5 zák. č. 480/2004 Sb.).
 * ============================================================ */
(function () {
  'use strict';

  var LEGAL = {
    brand: 'CND Shop',          // витрина
    operator: 'Malik Alasgar',  // продавец (физлицо)
    address: 'Hindlova 1040/7, Prague 9, Czech Republic',
    country: 'Czech Republic',  // режим права/потребителя, к которому адаптирован сайт
    ico: 'None — Seller is not a registered business (natural person)',
    vat: 'None — Seller is not a VAT payer',
    email: 'malikalasgar01@gmail.com',
    tg: '@cnddev',
    domain: 'TBD',              // GitHub Pages URL — будет добавлен позже
    host: 'GitHub Pages (GitHub, Inc.)'
  };

  /* подстановка в разметку: <span data-legal="operator"></span> */
  var els = document.querySelectorAll('[data-legal]');
  for (var i = 0; i < els.length; i++) {
    var key = els[i].getAttribute('data-legal');
    if (LEGAL[key]) els[i].textContent = LEGAL[key];
  }

  /* год в футере: [data-year] */
  var yearEls = document.querySelectorAll('[data-year]');
  for (var j = 0; j < yearEls.length; j++) {
    yearEls[j].textContent = String(new Date().getFullYear());
  }
})();
