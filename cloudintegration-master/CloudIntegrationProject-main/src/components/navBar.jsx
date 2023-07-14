

const Navbar = () => {
  return(
    <div>
      <div className="header">
          <input className="searchbox" type="text" placeholder="Search..."></input>

          <a className="links" href="#">
            Home
          </a>
          <a className="links" href="#">
            About
          </a>
          <a className="links" href="#">
            Services
          </a>
          Sign in 
      </div>
    </div>
  )
}

export default Navbar;