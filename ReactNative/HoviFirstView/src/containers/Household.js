import { connect } from 'react-redux'
// import { toggleTodo } from '../actions'
import Household from '../components/Household'

// const costValue = pieData.reduce((a, b) => a + b.value, 0);
// const beforeCostValue = beforePieData.reduce((a, b) => a + b.value, 0);
// const paymentValue = incomeValue - costValue;
// const ratioValue = Math.floor(costValue / beforeCostValue * 100);

// 現在の日付を返す
export const getCurrentCreatedAt = state => state.currentBalanceSheet.createdAt;

// 現在のコスト合計を返す
export const getCurrentCostTotal = state => state.currentBalanceSheet.costs.reduce((total, cost) => total + cost.value, 0);

// 先月のコスト合計を返す
export const getBeforeCostTotal = state => state.beforeBalanceSheet.costs.reduce((total, cost) => total + cost.value, 0);

// 先月と今月の比率を返す
export const getRatio = ({ current, before }) => Math.floor(current / before * 100) - 100;

// 先月と比べた時の比率を返す
export const getCostRatio = state => {
  const currentCostTotal = getCurrentCostTotal(state);
  const beforeCostTotal = getBeforeCostTotal(state);
  const costRatio = getRatio({
    current: currentCostTotal,
    before: beforeCostTotal,
  });

  return costRatio > 0 ? `+${costRatio}` : costRatio;
};

// 一番消費が早い項目名を返す
export const getMostCostName = state => {
  const ratios = state.currentBalanceSheet.costs
    .map((cost, index) => ({
      name: cost.name,
      value: getRatio({
        current: cost.value,
        before: state.beforeBalanceSheet.costs[index].value,
      }),
    }));
  const max = Math.max(...ratios.map(ratio => ratio.value));
  return ratios.find(ratio => (ratio.value) === max).name;
};

// 支出内訳のリストを返す
export const getCostList = state => {
  return state.currentBalanceSheet.costs
    .map((cost, index) => ({
      name: cost.name,
      value: cost.value,
      color: cost.color,
      ratio: getRatio({
        current: cost.value,
        before: state.beforeBalanceSheet.costs[index].value,
      }),
    }))
    .slice(0, 3)
};

const mapStateToProps = state => ({
  createdAt: getCurrentCreatedAt(state),

  costRatio: getCostRatio(state),

  mostCostName: getMostCostName(state),

  costList: getCostList(state),

  costValue: getCurrentCostTotal(state),

  incomeValue: state.currentBalanceSheet.income,

  currentCosts: state.currentBalanceSheet.costs,
})

// const mapDispatchToProps = dispatch => ({
//   toggleTodo: id => dispatch(toggleTodo(id))
// })

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Household)
