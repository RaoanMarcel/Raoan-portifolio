function toggleMenu(){const a=document.querySelector(".nav-list");a.classList.toggle("active")}function closeMenu(){const a=document.querySelector(".nav-list");a.classList.remove("active")}function alternaTodos(a){for(var b,c=document.getElementsByClassName(a),d=0;d<c.length;d++)b=window.getComputedStyle(c[d]).display,c[d].style.display="grid"===b?"none":"grid"}function alternaTexto(){const a=document.getElementById("bttalternar");a.textContent="Mostrar mais"===a.textContent?"Mostrar menos":"Mostrar mais"}function alternaTextoen(){const a=document.getElementById("bttalternar");a.textContent="Show more"===a.textContent?"Show less":"Show more"}function alternaTextoes(){const a=document.getElementById("bttalternar");a.textContent="Mostrar m\xE1s"===a.textContent?"Mostrar menos":"Mostrar m\xE1s"}function alternaEstilo(){var a=window.innerWidth;if(1300<a){var b=document.getElementById("initial-style"),c=window.getComputedStyle(b).display;b.style.display="grid"===c?"none":"grid"}}document.addEventListener("DOMContentLoaded",function(){const a=document.getElementById("img"),b=document.querySelectorAll(".img-carrossel");let c=0});function slideNext(){if(idx++,idx>=imgs.length)idx=0,imgContainer.style.transition="none",imgContainer.style.transform=`translateX(100%)`,requestAnimationFrame(()=>{requestAnimationFrame(()=>{imgContainer.style.transition="transform 0.5s ease-in-out",imgContainer.style.transform=`translateX(0)`})});else{const a=100*-idx;imgContainer.style.transform=`translateX(${a}%)`}updateSlideIndicator()}function slidePrev(){if(idx--,0>idx)idx=imgs.length-1,imgContainer.style.transition="none",imgContainer.style.transform=`translateX(${100*-imgs.length}%)`,requestAnimationFrame(()=>{requestAnimationFrame(()=>{imgContainer.style.transition="transform 0.5s ease-in-out",imgContainer.style.transform=`translateX(${100*-idx}%)`})});else{const a=100*-idx;imgContainer.style.transform=`translateX(${a}%)`}updateSlideIndicator()}let idx=0;function slideNext(){idx++;const a=document.querySelector(".container-carrossel"),b=document.querySelectorAll(".img-carrossel"),c=document.getElementById("slide-indicator");if(idx>=b.length)idx=0,a.style.transition="none",a.style.transform=`translateX(100%)`,requestAnimationFrame(()=>{requestAnimationFrame(()=>{a.style.transition="transform 0.5s ease-in-out",a.style.transform=`translateX(0)`})});else{const b=100*-idx;a.style.transform=`translateX(${b}%)`}updateSlideIndicator(c,idx)}function slidePrev(){const a=document.querySelector(".container-carrossel"),b=document.querySelectorAll(".img-carrossel"),c=document.getElementById("slide-indicator");if(idx--,0>idx)idx=b.length-1,a.style.transition="none",a.style.transform=`translateX(${100*-b.length}%)`,requestAnimationFrame(()=>{requestAnimationFrame(()=>{a.style.transition="transform 0.5s ease-in-out",a.style.transform=`translateX(${100*-idx}%)`})});else{const b=100*-idx;a.style.transform=`translateX(${b}%)`}updateSlideIndicator(c,idx)}function updateSlideIndicator(a,b){const c=a.querySelectorAll(".indicator-bar");c.forEach((a,c)=>{a.classList.toggle("active",c===b)})}document.addEventListener("DOMContentLoaded",()=>{function a(a){h&&(g=a.touches[0].clientX,a.preventDefault())}function b(){if(!h)return;const a=f-g;Math.abs(a)>50&&(0<a?slideNext():slidePrev()),f=0,g=0,h=!1}const c=document.querySelector(".container-carrossel"),d=document.querySelectorAll(".img-carrossel"),e=document.getElementById("slide-indicator");let f=0,g=0,h=!1;d.forEach((a,b)=>{const c=document.createElement("div");c.classList.add("indicator-bar"),0===b&&c.classList.add("active"),e.appendChild(c)}),c.addEventListener("touchstart",function(a){f=a.touches[0].clientX,h=!0}),c.addEventListener("touchmove",a),c.addEventListener("touchend",b)});function alternaPagina(){const a=document.querySelectorAll("input[name=\"language\"]");a.forEach(a=>{a.addEventListener("change",function(){if(this.checked){const a=this.value,b=window.location.href;a===b?console.log("Voc\xEA j\xE1 est\xE1 nesta p\xE1gina."):window.location.href=a}})})}const chk=document.getElementById("chk");chk.addEventListener("change",()=>{document.body.classList.toggle("dark")}),document.addEventListener("DOMContentLoaded",function(){const a=document.querySelectorAll("input[name=\"language\"]");a.forEach(a=>{a.addEventListener("change",function(){this.checked&&(window.location.href=this.value)})})});