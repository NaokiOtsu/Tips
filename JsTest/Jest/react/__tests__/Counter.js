import Counter from '../src/Counter'

describe('Counter', () => {
  let counter
  beforeEach(() => {
    counter = new Counter(1)
  })
  describe.only('increment()', () => {
    test('increment', () => {
      counter.increment()
      expect(counter.count).toBe(2)
    })
  });
  describe('decrement()', () => {
    test('decrement', () => {
      counter.decrement()
      expect(counter.count).toBe(0)
    })
  });
});
