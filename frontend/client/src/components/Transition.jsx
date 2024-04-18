import { motion } from 'framer-motion';

const transition = (Current) => {
    return () => (
        <>
            <Current />
            <motion.div
                className="slide-in"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 0.75, ease: [0.25, 1, 0.35, 1] }}
            ></motion.div>
            <motion.div
                className="slide-out"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.75, ease: [0.25, 1, 0.35, 1] }}
            ></motion.div>
        </>
    );
};

export default transition;