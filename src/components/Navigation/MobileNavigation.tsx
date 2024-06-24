import { cubicBezier, motion } from "framer-motion";
type Transition = {
  duration: number;
  ease: (t: number) => number;
  delay?: number;
};

type Variant = {
  left: string;
  pointerEvent: string;
  transition: Transition;
};

type Variants = {
  open: Variant;
  closed: Variant;
};
const openTransition = {
  duration: 1.1,
  delay: 1.2,
  ease: cubicBezier(0.6, 0.01, -0.05, 0.9),
};

const openTopTransition = {
  duration: 1.1,
  delay: 1.3,
  ease: cubicBezier(0.6, 0.01, -0.05, 0.9),
};

const openBottomTransition = {
  duration: 1.1,
  delay: 1.7,
  ease: cubicBezier(0.6, 0.01, -0.05, 0.9),
};

const closedTansition = {
  duration: 1,
  ease: cubicBezier(0.6, 0.01, -0.05, 0.9),
};

export const MobileNavigation = ({ variants, isOpen }: { variants: Variants, isOpen: boolean }) => (
  <motion.div
    data-scroll
    data-scroll-sticky
    data-scroll-target="#menu-target"
    variants={variants}
    className="menu-wrapper"
  >
    <motion.div
      animate={
        isOpen
          ? { opacity: 1, transition: openTransition }
          : { opacity: 0, transition: closedTansition }
      }
    >
      <motion.div
        animate={
          isOpen
            ? { opacity: 1, transition: openTopTransition }
            : { opacity: 0, transition: closedTansition }
        }
        className="navigation-top"
      >
        <div className="navigation-top__left">
          <h4 className="navigation-h4">DONT BE A STRANGER</h4>
          <div className="navigation-top__left--links">
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
              📸 IN
            </a>
          </div>
        </div>
        <div className="navigation-top__right">
          <h4 className="navigation-h4">HAVE AN IDEA?</h4>
          <a
            href="mailto:soumyagupta2068@gmail.com"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Tell me about it
          </a>
        </div>
      </motion.div>

      <motion.div
        animate={
          isOpen
            ? { opacity: 1, transition: openBottomTransition }
            : { opacity: 0, transition: closedTansition }
        }
        className="navigation-bottom"
      >
        <h4 className="navigation-h4">FEATURED PROJECTS</h4>
        <div className="navigation-bottom__projects">
          <a
            target="_blank"
            rel="noopener"
            href="https://Blackinfo.in/"
            className="navigation-bottom__projects-card"
          >
            <img src="12.jpg" alt="alexxandria" />
            <h2>
              Blackinfo
            </h2>
          </a>
          <a
            href="https://codelabs-kqli4prj1-qmint1.vercel.app/"
            target="_blank"
            rel="noopener"
            className="navigation-bottom__projects-card"
          >
            <img src="11.jpg" alt="safarika" />
            <h2>Codelabs</h2>
          </a>
          <a
            href="https://sanjeevni-front.vercel.app/"
            target="_blank"
            rel="noopener"
            className="navigation-bottom__projects-card"
          >
            <img src="13.jpg"/>
            <h2
            style={{
              textShadow: "2px 2px 15px #000000",
            }}>
              Sanjeevni Ai
            </h2>
          </a>
        </div>
        <div style={{height:"50px"}}></div>
      </motion.div>
    </motion.div>
  </motion.div>
);
