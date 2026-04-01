const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
const sections = Array.from(document.querySelectorAll(".section[data-group]"));
const modalTriggers = Array.from(document.querySelectorAll("[data-modal-trigger]"));
const modalCloseButtons = Array.from(document.querySelectorAll("[data-modal-close]"));

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    sections.forEach((section) => {
      const visible = filter === "all" || section.dataset.group === filter;
      section.classList.toggle("is-hidden", !visible);
    });
  });
});

modalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const modal = document.getElementById(trigger.dataset.modalTrigger);
    if (modal) {
      modal.classList.add("open");
    }
  });
});

function closeModal(target) {
  const modal = target.closest(".modal-overlay");
  if (modal) {
    modal.classList.remove("open");
  }
}

modalCloseButtons.forEach((button) => {
  button.addEventListener("click", () => closeModal(button));
});

document.querySelectorAll(".modal-overlay").forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("open");
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.querySelectorAll(".modal-overlay.open").forEach((modal) => {
      modal.classList.remove("open");
    });
  }
});
