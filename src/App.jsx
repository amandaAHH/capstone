import './App.css'
import Stockform from './components/Stockform'
import Stocklist from './components/Stocklist';
import AppContext from './components/AppContext';
import { useState } from 'react';

function App() {

  const [enterSS, setEnterSS] = useState("")
  const [enterQ, setEnterQ] = useState(0)
  const [enterPP, setEnterPP] = useState(0)
  const [currentPrice, setCurrentPrice] = useState(5)
  const [profitLoss, setProfitLoss] = useState(0)

  const [stocks, setStocks] = useState([])
  const addStock = (newStock) => {
    setStocks([...stocks, newStock])
  }

  return (
    <>
      <AppContext.Provider value={{
        enterSS,
        enterQ,
        enterPP,
        setEnterSS,
        setEnterQ,
        setEnterPP,
        currentPrice,
        setCurrentPrice,
        profitLoss,
        setProfitLoss,
        stocks,
        addStock
      }}>
        <h1 className="h1-style">Finance Dashboard</h1>
        <Stockform />
        <h2 className="h2-style">Stock List</h2>
        <Stocklist/>
      </AppContext.Provider>
    </>
  )
}

export default App;
