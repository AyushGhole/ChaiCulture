import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 min-h-[70vh]">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-heading text-4xl md:text-5xl text-brown mb-4">
        Brew the Royal Tradition
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="max-w-xl text-charcoal text-base md:text-lg mb-6">
        Chai Culture brings you premium instant chai inspired by royal Indian
        households — where tradition, warmth, and elegance are brewed into every
        cup.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-gold uppercase tracking-widest text-sm font-medium">
        Launching Soon
      </motion.div>
    </section>
  );
};

export default Hero;
