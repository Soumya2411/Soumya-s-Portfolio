import  { useState } from 'react'
import { cubicBezier, motion } from "framer-motion";
import { Navigation } from '../components/Navigation/Navigation';
const transition: { duration: number; ease: (t: number) => number } = {
  duration: 1.4,
  ease: cubicBezier(0.6, 0.01, -0.05, 0.9),
  // ease: [0.6, 0.01, -0.05, 0.9],
};

const Home = () => {
  const [isToggleOpen, setIsToggleOpen] = useState<boolean>(false);
  const [speakerState, setSpeakerState] = useState("muted");
  function toggleBodyScroll(isToggleOpen: boolean) {
    if (isToggleOpen === false) {
      setIsToggleOpen(true);
    } else if (isToggleOpen === true) {
      setIsToggleOpen(false);
    }
  }
  const handleSpeaker = () => {
    const audio = document.querySelector("#audioPlayer") as HTMLVideoElement;

    if (speakerState === "muted") {
      setSpeakerState("unmuted");
      audio.pause();
    } else {
      setSpeakerState("muted");
      audio.play();
    }
  };

  return (
    <div className='body-wrap'>
      <motion.div
        data-scroll
        data-scroll-sticky
        data-scroll-target="#menu-target"
        animate={{ top: "-100vh", transition: { ...transition, delay: 9 } }}
        className="preloader"
      >
        <div className="preloader__wrapper">
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { ...transition } }}
            className="preloader__left"
          >
            <img src="svg/soumya-logo.svg" alt="Soumya-logo" style={{ fill: "white", color: "white", width: "70px" }} />
          </motion.div>
          <motion.div
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { ...transition } }}
            className="preloader__right"
          >
            <p className="preloader__text">HTML</p>
            <p className="preloader__text">CSS/SCSS</p>
            <p className="preloader__text">JAVASCRIPT</p>
            <p className="preloader__text">TYPESCRIPT</p>
            <p className="preloader__text">REACT JS</p>
            <p className="preloader__text">NEXT JS</p>
            <p className="preloader__text">FRAMER MOTION</p>
          </motion.div>
        </div>
      </motion.div>
      <Navigation
        isOpen={isToggleOpen}
        toggleOpen={() => toggleBodyScroll(isToggleOpen)}
      />
      <div className="header-wrapper">
        <header className="header">
          <div className="header__hero">
            <div className="header__hero--heading">
              <span>turning ideas into </span> <br />
              <span>real life </span>
              <span className="header__hero--heading-gradient">
                products{" "}
              </span>
              <br />
              <span>is my calling.</span>
            </div>
            <a
              data-scroll-to
              className="header__hero--cta"
              href="#sectionProjects"
            >
              VIEW PROJECTS
            </a>
          </div>
        </header>
        <div className="header__footer">
          <div className="header__footer--left">
            <div className="speaker">
              <div
                onClick={handleSpeaker}
                className={`${"speaker__toggle"} ${speakerState === "unmuted"
                  ? `${"speaker__toggle--anim"}`
                  : ``
                  }`}
              >
                &nbsp;
              </div>
              <div className="speaker__muted">
                <img src="svg/muted.svg" alt="muted icon" />
              </div>
              <div className="speaker__unmuted">
                <svg
                  width="14"
                  height="11"
                  viewBox="0 0 15 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.599976"
                    y="1.06665"
                    width="1.4"
                    height="10"
                    fill="#F2F2F2"
                    className="rect1-anim"
                  />
                  <rect
                    x="9"
                    y="1.06665"
                    width="1.4"
                    height="10"
                    fill="#F2F2F2"
                    className="rect2-anim"
                  />
                  <rect
                    x="4.79999"
                    y="1.06665"
                    width="1.4"
                    height="10"
                    fill="#F2F2F2"
                    className="rect3-anim"
                  />
                  {/* <rect
                      x="13.2"
                      y="1.06665"
                      width="1.4"
                      height="10"
                      fill="#F2F2F2"
                      className="rect4-anim"
                    /> */}
                </svg>
              </div>
            </div>
          </div>
          <div className="header__footer--right">
            <a
              href="https://github.com/soumya2411"
              rel="noopener"
              target="_blank"
            >
              👾 GH
            </a>
            <a
              href="https://www.linkedin.com/in/soumyagupta24/"
              rel="noopener"
              target="_blank"
            >
              💼 LD
            </a>
            <a
              href="https://www.instagram.com/soummmyaa/"
              rel="noopener"
              target="_blank"
            >
              {" "}
              📸 IN
            </a>
          </div>
        </div>
      </div>
      <main className="container">
        <p className="about-text">
          Hello stranger! 👋, my name is Soumya and I am a Full Stack engineer,
          passionate <br /> about digital products that help people experience
          everyday life, not endure it.
        </p>
        <section id="sectionProjects" className="section-projects">
          <h1 className="heading-1">
            <span>Yeah, I work hard </span> <small>💼</small>
          </h1>
          <p className="paragraph">
            Each project is unique. Here are some of my works.
          </p>

          <div className="project-card">
            <div className="project-card__left">
              <h4 className="heading-4">
                REACT JS, NODE JS, MONGODB, MAPGL
              </h4>
            </div>
            <div
              className="project-card__middle"
            // data-displacement="webp/myDistorsionImage.webp"
            >
              <img src="12.jpg" alt="logo" />
              <img src="2.png" alt="model" />
            </div>
            <div className="project-card__right">
              <h2
                data-scroll
                data-scroll-offset="35%"
                data-scroll-repeat={true}
                data-scroll-class="alexxandria-anim"
                className="heading-2"
              >
                Blackinfo
                <br />
              </h2>
              <a
                rel="noopener"
                target="_blank"
                href="https://blackinfo.in/"
                className="project-card__link"
              >
                VISIT THE WEBSITE
              </a>
              <div className="project-card__socials">
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://github.com/devrunch/blackinfo_frontend/"
                >

                  <img src="svg/github.svg" alt="github icon" />
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-card__left">
              <h4 className="heading-4">REACT JS, NODE JS, GOOGLE AI STUDIO, ELEVEN LABS</h4>
            </div>
            <div
              className="project-card__middle"
              data-displacement="webp/myDistorsionImage.webp"
            >
              <img src="13.jpg" alt="safarika logo" />
              <img src="3.png" alt="safarika" />
            </div>
            <div className="project-card__right">
              <h2
                data-scroll
                data-scroll-offset="35%"
                data-scroll-repeat={true}
                data-scroll-class="safarika-anim"
                className="heading-2"
              >
                Sanjeevni Ai
              </h2>
              <a
                rel="noopener"
                target="_blank"
                href="https://sanjeevni-front.vercel.app/"
                className="project-card__link"
              >
                VISIT THE WEBSITE
              </a>
              <div className="project-card__socials">

                <a
                  rel="noopener"
                  target="_blank"
                  href="https://github.com/devrunch/sanjeevni-backend"
                >
                  <img src="svg/github.svg" alt="github icon" />
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-card__left">
              <h4 className="heading-4">
                REACT JS, NODE JS, FRAMER MOTION
              </h4>
            </div>
            <div
              className="project-card__middle"
              data-displacement="webp/myDistorsionImage.webp"
            >
              <img src="11.jpg" alt="heatrow" />
              <img src="1.png" alt="heatrow logo" />
            </div>
            <div className="project-card__right">
              <h2
                data-scroll
                data-scroll-offset="35%"
                data-scroll-repeat={true}
                data-scroll-class="heatrow-anim"
                className="heading-2"
              >
                CodeLabs
              </h2>
              <a
                href="https://codelabs-kqli4prj1-qmint1.vercel.app/"
                rel="noopener"
                target="_blank"
                className="project-card__link"
              >
                VISIT THE WEBSITE
              </a>
              <div className="project-card__socials">
                <a href="#">
                  <img src="svg/dribble.svg" alt="dribble icon" />
                </a>
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://github.com/Soumya2411/Codelabs1"
                >
                  <img src="svg/github.svg" alt="github icon" />
                </a>
              </div>
            </div>
          </div>

          {/* <div className="project-card">
              <div className="project-card__left">
                <h4 className="heading-4">HTML, SCSS, JAVASCRIPT, GSAP</h4>
              </div>
              <div
                className="project-card__middle"
                data-displacement="webp/myDistorsionImage.webp"
              >
                <img src="webp/adeola-1.webp" alt="adeola model" />
                <img src="webp/adeola-2.webp" alt="adeola logo" />
              </div>
              <div className="project-card__right">
                <h2
                  data-scroll
                  data-scroll-offset="35%"
                  data-scroll-repeat={true}
                  data-scroll-class="adeola-anim"
                  className="heading-2"
                >
                  AdeolaAdeoti
                  <br /> version 1
                </h2>
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://github.com/adeolaadeoti/adeolaadeoti-portfolio"
                  className="project-card__link"
                >
                  VIEW SOURCE CODE
                </a>
                <div className="project-card__socials">
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://dribbble.com/shots/12338926-Adeola-Adeoti-Portfolio"
                  >
                    <img src="svg/dribble.svg" alt="dribble icon" />
                  </a>
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://github.com/adeolaadeoti/adeolaadeoti-portfolio"
                  >
                    <img src="svg/github.svg" alt="github icon" />
                  </a>
                </div>
              </div>
            </div> */}
        </section>
        {/* <section
            data-scroll
            data-scroll-offset="35%"
            data-scroll-repeat={true}
            data-scroll-class="section-reviews__bg"
            className="section-reviews"
          >
            <div className="section-reviews__top">
              <h1 className="heading-1">
                <span>Mmmm, a little brag </span> <small>😊</small>
              </h1>
              <p className="paragraph paragraph__sub">
                What people are saying about my last portfolio
              </p>
            </div>
            <div className="section-reviews__bottom">
              <div className="section-reviews__bottom-wrapper review-card__anim1">
                {reviews && reviews?.data.map((review: Ireply) => (
                  <div key={review.id} className="review-card">
                    <div className="review-card__top">
                      <div className="review-card__top--left">
                        <p className="review-card__p">{review.name}</p>
                        <h3 className="review-card__h3">{review.userName}</h3>
                      </div>
                      <div className="review-card__top--right">
                        <img src="svg/twitter.svg" alt="twitter icon" />
                      </div>
                    </div>
                    <div className="review-card__bottom">
                      <h2 className="review-card__h2">{review.reply}</h2>
                    </div>
                  </div>
                ))}
              </div> 
              <div className="section-reviews__bottom-wrapper review-card__anim2">
                {reviews?.data.sort().map((review: Ireply) => (
                  <div key={review.id} className="review-card">
                    <div className="review-card__top">
                      <div className="review-card__top--left">
                        <p className="review-card__p">{review.name}</p>
                        <h3 className="review-card__h3">{review.userName}</h3>
                      </div>
                      <div className="review-card__top--right">
                        <img src="svg/twitter.svg" alt="twitter icon" />
                      </div>
                    </div>
                    <div className="review-card__bottom">
                      <h2 className="review-card__h2">{review.reply}</h2>
                    </div>
                  </div>
                ))}
              </div> 
            </div>
          </section> */}
        <section className="section-contact">
          <h1 className="heading-1">
            <span>Sold Yet? </span> <small>🤙</small>
          </h1>
          <h2 className="section-contact__h2">
            Thanks for stopping by, I’m currently looking to join a new team
            of creative designers and developers. If you think we might be a
            good fit for one another, send me an
            <a
              href="mailto:soumyagupta2068@gmail.com"
              rel="noopener"
              target="_blank"
            >
              &nbsp; email 📧
            </a>
            .
          </h2>
        </section>
        <section className="section-socials">
          <h1 className="heading-1">
            <span>Dont be a stranger!</span> <small>👋</small>
          </h1>
          <p className="paragraph">Connect with me online</p>
          <div className="section-socials--links">
            <a
              href="https://github.com/soumya2411"
              rel="noopener"
              target="_blank"
            >
              👾 GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/soumyagupta24/"
              rel="noopener"
              target="_blank"
            >
              💼 LinkedIn
            </a>
            <a
              href="https://www.instagram.com/soummmyaa/"
              rel="noopener"
              target="_blank"
            >
              📸 Instagram
            </a>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px"
        
        }}>
          <img
            src="svg/soumya-logo.svg"
            alt="design and devloped by Soumya"
            width={40}
          />
          <img
            src="svg/soumya-logo-right.svg"
            alt="design and devloped by Soumya"
            
          />
        </div>
        <div className="footer__socials">

          <a
            href="https://github.com/soumya2411"
            target="_blank"
            rel="noopener"
          >
            <img src="svg/github.svg" alt="github logo" />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Home
