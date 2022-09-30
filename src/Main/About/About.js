import './About.css';

function About() {
  return (
    <>
      <div className='about-container'>
        <div className='about-img'>
          <img
            src='https://ld-wt73.template-help.com/intense/intense-financial-analytic/images/user-john-doe-598x624.png'
            alt=''
          />
        </div>
        <div className='about-desc'>
          <h2 className='about-heading'>Who we are!</h2>
          <p className='about-description'>
            Intense is an International Financial Planning company with offices
            in multiple jurisdictions over the world. Working with Intense gives
            me the ability to advise international expatriates living in the
            middle east from where I live in USA.
          </p>
          <p className='about-message'>
            - I am John Doe, a senior advisor for an independently owned
            financial planning company called Intense.
          </p>
          <p>
            <button>Contact us</button>
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
