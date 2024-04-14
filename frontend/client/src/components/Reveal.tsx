import React, {useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface Props {
    children: JSX.Element;
}

export const Reveal = ({ children } : Props ) => {
    const reference = useRef(null);
    const isInView = useInView(reference, { once: true });

    const loadScroll = useAnimation();
    
    useEffect(() => {
        if(isInView) {
            loadScroll.start("visible");
        }
    }, [isInView]);
    
    return (
        <div ref={reference}>
            <motion.div 
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={loadScroll}
                transition={{ duration: 0.5, delay: 0.25 }}>
                    { children }
            </motion.div>
        </div>
    );
};