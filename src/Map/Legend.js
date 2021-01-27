export default class LegendControl {
  constructor(title, layers, colors) {
    this.title = title;
    this.layers = layers;
    this.colors = colors;
  }

  getContainer() {
    this._container = document.createElement("div");
    this._container.id = "legend";
    this._container.className = "custom-control";

    let title = document.createElement("div");
    title.textContent = this.title;
    title.className = "legend-title";
    this._container.appendChild(title);

    for (let i = 0; i < this.layers.length; i++) {
      let layer = this.layers[i];
      let color = this.colors[i];
      let item = document.createElement("div");
      let key = document.createElement("span");
      key.className = "legend-key";
      key.style.backgroundColor = color;

      let value = document.createElement("span");
      value.innerHTML = layer;
      item.appendChild(key);
      item.appendChild(value);
      this._container.appendChild(item);
    }

    return this._container;
  }
}
