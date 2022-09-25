import './Header.css';
import Nav from './Nav';

function Header() {
  return (
    <div>
      <div className="header-container">
        <div className="logo">
         <img src="https://www.strunkmedia.com/wp-content/uploads/2018/05/bigstock-Print-163213010.png" alt=""/>
          </div>
        <div className="main-heading">
          <Nav/>
        </div>
        <div className="contact">
            Contact Us - +91 8743092589
        </div>
      </div>
    </div>
  );
}

export default Header;
