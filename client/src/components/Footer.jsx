import Logo from "../resources/logo_white.png"
import "../styling/footer.scss"

const Footer = () => {
  return (
    <footer>
      {/* <Link className='link' to="/contact">Contact</Link> */}
      <img src={Logo} alt="logo" />
      <span>© 2023 - 2025</span>
    </footer>
  );
}

export default Footer