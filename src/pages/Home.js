import '../App.css';
import Jumbotron from '../components/Jumbotron';
import {Navbar} from '../components/Navbar';
import AboutUs from '../components/AboutUs';
import Product from '../components/Product';
import Footer from '../components/Footer';
import WhatsApp from '../components/Micro/WhatsApp';
import CopyRight from "../components/Micro/CopyRight";

function Home() {
  return (
    <>
      <div className='container mx-auto'>
        <Navbar />
        <Jumbotron />
        <AboutUs />
        <Product />
        <Footer />
        <WhatsApp />
        <CopyRight/>
      </div>
    </>
  );
}

export default Home;
