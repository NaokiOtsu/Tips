import { combineReducers } from 'redux'

const initialState = {
  currentBalanceSheet: {
    createdAt: '2018年6月',
    income: 300000,
    costs: [
      { value: 12000, name: '趣味', color: '#F44336' },
      { value: 15000, name: '保険', color: '#E91E63' },
      { value: 10000, name: '交際費', color: '#9C27B0' },
      { value: 10000, name: '家賃', color: '#673AB7' },
      { value: 30000, name: '食費', color: '#3F51B5' },
      { value: 60000, name: '雑費', color: '#2196F3' },
    ],
  },
  beforeBalanceSheet: {
    createdAt: '2018年5月',
    income: 200000,
    costs: [
      { value: 20000, name: '趣味', color: '#F44336' },
      { value: 10000, name: '保険', color: '#E91E63' },
      { value: 14000, name: '交際費', color: '#9C27B0' },
      { value: 50000, name: '家賃', color: '#673AB7' },
      { value: 10000, name: '食費', color: '#3F51B5' },
      { value: 10000, name: '雑費', color: '#2196F3' },
    ],
  },
};

// 支出
// {
//   id: 1, // 追加ごとにインクリメント
//   key: 'key1', // このkeyを元にデータを集計する
//   value: 1000, // 金額
//   name: '趣味', // 項目
//   date: '2018-05-05 00:00:00', // ○年○月○日 ○時○分のデータか
//   createdAt: '2018-05-05 00:00:00', // 作られた日
//   updatedAt: '2018-05-05 00:00:00', // 最後にupdateされた日
// }

// 収入
// {
//   id: 1, // 追加ごとにインクリメント
//   value: 300000, // 金額
//   date: '2018-05-05 00:00:00',  // ○年○月○日 ○時○分のデータか
//   createdAt: '2018-05-05 00:00:00', // 作られた日
//   updatedAt: '2018-05-05 00:00:00', // 最後にupdateされた日
// }

const state = {
  costs: [
    {
      id: 1,
      key: 'key1',
      value: 1000,
      name: '趣味',
      date: '2018-05-05 00:00:00',
      createdAt: '2018-05-05 00:00:00',
      updatedAt: '2018-05-05 00:00:00',
    }
  ],
  incomes: [
    {
      id: 1,
      value: 300000,
      date: '2018-05-05 00:00:00',
      createdAt: '2018-05-05 00:00:00',
      updatedAt: '2018-05-05 00:00:00',
    },
  ]
}

export default combineReducers({
  balanceSheet: (state = initialState) => state,
})
