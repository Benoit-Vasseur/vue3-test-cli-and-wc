class MyInput extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.

    // Attach a shadow root to the element.
    let shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
    <label>Mon input : </label>
    <input type="text" />
    `;
  }
}
window.customElements.define("my-input", MyInput);
