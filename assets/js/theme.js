(function(){
  const root = document.documentElement;

  // aplica preferencia guardada
  const saved = localStorage.getItem("theme");
  if (saved === "light") root.setAttribute("data-theme", "light");

  // enlaza TODOS los botones que tengan data-theme-toggle
  function setLabel(btn){
    const isLight = root.getAttribute("data-theme") === "light";
    btn.textContent = isLight ? "🌙 Oscuro" : "🌗 Claro";
    btn.title = isLight ? "Cambiar a tema oscuro" : "Cambiar a tema claro";
  }

  const buttons = document.querySelectorAll("[data-theme-toggle]");
  buttons.forEach(btn => setLabel(btn));

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-theme-toggle]");
    if (!btn) return;

    const isLight = root.getAttribute("data-theme") === "light";
    if (isLight) {
      root.removeAttribute("data-theme");
      localStorage.removeItem("theme");
    } else {
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }

    document.querySelectorAll("[data-theme-toggle]").forEach(b => setLabel(b));
  });
})();
