import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className=" text-[#915eff]">Koray Adams</span>
          </h1>
          <p className={`${styles.heroSubTextText} mt-2 text-white-100`}>
            I am a resilient and disciplined individual who maintains a strong
            focus on achieving my goals until the desired outcome is met. I
            thrive on exceeding expectations and constantly pushing myself to go
            above and beyond. With a strong drive for success, I embrace a
            "lifetime learning " mindset, constantly seeking new opportunities
            for personal and professional growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
