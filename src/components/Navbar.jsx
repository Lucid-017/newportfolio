import { Link } from "react-router-dom";
// import Logo from '../assests/Black_And_White_Rakia_Design_Studio_Logo-removebg-preview.png'
import '../components/css/Navbar.css'

const Navbar = ()=>{
    return(
        <nav className="navbar navbar-expand-lg py-10 fixed-top flex justify-between items-center">
            {/* logo */}
            <div>
                <Link to='/' className="logo">
                    <p>Onwuliri Uchenna</p>
                </Link>
            </div>
            
            <div className="flex content hidden md:flex">
                <Link to={'/'}>
                    <p>Welcome</p>
                </Link>
                <Link>
                    <p>Works</p>
                </Link>
                <Link to={'/contact'}>
                    <p>in regards to</p>
                </Link>
            </div>
           
        </nav>
    )
};

export default Navbar