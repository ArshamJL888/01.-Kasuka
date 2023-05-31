import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import MainIntro from './Components/MainIntro/MainIntro';
import Companies from './Components/Companies/Companies';
import Features from './Components/Features/Features';
import Services from './Components/Services/Services';
import Invitation from './Components/Invitation/Invitation';
import Portfolios from './Components/Portfolios/Portfolios';
import Statistics from './Components/Statistics/Statistics';
import Management from './Components/Management/Management';
import Team from './Components/Team/Team';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <MainIntro />
      <Companies />
      <Features />
      <Services />
      <Invitation />
      <Portfolios />
      <Statistics />
      <Management />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
