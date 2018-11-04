import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import DashboardView from './views/Dashboard.view';
import CityNewView from './views/CityNew.view';
import CityForecastView from './views/CityForecast.view';
import NotFoundHandler from './components/NotFoundHandler';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div className="container">
                    <Header />
                        <main>
                            <Switch>
                                <Route exact path="/" component={DashboardView} />
                                <Route exact path="/city/new" component={CityNewView} />
                                <Route exact path="/city/forecast/:cityId" component={CityForecastView} />
                                <Route path="*" component={NotFoundHandler} />
                            </Switch>
                        </main>
                    <Footer />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
