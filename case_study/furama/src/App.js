import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import { Edit } from './components/service/Edit';
import { Create } from './components/service/Create';
import { NewContract } from './components/contract/NewContract';
// import { Create } from './components/customer/Create';
// import { Edit } from './components/customer/Edit';


function App() {
  return (
    <>
      <Header />,
      <Section />,
      <Footer />,
      {/* <Create></Create> */}
      {/* <Edit></Edit> */}
      {/* <Edit></Edit> */}
      {/* <Create></Create> */}
      {/* <NewContract></NewContract> */}
    </>

  );
}

export default App;
