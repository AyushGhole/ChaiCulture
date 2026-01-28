import Header from "./components/Header";
import Hero from "./components/Hero";
import EmailSignup from "./components/EmailSignup";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import "./App.css";

const Home = () => {
  return (
    <main className="relative overflow-hidden min-h-screen flex flex-col bg-gradient-to-b from-cream via-[#F3EEE6] to-[#EADFCB]">
      {/* Animated Royal Glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl top-32 left-1/2 -translate-x-1/2 pointer-events-none"
        animate={{ y: [0, 30, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <Header />
      <Hero />
      <EmailSignup />
      <Footer />
    </main>
  );
};

export default Home;
