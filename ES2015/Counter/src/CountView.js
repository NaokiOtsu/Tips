export default class CountView {
  constructor(model) {
    this.model = model;

    this.count = document.getElementById('count');
    this.btn = document.getElementById('btn');

    this.render();
  }

  render() {
    this.count.textContent = this.model.count;
  }
}
