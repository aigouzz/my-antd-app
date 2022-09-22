import { Button, DatePicker } from 'antd'
import { Header } from './components/Header'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Button type='primary'>点击</Button>
      <DatePicker></DatePicker>
    </div>
  );
}

export default App;
