import {Link} from 'react-router-dom'

const NavBar = ()=>{
    return(
    <div className='navbar'>
    <button>Light</button>
    <h1>Logo</h1>
    <ul>
    <li> <Link to='/men'>Men</Link></li>
    <li> <Link to='/women'>Women</Link></li>
    <li> <Link to='/kid'>Kids</Link></li>
    
    </ul>
   
    </div>
    )
}

export default NavBar