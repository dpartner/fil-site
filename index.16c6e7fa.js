function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,a="object"==typeof self&&self&&self.Object===Object&&self,d=u||a||Function("return this")(),l=Object.prototype.toString,f=Math.max,s=Math.min,m=function(){return d.Date.now()};function v(e,t,n){var o,i,r,c,u,a,d=0,l=!1,v=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function w(t){var n=o,r=i;return o=i=void 0,d=t,c=e.apply(r,n)}function g(e){return d=e,u=setTimeout(E,t),l?w(e):c}function h(e){var n=e-a;return void 0===a||n>=t||n<0||v&&e-d>=r}function E(){var e=m();if(h(e))return k(e);u=setTimeout(E,function(e){var n=t-(e-a);return v?s(n,r-(e-d)):n}(e))}function k(e){return u=void 0,y&&o?w(e):(o=i=void 0,c)}function L(){var e=m(),n=h(e);if(o=arguments,i=this,a=e,n){if(void 0===u)return g(a);if(v)return u=setTimeout(E,t),w(a)}return void 0===u&&(u=setTimeout(E,t)),c}return t=b(t)||0,p(n)&&(l=!!n.leading,r=(v="maxWait"in n)?f(b(n.maxWait)||0,t):r,y="trailing"in n?!!n.trailing:y),L.cancel=function(){void 0!==u&&clearTimeout(u),d=0,o=a=i=u=void 0},L.flush=function(){return void 0===u?c:k(m())},L}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=i.test(e);return u||r.test(e)?c(e.slice(2),u?2:8):o.test(e)?NaN:+e}const y=e((function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:o,maxWait:t,trailing:i})}))((async function(e){const t=w.about.firstElementChild.getBoundingClientRect();if(t.bottom<document.documentElement.clientHeight-t.height){window.removeEventListener("scroll",y);const e=w.about.children;for(let t=0;t<e.length;t+=1)if(e[t].classList.add("action"),t!==e.length-1){await E(300)}}}),700),w={modalOpen:document.querySelectorAll("[data-modal-open]"),modalClose:document.querySelector("[data-modal-close]"),backdrop:document.querySelector(".backdrop"),about:document.querySelector(".about__container")};for(let e of w.modalOpen)e.addEventListener("click",(function(e){w.backdrop.classList.remove("is-hidden"),window.addEventListener("keydown",g)}));function g(e){"Escape"===e.code&&(w.backdrop.classList.add("is-hidden"),window.removeEventListener("keydown",g))}w.modalClose.addEventListener("click",(function(e){w.backdrop.classList.add("is-hidden"),window.removeEventListener("keydown",g)}));const h=document.querySelectorAll("[nav]");for(let e of h)e.addEventListener("click",(function(t){t.preventDefault();const n=e.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})}));function E(e){return new Promise((t=>{setTimeout((()=>t(e)),e)}))}window.addEventListener("scroll",y);
//# sourceMappingURL=index.16c6e7fa.js.map
