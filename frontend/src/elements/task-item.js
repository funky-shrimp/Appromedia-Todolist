const checkTask = new CustomEvent("task_check");
const deleteTask = new CustomEvent("task_delete");

class Task extends HTMLElement {
  constructor() {
    super();
  }

  static observedAttributes = ["taskName", "isCompleted"];

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {

    let isCompleted = this.getAttribute("isCompleted")

    this.innerHTML = ` 
        <li class="task  ${isCompleted==="true" ? "completed":""}">
            <span class="task-name">${this.getAttribute("taskName")}</span>
            <button class="delete-btn">Delete</button>
        </li>
        `;

        this.querySelector("span").addEventListener("click", (e) => {
            e.preventDefault();
            this.dispatchEvent(checkTask);
        });

         this.querySelector(".delete-btn").addEventListener("click", (e) => {
            e.preventDefault();
            this.dispatchEvent(deleteTask);
        });
  }
}

// Déclare le tag du custom element et la classe à utiliser pour le créer dans le DOM
// Pas besoin d'exporter, juste d'être appelé une fois
customElements.define('task-item', Task)