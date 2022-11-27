import { Link } from 'react-router-dom'

const Navbar = () => {
return(
  <div>
    <Link to="/">Top</Link>
    <br/>
    <Link to="/base">Base Guitar</Link>
    <br/>
    <Link to="/nature">Nature</Link>
  </div>
)
}

export default Navbar;
