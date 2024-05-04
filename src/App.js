
import './App.css';
import Header from './Components/Header';
import AlluArjunBox from './Components/Allu-arjun-box';
import TrendingOffersContainer from './Components/trending-offers-container';
import TrainTicketsContainer from './Components/train-tickets-container';
import AppDownloadBox from './Components/app-download';
import Footer from './Components/Footer';
import SignUpOverlay from './Components/SignUpOverlay';

function App() {
  return (
    <>
      <Header />
      <AlluArjunBox />
      <TrendingOffersContainer />
      <TrainTicketsContainer />
      <AppDownloadBox />
      <Footer />
      <SignUpOverlay />
    </>
  );
}

export default App;
 
