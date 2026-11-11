const WA = "201000000000"; // ← ضع رقم الواتساب هنا بصيغة دولية بدون +
const INFO = "📍 العنوان هنا · 📞 01000000000 · 🕒 يوميًا 10 ص – 2 ص";
const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/your-page",
  instagram: "https://www.instagram.com/your-page",
};
const U = (i) =>
  `https://images.unsplash.com/photo-${i}?auto=format&fit=crop&w=600&q=70`;
const I = {
  steak: "1544025162-d76694265947",
  burger: "1568901346375-23c9450c58cd",
  pizza: "1565299624946-b28f40a0ae38",
  pasta: "1473093295043-cdd812d0e601",
  salad: "1546069901-ba9599a7e63c",
  fish: "1467003909585-2f8a72700288",
  food: "1504674900247-0877df9cc836",
  coffee: "1495474472287-4d71bcdd2085",
  c2: "1509042239860-f550ce710b93",
  latte: "1541167760496-1628856ab772",
  donut: "1551024601-bec78aea704b",
  cake: "1578985545062-69928b1d9587",
};
const DATA = {
  restaurant: [
    {
      k: "مشويات",
      i: "🔥",
      items: [
        [
          "r1",
          "ستيك ريب آي",
          "قطعة ريب آي 300جم مع بطاطس وخضار سوتيه",
          350,
          "steak",
        ],
        [
          "r2",
          "مشاوي مشكلة",
          "كفتة وشيش طاووق وريش مع أرز وسلطات",
          290,
          "food",
        ],
        ["r3", "سمك مشوي", "فيليه سلمون مشوي مع صوص الليمون", 320, "fish"],
      ],
    },
    {
      k: "برجر",
      i: "🍔",
      items: [
        [
          "r4",
          "كلاسيك برجر",
          "180جم لحم بقري، جبنة شيدر، صوص خاص",
          160,
          "burger",
        ],
        [
          "r5",
          "دبل تشيز",
          "قطعتين لحم مع جبنة مضاعفة وبصل مكرمل",
          210,
          "burger",
        ],
        ["r6", "برجر دجاج مقرمش", "صدر دجاج مقرمش مع كولسلو", 150, "burger"],
      ],
    },
    {
      k: "بيتزا ومكرونة",
      i: "🍕",
      items: [
        ["r7", "بيتزا مارجريتا", "جبنة موتزاريلا وطماطم وريحان", 140, "pizza"],
        ["r8", "بيتزا بيبروني", "بيبروني حار مع جبنة مضاعفة", 170, "pizza"],
        ["r9", "باستا ألفريدو", "كريمة بالدجاج والمشروم", 155, "pasta"],
      ],
    },
    {
      k: "سلطات",
      i: "🥗",
      items: [
        ["r10", "سيزر سلطة", "خس، دجاج مشوي، بارميزان، كروتون", 110, "salad"],
        ["r11", "سلطة يونانية", "خيار، طماطم، زيتون، جبنة فيتا", 95, "salad"],
      ],
    },
  ],
  cafe: [
    {
      k: "قهوة ساخنة",
      i: "☕",
      items: [
        ["c1", "إسبريسو", "شوت مركّز من البن المحمص طازجًا", 55, "coffee"],
        ["c2", "كابتشينو", "إسبريسو مع رغوة حليب كريمية", 75, "c2"],
        ["c3", "فلات وايت", "إسبريسو دبل مع حليب مخملي", 85, "latte"],
      ],
    },
    {
      k: "مشروبات باردة",
      i: "🧊",
      items: [
        ["c4", "آيس لاتيه", "إسبريسو مع حليب بارد وثلج", 85, "latte"],
        ["c5", "كولد برو", "قهوة منقوعة 18 ساعة", 90, "coffee"],
        ["c6", "فرابتشينو كراميل", "مثلج مع كراميل وكريمة", 95, "c2"],
      ],
    },
    {
      k: "حلويات",
      i: "🍰",
      items: [
        ["c7", "تشيز كيك", "تشيز كيك نيويورك مع صوص التوت", 110, "cake"],
        ["c8", "براونيز", "شوكولاتة داكنة دافئة مع آيس كريم", 95, "cake"],
        ["c9", "دونات", "دونات طازجة بنكهات متعددة", 60, "donut"],
      ],
    },
  ],
};
const OFFERS = [
  { id: "r1", price: 299 },
  { id: "r4", price: 130 },
  { id: "r7", price: 115 },
  { id: "c2", price: 60 },
  { id: "c4", price: 68 },
  { id: "c7", price: 88 },
];
const $ = (s) => document.querySelector(s),
  P = document.body.dataset.page;
