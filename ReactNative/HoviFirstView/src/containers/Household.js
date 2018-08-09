import { connect } from 'react-redux'
// import { toggleTodo } from '../actions'
import Household from '../components/Household'

// const costValue = pieData.reduce((a, b) => a + b.number, 0);
// const beforeCostValue = beforePieData.reduce((a, b) => a + b.number, 0);
// const paymentValue = incomeValue - costValue;
// const ratioValue = Math.floor(costValue / beforeCostValue * 100);

// 現在の日付を返す
export const getCurrentCreatedAt = state => state.currentBalanceSheet.createdAt;

// 現在のコスト合計を返す
export const getCurrentCostTotal = state => state.currentBalanceSheet.costs.reduce((total, cost) => total + cost.number, 0);

// 先月のコスト合計を返す
export const getBeforeCostTotal = state => state.beforeBalanceSheet.costs.reduce((total, cost) => total + cost.number, 0);

// 先月と今月の比率を返す
export const getRatio = ({ current, before }) => Math.floor(current / before * 100) - 100;

// 先月と比べて、N%早いか遅いかを返す
export const getCostRatio = state => {
  const currentCostTotal = getCurrentCostTotal(state);
  const beforeCostTotal = getBeforeCostTotal(state);
  const costRatio = getRatio({
    current: currentCostTotal,
    before: beforeCostTotal,
  });

  return costRatio > 0 ? `+${costRatio}` : costRatio;
};

// 一番消費が早い項目を返す
export const getMostCostName = state => {
  const ratios = state.currentBalanceSheet.costs.map((cost, index) => {
    return {
      name: cost.name,
      ratio: getRatio({
        current: cost.number,
        before: state.beforeBalanceSheet.costs[index].number,
      }),
    }
  });
  console.log(ratios)

  return Math.max(...ratios);
};



const mapStateToProps = state => ({
  createdAt: getCurrentCreatedAt(state),

  costRatio: getCostRatio(state),

  mostCostName: getMostCostName(state),
  // balanceSheet: state.balanceSheet,

  // costValue: state.balanceSheet.pieData.reduce((a, b) => a + b.number, 0),

  // beforeCostValue: state.balanceSheet.beforePieData.reduce((a, b) => a + b.number, 0),

  // paymentValue: console.log(777, costValue)
})

// const mapDispatchToProps = dispatch => ({
//   toggleTodo: id => dispatch(toggleTodo(id))
// })

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Household)
