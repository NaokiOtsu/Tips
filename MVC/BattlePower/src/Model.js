export default class Model {
  constructor(config) {
    this.config = config;
  }

  useOrange(callback) {
    const config = this.config;

    if (!config.item.orange.current) return;
    if (config.battle_power.current >= config.battle_power.max) return;

    this.config.item.orange.current -= 1;
    this.config.battle_power.current += 1;

    if (callback) callback();
  }

  useMeat(callback) {
    const config = this.config;

    if (!config.item.meat.current) return;
    if (config.battle_power.current >= config.battle_power.max) return;

    this.config.item.meat.current -= 1;
    this.config.battle_power.current = this.config.battle_power.max;

    if (callback) callback();
  }

  selectBattlePower(index, callback) {
    const battle_power = this.config.battle_power;

    if (index >= battle_power.current) return;

    battle_power.select = index;

    if (callback) callback();
  }
}