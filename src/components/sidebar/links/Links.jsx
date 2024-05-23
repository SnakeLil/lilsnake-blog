import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["博客主页", "msg", "文章", "联系", "关于"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        
        <motion.a  key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 ,color:'gray'}}
          whileTap={{ scale: 0.95 }}
        >
          <Link to='/'>
          {item}
          </Link>
        </motion.a>
        
      ))}
    </motion.div>
  );
};

export default Links;
