import "../pages/css/Contact.css";
const Contact = () => {
  return (
    <div>
      <div className="container">
        {/* intro */}
        <div className="title-primary">
          <div className="background-text about">ABOUT</div>
          <div className="background-text me">ME</div>
          <p>ONWULIRI UCHENNA</p>

          <p class="block text-end">LAGOS</p>
          <p class="block text-center">NIGERIA</p>
        </div>
        {/* about me, two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen my-auto mx-0 relative">
          <div className="left my-auto mx-0">
            {/* image */}
            <div className="title">
              <h2>MY BIO</h2>
            </div>
            <div className="image"></div>
          </div>
          <div className="right my-auto mx-0">
            {/* text */}
            <p>
              My name is Uchenna, I am a young developer living in Nigeria more
              precisely in Lagos, specialized in the creation of sites using
              HTML, CSS and Javascript and the React.Js framework.
            </p>
            <p>
              In each project, I focus on ease of navigation, layout and
              interactions, so that users have a pleasant experience on
              websites.
            </p>
            <p>
              In addition to my work, i write and produce songs and I like to
              play sports like football.
            </p>
          </div>
        </div>
        {/* leading to the skill section */}
        <div className="h-80 text-center my-auto mx-0">star icon</div>
        {/* skills */}
      </div>
      {/* animate on scroll */}
      <div className="skills">
        <div className="header py-10">
          <p>SKILLS - </p>
        </div>
        <div className="bg">
          {/* right */}
          <div className="skill">
            <ul className="skills-wrapper">
              <li>
                Html
                <span class="nbr">01</span>
              </li>
              <li>
                css/tailwind css
                <span class="nbr">02</span>
              </li>
              <li>
                vanilla javascript/ React.js
                <span class="nbr">03</span>
              </li>
              <li>
                Git
                <span class="nbr">04</span>
              </li>
              <li>
                SQL
                <span class="nbr">05</span>
              </li>
              <li>
                Node.js (in progress)
                <span class="nbr">06</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-80 text-center my-auto mx-0">star icon</div>
      <div className="contact footer">
        <div className="header py-10">
          <p>GET IN TOUCH</p>
        </div>
        <div className="h-screen mx-auto my-auto w-4/5">
          <div className="text-center">
            <div className="touch">
              <p>Would you like to hire me for a project?</p>
              <p>Click the email address to contact me</p>
              <p>
                I will contact you as soon as possible to better understand your
                needs and to move in the right direction.
              </p>
            </div>
            <div className="click">
              <a href="mailto:uchennaonwuliri@gmail.com" class="mail">
                <h1>&nbsp;Uchennaonwuliri@gmail.com -</h1>
              </a>
           </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
