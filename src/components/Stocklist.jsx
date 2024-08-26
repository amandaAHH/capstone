import AppContext from './AppContext';
import './Stocklist.css'
import { useContext, useEffect, useState } from 'react';

const Stocklist = () => {
    const {stocks} = useContext(AppContext)
    const [NoStocks, setNoStocks] = useState(true);

    useEffect(() => {
        if (stocks.length > 0) {
            setNoStocks(false);
        } else {
            setNoStocks(true);
        }
    }, [stocks]);

    return(
        <div className="stock-list">
            {NoStocks && <p>No stocks added yet.</p>}
            {stocks.map((stock, index) => (
                <div key={index} className="stock-container">
                    <span>Symbol: {stock.enterSS}</span>
                    <span>Quantity: {stock.enterQ}</span>
                    <span>Purchase Price: {stock.enterPP}</span>
                    <span>Current Price: {stock.currentPrice}</span>
                    <span>Profit/Loss: {stock.profitLoss}</span>
                </div>
            ))}
        </div>
    );
}

export default Stocklist