import './Header.css'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <header className='header'>
            {/* logo */ }
            <div className='logo'>
                <Link to='/'>
                <span className='logo-1'>K</span>
                <span className='logo-1'>G</span>
                <span className='logo-1'>B</span>
            </Link>
            </div>

            {/* busca */}
            <div className='search-bar'>
                <input type='text' placeholder='busque algo!!11!1!!!11' />
                <div className='location'>
                    <button className='search-btn'>
                        <ion-icon name="search"></ion-icon>
                    </button>
                </div>
            </div>
        </header>
    )
}