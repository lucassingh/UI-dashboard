import React from "react";
import { motion } from "framer-motion";

interface JumbotronProps {
    imageUrl: string;
    title: string;
}

const titleVariants = {
    offscreen: {
        scale: 0.8,
        opacity: 0,
    },
    onscreen: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.3,
        },
    },
};

export const JumbotronComponent: React.FC<JumbotronProps> = ({ imageUrl, title }) => {
    return (
        <div className="relative w-full h-[200px] overflow-hidden rounded-br-[16px] rounded-bl-[16px]">
            <div
                className="absolute inset-0 bg-cover bg-center animate-scale-infinite"
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-start pl-8 bg-black bg-opacity-40">
                <motion.h1
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={titleVariants}
                    className="text-white text-4xl font-bold"
                >
                    {title}
                </motion.h1>
            </div>
        </div>
    );
};