import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="w-full px-6 py-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-heading font-bold text-brown">
        Chai Culture
      </motion.div>
    </header>
  );
};

export default Header;
