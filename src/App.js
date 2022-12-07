import './App.css';                         // imports style sheet
import Header from "./components/Header";   // imports header
import Body from './components/Body';       // imports body
import Footer from './components/Footer';   // imports footer


function App() {


    return(
        <>
        <div className='container-fluid'>
        <Header />
        <Body />
        <Footer />
        </div>
        </>

    )
}

export default App;