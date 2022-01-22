import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <Link to='/' className='titleLink'>Liked It?</Link>
            <Link to='/about' className='aboutLink'>About</Link>
        </div>
    )
}

export default Header
