import { cubicBezier, motion } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { MobileNavigation } from "./MobileNavigation";

const variants = {
  open: {
    left: "0",
    pointerEvent: "none",
    transition: {
      duration: 1,
      ease: cubicBezier(0.6, 0.01, -0.05, 0.9),
    },
  },
  closed: {
    left: "-100vw",
    pointerEvent: "none",
    transition: {
      delay: 1,
      duration: 1,
      ease: cubicBezier(0.6, 0.01, -0.05, 0.9),
    },
  },
};

export const Navigation = ({ isOpen, toggleOpen }: { isOpen: boolean, toggleOpen: () => void }) => {
  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="navigation-wrapper"
    >
      <MobileNavigation variants={variants} isOpen={isOpen} />
      <div
        data-scroll
        data-scroll-sticky
        data-scroll-target="#menu-target"
        className="menu-top"
      >
        <a href="/" className="brand-logo">
          <img
            className="brand-logo__icon"
            src="svg/soumya-logo.svg"
            alt="soumya logo icon"
            width={40}
          />
          <span className="brand-logo__text-wrapper">
            <img
              className="brand-logo__text"
              src="svg/soumya-logo-right.svg"
              alt="soumya logo text"
            />
          </span>
        </a>
        <MenuToggle toggle={toggleOpen} toggleState={isOpen} />
      </div>
    </motion.div>
  );
};
