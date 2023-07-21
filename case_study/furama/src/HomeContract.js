import Header from './components/common/Header';
import Section from './components/common/Section';
import Footer from './components/common/Footer';
import ContractList from './components/contract/ContractList';



// import { Create } from './components/customer/Create';
// import { Edit } from './components/customer/Edit';


function HomeContract() {
    return (
        <>
            <Header />
            <ContractList />
            <Footer />
        </>

    );
}

export default HomeContract;
