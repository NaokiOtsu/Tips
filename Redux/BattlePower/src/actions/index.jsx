export const useOrange = () => ({
  type: 'USE_ORANGE',
});

export const useMeat = () => ({
  type: 'USE_MEAT',
});

export const selectBattlePower = id => ({
  type: 'SELECT_BATTLE_POWER',
  id,
});
