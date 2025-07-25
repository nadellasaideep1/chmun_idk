import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const aboutRef = useRef(null);
  const secGenRef = useRef(null);
  const principalRef = useRef(null);
  const chairmanRef = useRef(null);

  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const isSecGenInView = useInView(secGenRef, { once: true, amount: 0.3 });
  const isPrincipalInView = useInView(principalRef, { once: true, amount: 0.3 });
  const isChairmanInView = useInView(chairmanRef, { once: true, amount: 0.3 });

  useEffect(() => {
    const letters = document.querySelectorAll(".bounce-letter");
    letters.forEach((letter, index) => {
      letter.style.animationDelay = `${index * 0.1}s`;
      setTimeout(() => {
        letter.classList.remove("animate-bounce-once");
      }, index * 100 + 800);
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center pt-7 px-4 relative overflow-hidden">
<div className="relative z-10 flex items-center justify-center">
      {/* CHMUN Logo with Glow */}
      <div className="relative before:content-[''] pb-8 before:absolute before:inset-0 before:rounded-full before:bg-white before:blur-3xl before:opacity-20 md:before:blur-[32px] md:before:opacity-30 before:z-0">
        <motion.img
          src="/chmunlogo.png"
          alt="CHMUN Logo"
          className="w-60 h-60 md:w-50 md:h-50  mt-3 md:mt-4.5 mb-[-0.5rem] mx-auto block relative z-10"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>

        {/* CHMUN'25 Text */}
        <div className="text-7xl md:text-7xl lg:text-[200px] font-extrabold tracking-tight whitespace-nowrap z-10">
          {"CHMUN'25".split("").map((char, index) => (
            <span
              key={index}
              className="bounce-letter inline-block animate-bounce-once"
              style={{ animationDuration: "0.8s" }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* Date and Tagline */}
        <motion.p
          className="mt-6 text-xl md:text-2xl text-gray-300 whitespace-nowrap text-center z-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          August 23, 2025 - August 24, 2025
        </motion.p>

        <motion.p
          className="mt-2 text-2xl font-semibold text-yellow-300 z-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Create. Collaborate. Conquer.
        </motion.p>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        ref={aboutRef}
        className="py-12 bg-black"
        initial={{ opacity: 0 }}
        animate={isAboutInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-5xl font-extrabold text-white mb-6 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            About CHMUN
            <motion.span
              className="absolute bottom-[-0.8rem] left-0 w-20 h-1 bg-yellow-300"
              initial={{ x: -100, opacity: 0 }}
              animate={isAboutInView ? { x: 0, opacity: 0.75 } : { x: -100, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            />
          </motion.h2>
          <motion.p
            className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 50 }}
            animate={isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            CHMUN'25 is a prestigious Model United Nations conference bringing
            together passionate delegates to discuss and debate global issues.
            Join us for an unforgettable experience on 23rd and 24th August.
          </motion.p>
        </div>
      </motion.section>

      {/* Letter Sections */}
      {["chairman", "principal", "secGen"].map((role) => {
        const ref = { chairman: chairmanRef, principal: principalRef, secGen: secGenRef }[role];
        const inView = { chairman: isChairmanInView, principal: isPrincipalInView, secGen: isSecGenInView }[role];
        const heading = {
          chairman: "Letter from the Chairman",
          principal: "Letter from the Principal",
          secGen: "Letter from the Secretary General",
        }[role];
        const closing = {
          chairman: "Warm regards,\n[Chairman's Name]",
          principal: "Warm regards,\n[Principal's Name]",
          secGen: "Yours sincerely,\nPriyanshu Biswas",
        }[role];
        const letterBody = {
          chairman: (
            <>
              <p className="text-lg leading-relaxed mb-6 font-sans">
                Chairman letter
              </p>
            </>
          ),
          principal: (
            <>
              <p className="text-lg leading-relaxed mb-6 font-sans">
                Principal letter
              </p>
     
            </>
          ),
          secGen: (
            <>
              <p className="text-lg leading-relaxed mb-6 font-sans">
               Greetings delegates!
                It is with great pride and enthusiasm that the Organising Committee extends a warm invitation to you to attend CHMUN’25, hosted by Chrysalis High, Kadugodi. Scheduled to take place on 23rd and 24th of August, this prestigious conference promises to be a platform for young minds to engage in meaningful dialogue, critical problem-solving, and diplomacy. 
                <br /><br />
                CHMUN’25 brings together delegates from across schools to simulate international diplomacy, as they represent various nations and address pressing global issues, just as diplomats do on real-world stages.
                <br /><br />
                This year, delegates will plunge into six electrifying committees, each more thrilling than the last. From tackling global flashpoints in DISEC and power struggles in the UNSC, to igniting fiery ideological clashes in AIPPM and rewriting justice in the UNHRC and UNODC—CHMUN’25 pulls no punches. And for those daring enough, the CCC awaits, where chaos reigns and history is made in real time. With high drama, fierce diplomacy, and relentless crises, this year’s edition promises nothing short of a diplomatic battlefield.
              </p>

            </>
          ),
        }[role];

        return (
          <motion.section
            key={role}
            ref={ref}
            className="py-12 bg-black"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                className="text-5xl font-extrabold text-white mb-6 relative"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                {heading}
                <motion.span
                  className="absolute bottom-[-0.8rem] left-0 w-20 h-1 bg-yellow-300"
                  initial={{ x: -100, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 0.75 } : { x: -100, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                />
              </motion.h2>
              <motion.div
                className="bg-black/80 text-white p-8 rounded-lg shadow-xl border border-gray-700 max-w-3xl mx-auto md:mx-0"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              >
                <p className="text-lg leading-relaxed mb-6 font-sans">Dear Delegates,</p>

                {letterBody}
                <p className="text-lg leading-relaxed mb-2 font-sans">
                  {closing.split("\n")[0]}
                </p>
                <motion.p className="text-2xl font-serif">
                  {closing.split("\n")[1]}
                </motion.p>
              </motion.div>
            </div>
          </motion.section>
        );
      })}
    </div>
  );
}

export default App;
