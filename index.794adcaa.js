const e=document.querySelector("[open-sub-menu]"),t=document.querySelector("[sub-menu]");e.addEventListener("click",(()=>{t.classList.toggle("visually-hidden"),e.classList.toggle("is-open")})),window.matchMedia("(min-width: 768px)").addEventListener("change",(n=>{n.matches&&(t.classList.add("visually-hidden"),e.classList.remove("is-open"))})),(()=>{const e={openModalBtn:document.querySelector("[open-modal]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),e.modal.addEventListener("click",(e=>{"backdrop"===e.target.className&&t()}))})(),(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-mobile-menu"),n=document.querySelector(".js-close-menu"),d=()=>{t.getAttribute("aria-expanded"),e.classList.toggle("is-open")};t.addEventListener("click",d),n.addEventListener("click",d),window.matchMedia("(min-width: 768px)").addEventListener("change",(n=>{n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))}))})(),console.log("sdadd");
//# sourceMappingURL=index.794adcaa.js.map