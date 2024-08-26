import AppContext from './AppContext';
import './Stockform.css'
import { useContext} from 'react';

const Stockform = () => {
    
    const {enterSS, enterQ, enterPP, setEnterSS, setEnterQ, setEnterPP, addStock, currentPrice, setCurrentPrice, profitLoss, setProfitLoss, setVisible} = useContext(AppContext)

    const handleStockChange = (event) => {
        setEnterSS(event.target.value)
    }

    const handleQuantityChange = (event) => {
        setEnterQ(event.target.value)
    }

    const handlePriceChange = (event) => {
        setEnterPP(event.target.value)
    }

    const handleButtonClick = () => {
        // if (apiError) {
        //     console.error("Invalid stock symbol, cannot add stock");
        //     return;
        // }

        addStock({
            enterSS,
            enterQ,
            enterPP,
            currentPrice,
            profitLoss
        });

        setEnterSS("");
        setEnterQ("");
        setEnterPP("");
    }

    // const [apiError, setApiError] = useState("")

    // useEffect(() => {
    //     fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${enterSS}&interval=5min&apikey=VXETX6EYSF396E5H`)
    //     .then(response => response.json())
    //     .then(data => {
    //         if (data["Invalid stock symbol"]) {
    //             setApiError("Invalid stock symbol")
    //             console.error("Error fetching data", data)
    //             setCurrentPrice("")
    //         } else if (data["Time Series (5min)"]) {
    //             setApiError("")
    //             const latestTime = Object.keys(data['Time Series (5min)'])[0]
    //             setCurrentPrice(data['Time Series (5min)'][latestTime]['1. open'])
    //             setProfitLoss((currentPrice - enterPP) * enterQ)
    //         }
    //     })
    //     .catch(error => {
    //         setApiError("Failed to fetch data from API")
    //         console.error("Fetch error", error)
    //     })
    // }, [apiError,enterSS, enterQ, enterPP]) //api can fetch but somehow my currentprice is a fixed amount

    setProfitLoss((currentPrice - enterPP) * enterQ) //placeholder since i can't get currentprice

    return(
        <div className="container">
            <input
                type="text"
                value={enterSS}
                onChange={handleStockChange}
                placeholder="Stock Symbol"
                className="stock-input"
            
            />
            <input
                type="number"
                value={enterQ}
                onChange={handleQuantityChange}
                placeholder="Quantity"
                className="quantity-input"
            />
            <input
                type="number"
                value={enterPP}
                onChange={handlePriceChange}
                placeholder="Purchase Price"
                className="price-input"
            />
            <button
                type="submit"
                className="button-style"
                onClick={handleButtonClick}>
                    Add Stock
            </button>
            {/* {apiError  && <div className="error-message">{apiError}</div>} */}
        </div>
    );
}


export default Stockform