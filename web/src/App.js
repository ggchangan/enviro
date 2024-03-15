import './App.css';
import Deal  from './components/deal/Deal'
import StockList from "./components/stock/StockList";
import NotFound from './components/not_found/NotFound';

import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    render() {
        return (
            <div>
                <Router>
                    <Routes>
                        <Route path="/"  element={<StockList />} />
                        <Route path="/stock" element={<StockList />} />
                        <Route path="/deal" element={<Deal />} />
                        <Route path="*" element={<NotFound></NotFound>} />
                    </Routes>
                </Router>
            </div>
        );
    }
}


export default App;
