import { MapCreator } from "../services/game/map";

export default customElements.define(
  "game-board",
  class extends HTMLElement {
    map!: MapCreator;
    constructor() {
      super();
    }

    connectedCallback() {
      const container = this.createContainerElement();
      this.appendChild(container);
      this.map = new MapCreator(container);
    }

    private createContainerElement() {
      const container = document.createElement("canvas");
      container.setAttribute("id", "game-wrapper");
      return container;
    }
  }
);