const get = () => JSON.parse(localStorage.getItem("qc") || "[]"),
  set = (c) => {
    localStorage.setItem("qc", JSON.stringify(c));
    count();
  };
const count = () => {
  const b = $(".bdg");
  if (b) b.textContent = get().reduce((a, x) => a + x.qty, 0);
};
const toast = (t) => {
  let e =
    $(".toast") ||
    document.body.appendChild(
      Object.assign(document.createElement("div"), { className: "toast" }),
    );
  e.textContent = t;
  e.classList.add("on");
  setTimeout(() => e.classList.remove("on"), 1600);
};
document.body.insertAdjacentHTML(
  "afterbegin",
  `<nav class="nav"><div class="nav-links"><a href="restaurant.html" class="${P == "restaurant" ? "on" : ""}">المطعم</a><a href="cafe.html" class="${P == "cafe" ? "on" : ""}">الكافيه</a><a href="offers.html" class="${P == "offers" ? "on" : ""}">العروض</a></div><a class="logo" href="index.html" aria-label="الصفحة الرئيسية"><img src="/queen/img/logo.jpeg" alt="Queen"></a><div class="nav-actions"><a class="cart-link ${P == "cart" ? "on" : ""}" href="cart.html"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h2l2.2 11.1a2 2 0 0 0 2 1.6h8.5a2 2 0 0 0 1.9-1.4L21 9H6"/><circle cx="10" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg><span>السلة</span><span class="bdg">0</span></a></div></nav>`,
);
document.body.insertAdjacentHTML(
  "beforeend",
  `<footer class="site-footer"><div class="footer-shell"><div class="footer-main"><section class="footer-brand"><a class="footer-wordmark" href="index.html">QUEEN<span>✦</span></a><p>مطعم وكافيه يجمع بين المذاق المميز واللحظات الجميلة.</p><div class="footer-info">${INFO}</div></section><section class="footer-follow"><h2>تابعونا على</h2><p>يسعدنا تواصلكم ومشاركة لحظاتكم معنا</p><div class="footer-socials"><a href="${SOCIAL_LINKS.facebook}" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8z"/></svg></a><a href="${SOCIAL_LINKS.instagram}" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle class="ig-dot" cx="17.7" cy="6.8" r="1"/></svg></a></div></section></div><div class="footer-bottom"><span class="footer-copy">© ${new Date().getFullYear()} Queen · جميع الحقوق محفوظة</span><div class="footer-credit"><span class="credit-mark">RC</span><span><small>تصميم وتطوير</small><strong>Rief Code</strong></span></div></div></div></footer>`,
);
count();
document.addEventListener("mousemove", (e) => {
  const t = e.target.closest(".tilt,.card");
  document.querySelectorAll(".tilt,.card").forEach((x) => {
    if (x !== t) x.style.transform = "";
  });
  if (!t) return;
  const r = t.getBoundingClientRect(),
    x = (e.clientX - r.left) / r.width - 0.5,
    y = (e.clientY - r.top) / r.height - 0.5,
    k = t.classList.contains("tilt") ? 24 : 14;
  t.style.transform = `perspective(800px) rotateY(${x * k}deg) rotateX(${-y * k}deg)`;
});
const img = (k) => U(I[k]);
function addToCart(x, type, qty, note = "", price = x[3]) {
  const c = get(),
    f = c.find((i) => i.id == x[0] && i.note == note && i.price == price);
  if (f) f.qty += qty;
  else
    c.push({
      id: x[0],
      name: x[1],
      price,
      img: x[4],
      type,
      qty,
      note,
    });
  set(c);
  toast("تمت الإضافة للسلة ✓");
}
function menu(type) {
  const cats = DATA[type],
    sb = $("#side"),
    mn = $("#menu");
  sb.innerHTML = cats
    .map(
      (c, n) =>
        `<button data-n="${n}"><span>${c.i}</span><b>${c.k}</b></button>`,
    )
    .join("");
  function show(n) {
    const c = cats[n];
    sb.querySelectorAll("button").forEach((b, i) =>
      b.classList.toggle("on", i == n),
    );
    mn.innerHTML =
      `<h2 class="ttl">${c.i} ${c.k}</h2><div class="grid">` +
      c.items
        .map(
          (x, i) =>
            `<article class="card" data-id="${x[0]}" style="animation-delay:${i * 0.1}s"><img src="${img(x[4])}" alt="${x[1]}" loading="lazy"><div class="bd"><h3>${x[1]}</h3><p>${x[2]}</p><div class="row"><span class="price">${x[3]} ج.م</span><div class="q"><button data-a="-">−</button><b>1</b><button data-a="+">+</button></div></div><input placeholder="ملاحظات (بدون بصل...)"><button class="btn" data-a="add">أضف للسلة</button></div></article>`,
        )
        .join("") +
      "</div>";
  }
  sb.onclick = (e) => {
    const b = e.target.closest("button");
    if (b) show(+b.dataset.n);
  };
  mn.onclick = (e) => {
    const a = e.target.dataset.a,
      cd = e.target.closest(".card");
    if (!a) return;
    const q = cd.querySelector(".q b");
    if (a == "+") q.textContent = +q.textContent + 1;
    if (a == "-") q.textContent = Math.max(1, q.textContent - 1);
    if (a == "add") {
      const x = cats.flatMap((c) => c.items).find((i) => i[0] == cd.dataset.id),
        note = cd.querySelector("input").value.trim();
      addToCart(x, type, +q.textContent, note);
      q.textContent = 1;
    }
  };
  show(0);
}
function offers() {
  const products = DATA.restaurant
    .flatMap((category) => category.items.map((item) => [item, "restaurant"]))
    .concat(
      DATA.cafe.flatMap((category) =>
        category.items.map((item) => [item, "cafe"]),
      ),
    );
  const items = OFFERS.map((offer) => ({
    ...offer,
    product: products.find(([item]) => item[0] == offer.id)[0],
    type: products.find(([item]) => item[0] == offer.id)[1],
  }));
  const mn = $("#offers");
  mn.innerHTML =
    `<section class="offers-hero"><span class="offers-spark" aria-hidden="true">✦</span><div><span class="offers-kicker">اختيارات Queen الخاصة</span><h1>عروض تستاهل التجربة</h1><p>أشهى اختيارات المطعم والكافيه، بسعر مميز لفترة محدودة.</p></div><span class="offers-seal" aria-hidden="true">عروض<br>خاصة</span></section><div class="offers-grid">` +
    items
      .map(({ product: x, price, type }, i) => {
        const discount = Math.round(((x[3] - price) / x[3]) * 100);
        return `<article class="card offer-card" data-id="${x[0]}" data-price="${price}" style="animation-delay:${i * 0.08}s"><div class="offer-image"><img src="${img(x[4])}" alt="${x[1]}" loading="lazy"><span class="offer-tag">خصم ${discount}٪</span></div><div class="bd"><span class="offer-type">${type == "restaurant" ? "🍽 من المطعم" : "☕ من الكافيه"}</span><h3>${x[1]}</h3><p>${x[2]}</p><div class="row"><div class="offer-prices"><del>${x[3]} ج.م</del><span class="price">${price} ج.م</span></div><div class="q"><button data-a="-" aria-label="تقليل الكمية">−</button><b>1</b><button data-a="+" aria-label="زيادة الكمية">+</button></div></div><button class="btn" data-a="add">أضف للسلة</button></div></article>`;
      })
      .join("") +
    "</div>";
  mn.onclick = (e) => {
    const button = e.target.closest("button"),
      card = e.target.closest(".offer-card");
    if (!button || !card) return;
    const quantity = card.querySelector(".q b");
    if (button.dataset.a == "+") quantity.textContent = +quantity.textContent + 1;
    if (button.dataset.a == "-")
      quantity.textContent = Math.max(1, +quantity.textContent - 1);
    if (button.dataset.a == "add") {
      const item = items.find(({ product }) => product[0] == card.dataset.id);
      addToCart(item.product, item.type, +quantity.textContent, "", item.price);
      quantity.textContent = 1;
    }
  };
}
function cart() {
  const draw = () => {
    const c = get();
    $("#items").innerHTML = c.length
      ? c
          .map(
            (x, i) =>
              `<div class="ci"><img src="${img(x.img)}"><div><b>${x.name}</b><br><small>${x.price} ج.م${x.note ? " · " + x.note : ""}</small></div><div class="q"><button data-i="${i}" data-a="-">−</button><b>${x.qty}</b><button data-i="${i}" data-a="+">+</button></div><button class="x" data-i="${i}" data-a="x">✕</button></div>`,
          )
          .join("")
      : "<p>السلة فارغة. <a href='restaurant.html' style='color:var(--g)'>تصفح المطعم</a></p>";
    $("#sum").innerHTML = c.length
      ? `<div class="tot"><span>الإجمالي</span><span>${c.reduce((a, x) => a + x.price * x.qty, 0)} ج.م</span></div>`
      : "";
    $("#form").style.display = c.length ? "block" : "none";
  };
  $("#items").onclick = (e) => {
    const a = e.target.dataset.a;
    if (!a) return;
    const c = get(),
      i = e.target.dataset.i;
    if (a == "+") c[i].qty++;
    if (a == "-" && c[i].qty > 1) c[i].qty--;
    if (a == "x") c.splice(i, 1);
    set(c);
    draw();
  };
  $("#go").onclick = () => {
    const n = $("#nm").value.trim(),
      p = $("#ph").value.trim();
    if (!n || !p) return toast("اكتب الاسم والموبايل");
    const c = get(),
      L = [
        "*طلب جديد من Queen* 👑",
        `الاسم: ${n}`,
        `الموبايل: ${p}`,
        `النوع: ${$("#ty").value}`,
        `العنوان: ${$("#ad").value}`,
        "",
      ];
    [
      ["restaurant", "🍽 المطعم"],
      ["cafe", "☕ الكافيه"],
    ].forEach(([t, h]) => {
      const s = c.filter((x) => x.type == t);
      if (s.length) {
        L.push("*" + h + "*");
        s.forEach((x) =>
          L.push(
            `• ${x.name} × ${x.qty} = ${x.price * x.qty} ج.م${x.note ? " (" + x.note + ")" : ""}`,
          ),
        );
      }
    });
    L.push("", `*الإجمالي: ${c.reduce((a, x) => a + x.price * x.qty, 0)} ج.م*`);
    if ($("#nt").value) L.push("ملاحظات: " + $("#nt").value);
    window.open(
      `https://wa.me/${WA}?text=${encodeURIComponent(L.join("\n"))}`,
      "_blank",
    );
  };
  draw();
}
function initParticleBackground() {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  particlesJS("particles-bg", {
    particles: {
      number: {
        value: 120,
        density: { enable: true, value_area: 800 },
      },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: {
        value: 0.62,
        random: true,
        anim: { enable: true, speed: 0.7, opacity_min: 0.2, sync: false },
      },
      size: { value: 3.2, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.22,
        width: 1.2,
      },
      move: {
        enable: !reduceMotion,
        speed: 1.1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: { enable: !reduceMotion, mode: "repulse" },
        onclick: { enable: false },
        resize: true,
      },
      modes: { repulse: { distance: 150, duration: 0.45 } },
    },
    retina_detect: true,
    responsive: [
      {
        breakpoint: 700,
        options: {
          particles: {
            number: {
              value: 68,
              density: { enable: true, value_area: 550 },
            },
            line_linked: {
              enable: true,
              distance: 105,
              color: "#ffffff",
              opacity: 0.16,
            },
          },
          interactivity: {
            events: { onhover: { enable: false } },
          },
        },
      },
    ],
  });
}
if (P == "restaurant" || P == "cafe") menu(P);
if (P == "cart") cart();
if (P == "offers") offers();
if (P == "restaurant" || P == "cafe") initParticleBackground();
