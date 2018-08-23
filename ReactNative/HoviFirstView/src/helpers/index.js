// 現在の日付を返す
export const getCurrentCreatedAt = state => state.balanceSheet.currentBalanceSheet.createdAt;

// 現在のコスト合計を返す
export const getCurrentCostTotal = state => state.balanceSheet.currentBalanceSheet.costs.reduce((total, cost) => total + cost.value, 0);

// 先月のコスト合計を返す
export const getBeforeCostTotal = state => state.balanceSheet.beforeBalanceSheet.costs.reduce((total, cost) => total + cost.value, 0);

// 先月と今月の比率を返す
export const getRatio = ({ current, before }) => Math.floor(current / before * 100);

// 先月と比べた時の比率を返す
export const getCostRatio = state => {
  const currentCostTotal = getCurrentCostTotal(state);
  const beforeCostTotal = getBeforeCostTotal(state);
  const costRatio = getRatio({
    current: currentCostTotal,
    before: beforeCostTotal,
  });

  return costRatio;
};

// 一番消費が早い項目名を返す
export const getMostCostName = state => {
  const ratios = state.balanceSheet.currentBalanceSheet.costs
    .map((cost, index) => ({
      name: cost.name,
      value: getRatio({
        current: cost.value,
        before: state.balanceSheet.beforeBalanceSheet.costs[index].value,
      }),
    }));
  const max = Math.max(...ratios.map(ratio => ratio.value));
  return ratios.find(ratio => (ratio.value) === max).name;
};

// 支出内訳のリストを返す
export const getCostList = state => {
  return state.balanceSheet.currentBalanceSheet.costs
    .map((cost, index) => ({
      name: cost.name,
      value: cost.value,
      color: cost.color,
      ratio: getRatio({
        current: cost.value,
        before: state.balanceSheet.beforeBalanceSheet.costs[index].value,
      }),
    }))
    .slice(0, 3)
};

// 支出の中で一番大きい金額を返す
export const getMaxCurrentValue = costs => {
  let result = 0;
  costs.reduce((a, b) => {
    if (a.value < b.value) {
      result = b.value;
      return b;
    } else {
      result = a.value;
      return a;
    }
  })
  return result;
}
