import { Instagram, Twitter, Facebook } from "@mui/icons-material";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center gap-4 pb-6">
      <div className="flex gap-6 text-brown">
        <Instagram className="cursor-pointer hover:text-gold transition" />
        <Twitter className="cursor-pointer hover:text-gold transition" />
        <Facebook className="cursor-pointer hover:text-gold transition" />
      </div>

      <p className="text-xs text-charcoal">
        © 2026 Chai Culture. All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
