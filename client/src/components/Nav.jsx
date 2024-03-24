import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

function Nav() {
    return(
        <div className="nav">
            <div className='nav-items'>
                <div className='nav-logo'>
                    <h1>STREAMING APP</h1>
                </div>
                <div className='nav-list'>
                    <a className='nav-link' href='#'>
                        <h3>Movies</h3> 
                    </a>
                    <a className='nav-link' href='#'>
                        <h3>TV Shows</h3> 
                    </a>
                    <a className='nav-link' href='#'>
                        <h3>Genres</h3> 
                    </a>
                    <a className='nav-link' href='#'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='fa-lg' />
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Nav;
