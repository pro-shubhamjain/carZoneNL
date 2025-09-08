import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import './i18n';
import CarDetailsPage from './pages/CarDetailsPage';
import CompareCarPage from './pages/CompareCarPage';
import HomePage from './pages/HomePage';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div className="page-wraper">
            <div id="loading-area"></div>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/car-details/:id" element={<CarDetailsPage />} />
                <Route path="/compare" element={<CompareCarPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
