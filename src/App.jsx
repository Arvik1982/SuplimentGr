
import './App.css'
import getAllDataApi from './api/getAllData'

function App() {


  return (
  
      <div>
        <button onClick={()=>{getAllDataApi()}}>Get data</button>
      </div>
      
    
  )
}

export default App
