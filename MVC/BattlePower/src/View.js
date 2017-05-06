export default class View {
  constructor(model) {
    this.model = model;

    this.battle_power_items = document.querySelectorAll('.battle-power li');
    this.orange_btn = document.getElementById('orange');
    this.meat_btn = document.getElementById('meat');
    this.orange_count = document.getElementById('orange-count');
    this.meat_count = document.getElementById('meat-count');

    this.render();
  }

  render() {
    const config = this.model.config;
    this.reset();
    
    this.orange_count.textContent = config.item.orange.current;
    this.meat_count.textContent = config.item.meat.current;
    
    let counter = config.battle_power.current;
    for (let i = 0; i < counter; i++) {
      this.battle_power_items[i].classList.add('active');
    }

    if (this.canSelectBattlePower()) {
      this.battle_power_items[config.battle_power.select].classList.add('selected');
    }

    if (!this.canOrange()) {
      this.orange_btn.classList.add('disable');
    }

    if (!this.canMeat()) {
      this.meat_btn.classList.add('disable');
    }

  }

  canOrange() {
    const config = this.model.config;

    if (!config.item.orange.current) return false;
    if (config.battle_power.current >= config.battle_power.max) return false;

    return true;
  }

  canMeat() {
    const config = this.model.config;

    if (!config.item.meat.current) return false;
    if (config.battle_power.current >= config.battle_power.max) return false;
    
    return true;
  }

  canSelectBattlePower() {
    const config = this.model.config;

    if (!config.battle_power.current) return false;
    
    return true;
  }

  reset() {
    this.orange_btn.classList.remove('disable');
    this.battle_power_items.forEach((element) => {
      element.classList.remove('active');
      element.classList.remove('selected');
    });
  }
}
