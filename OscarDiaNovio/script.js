// Puedes añadir alguna interacción divertida aquí si deseas
console.log("Página creada con amor para Oscar 💖");
document.getElementById("couponButton").addEventListener("click", function() {
    this.textContent = "Cupón";
    this.style.backgroundColor = "#32cd32"; // Cambia a verde
    this.style.color = "white";
    document.getElementById("coupons").classList.remove("hidden");
});