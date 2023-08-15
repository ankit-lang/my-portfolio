import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import TypeWriter from "typewriter-effect";
import { BsArrowUpRight } from "react-icons/bs";
import me from "../assets/logo.png";

const Home = () => {


  const projectCount = useRef(null)

  const animationProjectCount = () =>{
    animate(0,20,{
      duration  :2,
      onUpdate : (v) =>projectCount.current.textContent = v.toFixed() 
    })
  }
  const animations = {
    h1: {
      initial: { x: "-100%", opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
    },
    button : {
      initial : {
        y :  '-100%',
      opacity : 0 
      },
      whileInView : {
        y :0,
        opacity :1
      }
    }
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}
              >
            Hi, I AM Ankit !
          </motion.h1>

          <TypeWriter
            options={{
              strings: ["A Developer", "A Designer", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
          <div>
            <a href="mailto:rankit2883@gmail.com">Hire Me</a>

            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <aside>
            <article>
              <p>+
              <motion.span whileInView={animationProjectCount} ref = {projectCount} > Project Done</motion.span>
             
              </p>
              <span>Projects Done</span>
              
            </article>
            <article data-special>
              <p>Contact</p>
              <span>rankit2883@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} className="homearrow" alt="Ankit " />
          
        
      </section>
    </div>
  );
};

export default Home;
