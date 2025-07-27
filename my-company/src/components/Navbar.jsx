import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#282c34', color: 'white', justifyContent: 'space-between', display: 'flex' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '15px' }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/services">Services</Link></li>
      </ul>
    </nav>
  );
};
export default Navbar;