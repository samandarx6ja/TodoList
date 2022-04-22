import './style.css'
import List from './assets/components/List'
function App() {
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <List />
      </div>
      
      <div className="todo__tasks"></div>
    </div>
  )
}

export default App

