import { connect } from 'react-redux'

import Household from '../components/Household'

import {
  getCurrentCreatedAt,
  getCostRatio,
  getMostCostName,
  getCostList,
  getCurrentCostTotal,
} from '../helpers';

const mapStateToProps = state => ({
  createdAt: getCurrentCreatedAt(state),
  costRatio: getCostRatio(state),
  mostCostName: getMostCostName(state),
  costList: getCostList(state),
  costValue: getCurrentCostTotal(state),
  incomeValue: state.balanceSheet.currentBalanceSheet.income,
  currentCosts: state.balanceSheet.currentBalanceSheet.costs,
})

export default connect(
  mapStateToProps,
)(Household)
