function e(e){return e&&e.__esModule?e.default:e}var n,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof o&&o&&o.Object===Object&&o,d="object"==typeof self&&self&&self.Object===Object&&self,u=s||d||Function("return this")(),c=Object.prototype.toString,p=Math.max,m=Math.min,f=function(){return u.Date.now()};function E(e,n,o){var t,r,i,a,l,s,d=0,u=!1,c=!1,E=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(n){var o=t,i=r;return t=r=void 0,d=n,a=e.apply(i,o)}function g(e){return d=e,l=setTimeout(b,n),u?y(e):a}function L(e){var o=e-s;return void 0===s||o>=n||o<0||c&&e-d>=i}function b(){var e=f();if(L(e))return k(e);l=setTimeout(b,function(e){var o=n-(e-s);return c?m(o,i-(e-d)):o}(e))}function k(e){return l=void 0,E&&t?y(e):(t=r=void 0,a)}function v(){var e=f(),o=L(e);if(t=arguments,r=this,s=e,o){if(void 0===l)return g(s);if(c)return l=setTimeout(b,n),y(s)}return void 0===l&&(l=setTimeout(b,n)),a}return n=h(n)||0,w(o)&&(u=!!o.leading,i=(c="maxWait"in o)?p(h(o.maxWait)||0,n):i,E="trailing"in o?!!o.trailing:E),v.cancel=function(){void 0!==l&&clearTimeout(l),d=0,t=s=r=l=void 0},v.flush=function(){return void 0===l?a:k(f())},v}function w(e){var n=typeof e;return!!e&&("object"==n||"function"==n)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(w(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=w(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var o=i.test(e);return o||a.test(e)?l(e.slice(2),o?2:8):r.test(e)?NaN:+e}const y={"who-we":{ru:"О нас: КТО МЫ?",pl:"O nas: KIM JESTEŚMY?",de:"Über uns: WER SIND WIR?",en:"About us: WHO ARE WE?"},"who-we-desc":{ru:"GEFEST LOGISTICS Sp. z o. o.  является профессиональным польским дистрибютором новых европоддонов EPAL на рынок Европейского Союза от лицензированных производителей в Украине.",pl:"GEFEST LOGISTYKA Sp. z oo o. jest profesjonalnym polskim dystrybutorem nowych europalet EPAL na rynek Unii Europejskiej od licencjonowanych producentów z Ukrainy.",de:"GEFEST LOGISTIK Sp. z o. o. ist ein professioneller polnischer Vertreiber von neuen EPAL-Europaletten für den Markt der Europäischen Union von lizenzierten Herstellern in der Ukraine.",en:"GEFEST LOGISTICS Sp. z o. o. is a professional Polish distributor of new EPAL euro pallets to the European Union market from licensed manufacturers in Ukraine."},about:{ru:"НАШИ ВОЗМОЖНОСТИ ДЛЯ ВАШЕГО БИЗНЕСА",pl:"NASZE MOŻLIWOŚCI DLA TWOJEGO BIZNESU",de:"UNSERE MÖGLICHKEITEN FÜR IHR UNTERNEHMEN",en:"OUR OPPORTUNITIES FOR YOUR BUSINESS"},"about-desc":{ru:"GEFEST LOGISTICS Sp. z o. o.  имеет собсвенное производство поддонов EPAL в Украине а также занимается реализацей поддонов EPAL от производств-партнеров. Наша компания имеет возможность поставлять до 100 000 европоддонов EPAL в месяц. С нами вы сможете увеличить количество клиентов.",pl:"GEFEST LOGISTYKA Sp. z oo o. posiada własną produkcję palet EPAL na Ukrainie, a także sprzedaje palety EPAL z fabryk partnerskich. Nasza firma jest w stanie dostarczyć do 100 000 palet EPAL miesięcznie. Z nami możesz zwiększyć liczbę klientów.",de:"GEFEST LOGISTIK Sp. z o. o. hat eine eigene Produktion von EPAL-Paletten in der Ukraine und verkauft auch EPAL-Paletten von Partnerfabriken. Unser Unternehmen ist in der Lage, monatlich bis zu 100.000 EPAL-Paletten zu liefern. Mit uns können Sie die Anzahl Ihrer Kunden erhöhen.",en:"GEFEST LOGISTICS Sp. z o. o. has its own production of EPAL pallets in Ukraine and also sells EPAL pallets from partner factories. Our company is able to supply up to 100,000 EPAL pallets per month. With us you can increase the number of customers."},quality:{ru:"КОНТРОЛЬ КАЧЕСТВА",pl:"KONTROLA JAKOŚCI",de:"QUALITÄTSKONTROLLE",en:"QUALITY CONTROL"},"quality-desc":{ru:"Наша фабрика и фабрики-партнеры находятся под постоянным контролем качества ответсвенных лиц назначеных нашей компанией для соблюдения всех требований European Pallet Association e.V . При каждой отгрузке сотрудник компании делаем фотоотчет по каждой партии.",pl:"Nasza fabryka i fabryki partnerskie są pod stałą kontrolą jakości przez odpowiedzialne osoby wyznaczone przez naszą firmę w celu spełnienia wszystkich wymagań European Pallet Association e.V. Przy każdej wysyłce wykonujemy fotoreportaż dla każdej partii.",de:"Unser Werk und unsere Partnerwerke stehen unter ständiger Qualitätskontrolle durch von uns benannte Verantwortliche zur Einhaltung aller Anforderungen der European Pallet Association e.V. Bei jeder Lieferung erstellen wir einen Fotobericht für jede Charge.",en:"Our factory and partner factories are under constant quality control by responsible persons appointed by our company to comply with all the requirements of the European Pallet Association e.V. At each shipment we make a photo report for each  batch."},delivery:{ru:"ДОСТАВКА",pl:"DOSTAWA",de:"LIEFERUNG",en:"DELIVERY"},"delivery-desc":{ru:"От 4 до 10 календарных дней со дня получения заказа.",pl:"Od 4 do 10 dni kalendarzowych od daty otrzymania zamówienia.",de:"4 bis 10 Kalendertage ab Eingang der Bestellung.",en:"From 4 to 10 calendar days from the date of receipt of the order."},help:{ru:"МЫ БУДЕМ ВАМ ПОЛЕЗНЫ ",pl:"BĘDZIEMY DLA CIEBIE PRZYDATNI",de:"WIR WERDEN IHNEN NÜTZLICH SEIN",en:"WE WILL BE USEFUL TO YOU"},"help-desc":{ru:"Мы поставляем новый европоддон EPAL только членам European Pallet Association e.V, производителям, ремонтникам и дилерам в Европе. GEFEST LOGISTICS Sp. z o. o.  не доставляет поддоны конечным пользователям. Мы поставляем их вам, чтобы вы могли удовлетворить потребности ваших местных клиентов на 100%.",pl:"Dostarczamy nową europaletę EPAL tylko członkom European Pallet Association e.V., producentom, warsztatom i dealerom w Europie. GEFEST LOGISTYKA Sp. z oo o. nie dostarcza palet do użytkowników końcowych. Dostarczamy je do Ciebie, abyś mógł w 100% zaspokoić potrzeby swoich lokalnych klientów.",de:"Wir liefern die neue EPAL Europalette nur an Mitglieder der European Pallet Association e.V, Hersteller, Reparateure und Händler in Europa. GEFEST LOGISTIK Sp. z o. Ö. liefert keine Paletten an Endverbraucher. Wir liefern sie Ihnen, damit Sie die Bedürfnisse Ihrer Kunden vor Ort zu 100 % erfüllen können.",en:"We supply the new EPAL Euro pallet only to members of the European Pallet Association e.V, manufacturers, repairers and dealers in Europe. GEFEST LOGISTICS Sp. z o. o. does not deliver pallets to end users. We supply them to you so that you can meet the needs of your local customers 100%."},"contact-button":{ru:"СВЯЗАТЬСЯ",pl:"KONTAKT",de:"KONTAKT",en:"CONTACT"},"contact-us-button":{ru:"СВЯЗАТЬСЯ С НАМИ",pl:"POŁĄCZ SIĘ Z NAMI",de:"VERBINDE DICH MIT UNS",en:"CONNECT WITH US"},"ask-question":{ru:"ЗАДАЙТЕ СВОЙ ВОПРОС",pl:"ZADAJ PYTANIE",de:"STELL DEINE FRAGE",en:"ASK YOUR QUESTION"},"contact-us-heading":{ru:"Хотите узнать больше?",pl:"Chcieć wiedzieć więcej?",de:"Möchten Sie mehr wissen?",en:"Want to know more?"},"contact-us-desc":{ru:" Оставьте свои контактные данные, и наш менеджер в ближайшее время свяжется с Вами.",pl:"Zostaw swoje dane kontaktowe, a nasz manager wkrótce się z Tobą skontaktuje.",de:"Hinterlassen Sie Ihre Kontaktdaten und unser Manager wird sich in Kürze mit Ihnen in Verbindung setzen.",en:"Leave your contact details and our manager will contact you shortly."},"footer-desc":{ru:"Мы предоставляем нашим клиентам исключительный сервис, качественные ресурсы и опыт. Мы поставляем индивидуальные поддоны, которые являются экономически эффективными, надежными и устойчивыми.",pl:"Zapewniamy naszym klientom wyjątkową obsługę, wysokiej jakości zasoby i wiedzę fachową. Dostarczamy dostosowane do potrzeb palety, które są opłacalne, niezawodne i trwałe.",de:"Wir bieten unseren Kunden außergewöhnlichen Service, hochwertige Ressourcen und Fachwissen. Wir liefern maßgeschneiderte Paletten, die kostengünstig, zuverlässig und nachhaltig sind.",en:"We provide our customers with exceptional service, quality resources, and expertise. We deliver tailored pallets that are cost effective, reliable, and sustainable."},"footer-conacts":{ru:"КОНТАКТЫ",pl:"ŁĄCZNOŚĆ",de:"KONTAKTE",en:"CONTACTS"},"footer-operator":{ru:"Наш менеджер Юлия с радостью ответит на все Ваши вопросы",pl:"Nasza manager Julia chętnie odpowie na wszystkie Twoje pytania",de:"Unsere Managerin Julia beantwortet gerne alle Ihre Fragen",en:"Our manager Julia will be happy to answer all your questions"},"footer-phone":{ru:"Телефон",pl:"Telefon",de:"Telefon",en:"Telephone"},"menu-about":{ru:"О нас",pl:"O nas",de:"Über uns",en:"About Us"},"menu-delivery":{ru:"Доставка",pl:"Dostawa",de:"Lieferung",en:"Delivery"},"menu-contacts":{ru:"Контакты",pl:"Łączność",de:"Kontakte",en:"Contacts"},"menu-about-mob":{ru:"О нас",pl:"O nas",de:"Über uns",en:"About Us"},"menu-delivery-mob":{ru:"Доставка",pl:"Dostawa",de:"Lieferung",en:"Delivery"},"menu-contacts-mob":{ru:"Контакты",pl:"Łączność",de:"Kontakte",en:"Contacts"},"modal-desc":{ru:"Оставьте свои данные, мы вам перезвоним",pl:"Zostaw swoje dane, oddzwonimy",de:"Hinterlassen Sie Ihre Daten, wir rufen Sie zurück",en:"Leave your details, we will call you back"},"modal-name":{ru:"Имя",pl:"Imię",de:"Name",en:"Name"},"modal-phone":{ru:"Телефон",pl:"Telefon",de:"Telefon",en:"Telephone"},"modal-email":{ru:"Почта",pl:"Email",de:"Email",en:"Email"},"modal-button":{ru:"ОТПРАВИТЬ",pl:"WYSŁAĆ",de:"SENDEN",en:"SEND"}},g=e(n=function(e,n,o){var t=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return w(o)&&(t="leading"in o?!!o.leading:t,r="trailing"in o?!!o.trailing:r),E(e,n,{leading:t,maxWait:n,trailing:r})})((async function(e){const n=b.about.firstElementChild.getBoundingClientRect();if(n.bottom<document.documentElement.clientHeight){window.removeEventListener("scroll",g);const e=b.about.children;for(let n=0;n<e.length;n+=1)if(e[n].classList.add("action"),n!==e.length-1){await T(300)}}}),200),L=e(n)((async function(e){if(b.delivery.firstElementChild.getBoundingClientRect().bottom<document.documentElement.clientHeight){window.removeEventListener("scroll",L);await T(500);document.querySelector(".delivery__container").classList.add("is-show");await T(1e3);document.querySelector(".delivery__text-wrap").classList.add("is-show");await T(1500);document.querySelector(".deliver__good-wrap").classList.add("is-show")}}),200),b={modalOpen:document.querySelectorAll("[data-modal-open]"),modalClose:document.querySelector("[data-modal-close]"),backdrop:document.querySelector(".backdrop"),about:document.querySelector(".about__container"),delivery:document.querySelector(".delivery__container"),mobToggle:document.querySelector(".mob-menu__open-button"),mobMenu:document.querySelector(".js-mobile-menu"),heroTopLogo:document.querySelector(".hero__logo-top"),heroBottomLogo:document.querySelector(".hero__logo-bottom"),langLinkArr:document.querySelectorAll(".header__language-list-link")};console.log(b.langLinkArr),b.heroTopLogo.classList.add("is-show"),b.heroBottomLogo.classList.add("is-show");for(let e of b.modalOpen)e.addEventListener("click",(function(e){b.backdrop.classList.remove("is-hidden"),window.addEventListener("keydown",k),document.querySelector(".backdrop").addEventListener("click",v)}));function k(e){"Escape"===e.code&&(b.backdrop.classList.add("is-hidden"),window.removeEventListener("keydown",k),window.removeEventListener("keydown",v))}function v(e){e.target.classList.contains("backdrop")&&(b.backdrop.classList.add("is-hidden"),window.removeEventListener("keydown",k),window.removeEventListener("keydown",v))}b.modalClose.addEventListener("click",(function(e){b.backdrop.classList.add("is-hidden"),window.removeEventListener("keydown",k),window.removeEventListener("keydown",v)}));const S=document.querySelectorAll("[nav]");for(let e of S)e.addEventListener("click",(function(n){n.preventDefault();"mob"===e.getAttribute("nav")&&A();const o=e.getAttribute("href");document.querySelector(o).scrollIntoView({behavior:"smooth",block:"start"})}));function T(e){return new Promise((n=>{setTimeout((()=>n(e)),e)}))}function A(e){b.mobToggle.classList.contains("is-open")?window.removeEventListener("scroll",z):window.addEventListener("scroll",z),b.mobMenu.classList.toggle("is-open"),b.mobToggle.classList.toggle("is-open")}function z(){window.scrollTo(0,0)}window.addEventListener("scroll",g),window.addEventListener("scroll",L),b.mobToggle.addEventListener("click",A),window.matchMedia("(min-width: 768px)").addEventListener("change",(e=>{b.mobToggle.classList.contains("is-open")&&A()}));let I=[];for(const e of b.langLinkArr)e.addEventListener("click",(e=>{for(const e of b.langLinkArr)e.classList.remove("header__language-list-link--active");e.currentTarget.classList.add("header__language-list-link--active"),O()}));function O(){let e="",n=window.location.hash;n=n.substr(1),I.includes(n)||(location.href=window.location.pathname+"#ru",function(e){for(const n of b.langLinkArr)n.classList.remove("header__language-list-link--active"),n.lang===e&&n.classList.add("header__language-list-link--active")}(n));for(const n of b.langLinkArr)I.includes(n.lang)||I.push(n.lang),n.classList.contains("header__language-list-link--active")&&(e=n.lang,P(e),N(e))}function N(e){location.href=window.location.pathname+"#"+e}function P(e){for(const n in y){let o=document.querySelector(".lng-"+n);o&&(o.textContent=y[n][e])}}O();
//# sourceMappingURL=index.d2be6645.js.map