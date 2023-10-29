import {Link} from "react-router-dom"
import { logo } from "../../routes/imageRoutes" 
import "./navbar.css"

const Navbar = () => {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#000577"}}>
            <div className="container">
                <Link className='nav-link' to="/beranda"><img src={logo} alt="logo" style={{width: "90px"}}/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                <ul className="navbar-nav align-center">
                    <li className="nav-item">
                    <Link className='nav-link' to="/beranda"><p className="navtext">Beranda</p></Link>
                    </li>
                    <li className="nav-item">
                    <Link className='nav-link' to="/tentang"><p className="navtext">Tentang</p></Link>
                    </li>
                    <li className="nav-item">
                    <Link className='nav-link' to="/masuk"><p className="navtext">Masuk</p></Link>
                    </li>
                    <li className="nav-item">
                    <Link className='nav-link' to="/registrasi"><p className="navtext">Registrasi</p></Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar