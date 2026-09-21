(function () {
  const BTL = window.BTL;
  const page = document.body.dataset.page || "";
  const root = page === "home" ? "" : "";

  const header = document.querySelector("[data-site-header]");
  if (header) {
    const links = [["home","index.html","Home"],["solutions","solutions.html","Solutions"],["oem","oem.html","OEM Custom"],["products","products.html","Products"],["about","about.html","About"],["contact","contact.html","Contact"]];
    header.innerHTML = `<a class="skip-link" href="#main">Skip to content</a><header class="site-header"><div class="container nav-wrap"><a class="brand" href="index.html" aria-label="Botley home"><span class="brand-mark">BTL</span><span class="brand-copy">BOTLEY<small>POWER PROTECTION</small></span></a><button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav">Menu</button><nav id="primary-nav" class="nav-links" aria-label="Primary navigation">${links.map(([id,href,label])=>`<a href="${href}" ${page===id?'aria-current="page"':''}>${label}</a>`).join("")}<a class="nav-cta" href="contact.html">Request a Quote</a></nav></div></header>`;
    const toggle = header.querySelector(".nav-toggle");
    const nav = header.querySelector(".nav-links");
    toggle.addEventListener("click", () => { const open = nav.classList.toggle("open"); toggle.setAttribute("aria-expanded", String(open)); });
  }

  const footer = document.querySelector("[data-site-footer]");
  if (footer) footer.innerHTML = `<section class="cta-band"><div class="container"><div><span class="eyebrow" style="color:#071628">Engineering support</span><h2>Have a power quality challenge?</h2></div><a class="btn btn-dark" href="contact.html">Discuss your application →</a></div></section><footer class="site-footer"><div class="container"><div class="footer-grid"><div><a class="brand" href="index.html"><span class="brand-mark">BTL</span><span class="brand-copy">BOTLEY<small>POWER PROTECTION</small></span></a><p>Industrial voltage regulation, conversion, backup power and power quality systems engineered in China for global applications.</p></div><div><h3>Products</h3><ul><li><a href="products.html">Voltage stabilizers</a></li><li><a href="products.html">Transformers</a></li><li><a href="products.html">UPS systems</a></li><li><a href="products.html">Power quality</a></li></ul></div><div><h3>Company</h3><ul><li><a href="oem.html">OEM customization</a></li><li><a href="about.html">About Botley</a></li><li><a href="solutions.html">Industries</a></li><li><a href="contact.html">Contact</a></li></ul></div><div><h3>Get in touch</h3><ul><li><a href="mailto:${BTL.contact.email}">${BTL.contact.email}</a></li><li><a href="tel:+8613817982518">${BTL.contact.phones[0]}</a></li><li><a href="tel:+8613795487950">${BTL.contact.phones[1]}</a></li></ul></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Shanghai Botley Machinery Co., Ltd.</span><span>上海博特利机械有限公司 · Shanghai, China</span></div></div></footer>`;

  function productCard(p) {
    return `<article class="product-card" data-category="${p.category}"><a href="product.html?product=${p.slug}" aria-label="View ${p.name}"><div class="product-media"><img src="${p.image}" alt="${p.name}" loading="lazy"></div><div class="product-body"><span class="product-tag">${p.category}</span><h3>${p.name}</h3><p>${p.short}</p><span class="text-link">View product →</span></div></a></article>`;
  }

  document.querySelectorAll("[data-products]").forEach(el => {
    const limit = Number(el.dataset.limit || BTL.products.length);
    el.innerHTML = BTL.products.slice(0, limit).map(productCard).join("");
  });

  const filters = document.querySelector("[data-product-filters]");
  if (filters) {
    const cats = ["All", ...new Set(BTL.products.map(p => p.category))];
    filters.innerHTML = cats.map((c,i)=>`<button type="button" class="filter-btn ${i===0?'active':''}" data-filter="${c}">${c}</button>`).join("");
    filters.addEventListener("click", e => {
      const btn = e.target.closest("button"); if (!btn) return;
      filters.querySelectorAll("button").forEach(b=>b.classList.remove("active")); btn.classList.add("active");
      document.querySelectorAll(".product-card").forEach(card => { card.hidden = btn.dataset.filter !== "All" && card.dataset.category !== btn.dataset.filter; });
    });
  }

  const detail = document.querySelector("[data-product-detail]");
  if (detail) {
    const slug = new URLSearchParams(location.search).get("product") || BTL.products[0].slug;
    const p = BTL.products.find(x=>x.slug===slug);
    if (!p) detail.innerHTML = `<div class="empty-state"><h1>Product not found</h1><p>The requested product is not available.</p><a class="btn btn-dark" href="products.html">Return to products</a></div>`;
    else {
      document.title = `${p.name} | Botley Power Protection`;
      const meta = document.querySelector('meta[name="description"]'); if (meta) meta.content = p.short;
      detail.innerHTML = `<section class="page-hero"><div class="container"><div class="breadcrumb"><a href="index.html">Home</a> / <a href="products.html">Products</a> / ${p.name}</div><span class="eyebrow">${p.category}</span><h1>${p.name}</h1><p>${p.short}</p></div></section><section class="section"><div class="container detail-layout"><figure class="detail-image"><img src="${p.image}" alt="${p.name}"><figcaption>Product image from Botley's existing catalog</figcaption></figure><div><span class="product-tag">${p.series}</span><h2>Engineered for dependable operation</h2><p>${p.description}</p><div class="spec-chips">${p.applications.map(x=>`<span class="spec-chip">${x}</span>`).join("")}</div><ul class="feature-list">${p.features.map(x=>`<li>${x}</li>`).join("")}</ul><div class="actions"><a class="btn btn-primary" href="contact.html?product=${p.slug}">Request a quote →</a><a class="btn btn-dark" href="mailto:${BTL.contact.email}?subject=${encodeURIComponent('Technical enquiry: '+p.name)}">Email engineering</a></div></div></div></section><section class="section section-soft"><div class="container"><div class="section-head"><div><span class="eyebrow">Reference specification</span><h2>Key technical data</h2><p>Final ratings and dimensions are confirmed against load, grid and environmental requirements.</p></div></div><table class="spec-table"><tbody>${Object.entries(p.specs).map(([k,v])=>`<tr><th scope="row">${k}</th><td>${v}</td></tr>`).join("")}</tbody></table><div class="panel" style="margin-top:28px"><h3>Configuration options</h3><p>${p.custom}</p></div></div></section>`;
    }
  }

  const form = document.querySelector("[data-inquiry-form]");
  if (form) {
    const productSelect = form.querySelector("[name=product]");
    productSelect.innerHTML += `<option value="OEM / Custom manufacturing" data-slug="oem">OEM / Custom manufacturing</option>`;
    productSelect.innerHTML += BTL.products.map(p=>`<option value="${p.name}" data-slug="${p.slug}">${p.name}</option>`).join("");
    const preselect = new URLSearchParams(location.search).get("product");
    if (preselect) { const option = [...productSelect.options].find(o=>o.dataset.slug===preselect); if (option) option.selected = true; }
    form.addEventListener("submit", e => {
      e.preventDefault();
      form.querySelectorAll(".form-error").forEach(x=>x.textContent="");
      let ok = true;
      [...form.elements].forEach(field => {
        if (field.required && !String(field.value).trim()) { const err = field.closest(".form-field")?.querySelector(".form-error"); if (err) err.textContent="This field is required."; ok=false; }
        if (field.type === "email" && field.value && !/^\S+@\S+\.\S+$/.test(field.value)) { field.closest(".form-field").querySelector(".form-error").textContent="Enter a valid email address."; ok=false; }
      });
      if (!ok) { form.querySelector(".form-error:not(:empty)")?.closest(".form-field")?.querySelector("input,select,textarea")?.focus(); return; }
      const data = new FormData(form);
      const lines = ["Hello Botley team,", "", "Please review the following project inquiry:", "", ...["name","company","country","email","product","capacity","power","message"].map(k=>`${k[0].toUpperCase()+k.slice(1)}: ${data.get(k)||'Not specified'}`), "", "Please reply with the information required for selection and quotation."];
      location.href = `mailto:${BTL.contact.email}?subject=${encodeURIComponent('Website inquiry - '+(data.get('product')||'Industrial power solution'))}&body=${encodeURIComponent(lines.join('\n'))}`;
    });
  }
})();
