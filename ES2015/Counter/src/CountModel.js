export default class CountModel {
  constructor() {
    this.count = 0;
  }

  increment(callback) {
    this.count += 1;

    if (callback) callback();
  }
}
