import { connect } from 'react-redux'

import Home from '../components/Home'

import {
  getCostRatio,
  getCurrentCostTotal,
} from '../helpers';

const mapStateToProps = state => ({
  costRatio: getCostRatio(state),
  costValue: getCurrentCostTotal(state),
  incomeValue: state.balanceSheet.currentBalanceSheet.income,
  currentCosts: state.balanceSheet.currentBalanceSheet.costs,
  beforeCosts: state.balanceSheet.beforeBalanceSheet.costs,
  beforeDate: state.balanceSheet.beforeBalanceSheet.createdAt,
})

export default connect(
  mapStateToProps,
)(Home)
