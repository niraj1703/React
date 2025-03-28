import { Link, NavLink } from 'react-router-dom'
import viteLogo from '/vite.svg'
import "../App.css";
function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <header  >
                <nav  >
                <Link to='/'>       
          <img src={viteLogo} className="logo" alt="Vite logo" />
          </Link>

                    <NavLink to="/"> Home</NavLink>
                    <NavLink to="/category" >Category </NavLink>
                   
                    <NavLink to="/"><input type="text" placeholder="Search..." /></NavLink>
                    <Link to='/seller'>Seller  </Link>
                    <Link to='/login'>Returns<br/>order  </Link>
                    <Link to='/myorder'>EN </Link>
                    <Link to="signup" >Sign Up</Link>
                    <Link to="login" > Get started </Link>
                    <NavLink to="/login">Profile </NavLink>
                </nav>
            </header>
        </>
    )
}


export default App