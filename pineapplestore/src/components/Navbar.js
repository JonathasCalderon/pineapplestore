import './Navbar.css'
import logo from '../resources/logoColores.png'

const Navbar = () => {
  return (
    <div className='navbarContainer'>
      <img src={logo} alt="logo" className='logo'/>
      <div className='elements'>
        <div className='element'>Catalogo</div>
        <div className='element'>Contacto</div>
      </div>
    </div>
  )
}

export default Navbar