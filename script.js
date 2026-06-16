const root = document.documentElement;
const body = document.body;
const result = document.querySelector("#quiz-result");

let fontSize = 18;

document.querySelector(".toolbar").addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  const action = button.dataset.action;

  if (action === "font-up") {
    fontSize = Math.min(fontSize + 1, 24);
    root.style.setProperty("--font-size", `${fontSize}px`);
  }

  if (action === "font-down") {
    fontSize = Math.max(fontSize - 1, 16);
    root.style.setProperty("--font-size", `${fontSize}px`);
  }

  if (action === "theme") {
    body.classList.toggle("dark");
  }

  if (action === "contrast") {
    body.classList.toggle("contrast");
  }
});

document.querySelector(".quiz__options").addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  const isRight = button.dataset.answer === "right";

  result.className = `quiz__result ${isRight ? "right" : "wrong"}`;
  result.textContent = isRight
    ? "Correto! Sempre confirme por ligação ou pessoalmente antes de enviar dinheiro."
    : "Cuidado! Essa atitude pode colocar seus dados ou dinheiro em risco.";
});
