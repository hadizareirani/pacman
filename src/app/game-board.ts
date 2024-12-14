import { GameArea } from "../services/game/gameArea";

export default customElements.define(
  "game-board",
  class extends HTMLElement {
    gameArea!: GameArea;
    constructor() {
      super();
    }

    connectedCallback() {
      const container = this.createContainerElement();
      this.appendChild(container);
      this.gameArea = new GameArea(container);
    }

    private createContainerElement() {
      const container = document.createElement("canvas");
      container.setAttribute("id", "game-wrapper");
      return container;
    }
  }
);
