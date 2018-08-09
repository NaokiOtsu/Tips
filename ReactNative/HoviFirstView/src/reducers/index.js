import { combineReducers } from 'redux'

const initialState = {
  currentBalanceSheet: {
    createdAt: '2018年6月',
    income: 300000,
    costs: [
      { number: 40000, name: '趣味', color: '#F44336' },
      { number: 20000, name: '保険', color: '#E91E63' },
      { number: 20000, name: '交際費', color: '#9C27B0' },
      { number: 10000, name: '家賃', color: '#673AB7' },
      { number: 30000, name: '食費', color: '#3F51B5' },
      { number: 60000, name: '雑費', color: '#2196F3' },
    ],
  },
  beforeBalanceSheet: {
    createdAt: '2018年5月',
    income: 200000,
    costs: [
      { number: 20000, name: '趣味', color: '#F44336' },
      { number: 10000, name: '保険', color: '#E91E63' },
      { number: 10000, name: '交際費', color: '#9C27B0' },
      { number: 50000, name: '家賃', color: '#673AB7' },
      { number: 10000, name: '食費', color: '#3F51B5' },
      { number: 10000, name: '雑費', color: '#2196F3' },
    ],
  },
};

export default combineReducers({
  currentBalanceSheet: (state = initialState) => (state.currentBalanceSheet),
  beforeBalanceSheet: (state = initialState) => (state.beforeBalanceSheet),
})
