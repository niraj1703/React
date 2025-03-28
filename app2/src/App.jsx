import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import './App.css'
function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
        <Header></Header> 
        <Home></Home> 
        <Category></Category> 
        <Byeer></Byeer> 
         <Myorder></Myorder> 
         <Contact></Contact> 
         <Seller></Seller>
         <Login></Login> 
         <Signup></Signup> 
         <Getstarted></Getstarted>
         <Sellerlogin></Sellerlogin>
        <Footer></Footer> 
        </>
    )
}


export default App
