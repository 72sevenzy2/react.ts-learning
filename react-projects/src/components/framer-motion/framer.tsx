import type { JSX } from "react";
import { motion } from "framer-motion";

const Framer = (): JSX.Element => {
    return (
        <div>
            <motion.div
                whileHover={{ scale: 1.2, backgroundColor: "red" }}
                drag
                initial={{ opacity: 0, x: -100, y: 50 }}
                animate={{ opacity: 1, x: 100 }}
                style={{ background: "red", width: 40, height: 50 }}
                transition={{
                    type: "spring",
                    delay: 0.5,
                    ease: [0, 1, 1, 0],
                    repeatType: "mirror"
                }}
            >
                hello
            </motion.div>
        </div>
    )
};

export default Framer;