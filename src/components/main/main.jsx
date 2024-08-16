import {motion} from "framer-motion";

export const Main = () => {

    const textVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                delay: 3.2,
                duration: 0.8,
            }
        }
    };

    return (
        <div className="page-container main-container" id={'main'}>
            <div className="mobile">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    className="title"
                >
                    <div>Numbers</div>
                </motion.div>
                <div className="main">
                    <motion.div
                        animate={{y: '-50vh'}}
                        transition={{
                            delay: 0.2,
                            duration: 1,
                            ease: [0, 0.4, 0.5, 1],
                            scale: {
                                type: "spring",
                                damping: 100,
                                stiffness: 100,
                                restDelta: 0.001
                            }
                        }}
                        className="block green-block medium_h3">
                        <div className="text">Дизайн</div>
                        <motion.div
                            animate={{y: '-50vh'}}
                            transition={{
                                delay: 1.2,
                                duration: 1,
                                ease: [0, 0.5, 0.2, 1],
                                scale: {
                                    type: "spring",
                                    damping: 100,
                                    stiffness: 100,
                                    restDelta: 0.001
                                }
                            }}
                            className="block red-block medium_h3">
                            <div className="text">Разработка</div>
                            <motion.div
                                animate={{y: '-50vh'}}
                                transition={{
                                    delay: 2.2,
                                    duration: 1,
                                    ease: [0, 0.5, 0.2, 1],
                                    scale: {
                                        type: "spring",
                                        damping: 100,
                                        stiffness: 100,
                                        restDelta: 0.001
                                    }
                                }}
                                className="block orange-block medium_h3">
                                <div className="text">Продвижение</div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            <div className="pc">
                <motion.div

                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    className="title"
                >
                    <div>Numbers</div>
                </motion.div>
                <motion.div
                    animate={{y: 230}}
                    transition={{
                        delay: 2.2,
                        duration: 1,
                        ease: [0, 0.5, 0.2, 1],
                        scale: {
                            type: "spring",
                            damping: 100,
                            stiffness: 100,
                            restDelta: 0.001
                        }
                    }}
                    className="block orange-block  medium_h3">
                    <div className="text">Продвижение</div>
                </motion.div>
                <motion.div
                    animate={{y: -290}}
                    transition={{
                        delay: 1.2,
                        duration: 1,
                        ease: [0, 0.5, 0.2, 1],
                        scale: {
                            type: "spring",
                            damping: 100,
                            stiffness: 100,
                            restDelta: 0.001
                        }
                    }}
                    className="block red-block medium_h3">
                    <div className="text">Разработка</div>
                </motion.div>
                <motion.div
                    animate={{y: -233}}
                    transition={{
                        delay: 0.2,
                        duration: 1,
                        ease: [0, 0.5, 0.2, 1],
                        scale: {
                            type: "spring",
                            damping: 100,
                            stiffness: 100,
                            restDelta: 0.001
                        }
                    }}
                    className="block green-block medium_h3">
                    <div className="text">Дизайн</div>
                </motion.div>
            </div>
        </div>
    );
};
