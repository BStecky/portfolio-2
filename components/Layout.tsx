// components/Layout/index.js

import { motion } from "framer-motion";

const Layout = ({ children }: { children: any }) => (
  <motion.div
    initial={{ y: -300, opacity: 0 }}
    animate={{ x: 0, y: 0, opacity: 1 }}
    exit={{ y: 300, opacity: 0 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 40,
    }}
    className="overflow-hidden"
  >
    {children}
  </motion.div>
);
export default Layout;
