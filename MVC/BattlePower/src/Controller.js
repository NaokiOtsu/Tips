export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;

    this.bindEvents();
  }

  bindEvents() {
    this.view.orange_btn.addEventListener('click', this.onOrangeClick.bind(this));
    this.view.meat_btn.addEventListener('click', this.onMeatClick.bind(this));

    this.view.battle_power_items.forEach((element, index) => {
      element.addEventListener('click', this.onBattlePowerClick.bind(this, index));
    });
  }

  onOrangeClick() {
    this.model.useOrange(() => {
      this.view.render();
    });
  }

  onMeatClick() {
    this.model.useMeat(() => {
      this.view.render();
    });
  }

  onBattlePowerClick(index) {
    this.model.selectBattlePower(index, () => {
      this.view.render();
    });
  }
}
