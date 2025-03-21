import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface LayoutComponentProps {
    children: ReactNode;
}

const layoutVariants = {
    offscreen: {
        y: 20,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 60,
            damping: 15,
            delay: 0.2,
        },
    },
};

export const LayoutComponent: React.FC<LayoutComponentProps> = ({ children }) => {
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={layoutVariants}
            className="w-full p-10 h-auto relative"
        >
            <div className="w-[calc(100%-50px)] absolute top-[-25px] left-0 right-0 mx-auto bg-white rounded-[16px] h-auto shadow-lg">
                <div className="p-6">
                    {children}
                </div>
            </div>
        </motion.div>
    );
};
