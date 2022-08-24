import JSONDATA from './NASDAQ_STOCK_SCREENER.json';
import './App.css';
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">

      <h1 className='title'>StocksRow</h1>

      <input type="text" placeholder='Enter name or ticker symbol here...' onChange={(event) => setSearchTerm(event.target.value)}/>
      <table>
        <tr>
          <th>Symbol</th>
          <th>Name</th>
          <th>Last Sale</th>
          <th>Net Change</th>
          <th>% Change</th>
          <th>Market Cap</th>
        </tr>
        {JSONDATA.filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (val.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||  val.Symbol.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
        }).map((val, key) => {
            return <tr>
                <td>{val.Symbol}</td>
                <td>{val.Name}</td>
                <td>{val['Last Sale']}</td>
                <td>{val['Net Change']}</td>
                <td>{val['% Change']}</td>
                <td>{val['Market Cap']}</td>
              </tr>
        })}
      </table>
      
    </div>
  );
}

export default App;
