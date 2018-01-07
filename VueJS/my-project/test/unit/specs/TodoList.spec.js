import TodoList from '@/components/TodoList'

describe('TodoList.vue', () => {
  it('has a created hook', () => {
    expect(typeof TodoList.created).to.equal('function')
  })

  it('sets the correct default data', () => {
    expect(typeof TodoList.data).to.equal('function')
    const defaultData = TodoList.data()
    expect(defaultData.newTodo).to.equal('')
    expect(defaultData.todos.length).to.equal(0)
    expect(defaultData.visibility).to.equal('all')
  })
})
