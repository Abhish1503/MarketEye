import { exportDefaultDeclaration } from '@babel/types';
import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import CoinSummaryPage from './pages/CoinSummaryPage';
import CoinDetailPage from './pages/CoinDetailPage';

const App = ()=>{
    return(
        <div>
            <BrowserRouter>
                <Route exact path="/" component={CoinSummaryPage}/>
                <Route path="/coins/:id" component={CoinDetailPage}/>
            </BrowserRouter>
        </div>
    )
};

export default App;