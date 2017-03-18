export default class CountController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.bindEvents();
  }

  bindEvents() {
    this.view.btn.addEventListener('click', this.onBtnClick.bind(this));
  }

  onBtnClick() {
    this.model.increment(() => {
      this.view.render();
    });
  }
}