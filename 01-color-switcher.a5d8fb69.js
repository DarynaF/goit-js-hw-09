const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),bodyEl:document.querySelector("body")};let e=null;t.stopBtn.setAttribute("disabled",!0),t.startBtn.addEventListener("click",(function(){t.startBtn.setAttribute("disabled",!0),t.stopBtn.removeAttribute("disabled"),e=setInterval((()=>{t.bodyEl.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),500)})),t.stopBtn.addEventListener("click",(function(){t.startBtn.removeAttribute("disabled"),clearInterval(e),t.stopBtn.setAttribute("disabled",!0)}));
//# sourceMappingURL=01-color-switcher.a5d8fb69.js.map
