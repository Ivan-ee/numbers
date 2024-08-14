import {motion} from "framer-motion";

export const Main = () => {



    return (
        <div className="main-container">
            <div className="mobile">
                <div className="title">
                    <div>Numbers</div>
                </div>
                <div className="main">
                    <motion.div
                        animate={{ y: '-50vh' }}
                        transition={{
                            duration: 0.5,
                            ease: [0, 0.71, 0.2, 1],
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
                            animate={{ y: '-50vh' }}
                            transition={{
                                duration: 0.6,
                                delay:0.3,
                                ease: [0, 0.71, 0.2, 1],
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
                                animate={{ y: '-50vh' }}
                                transition={{
                                    duration: 0.5,
                                    delay:0.7,
                                    ease: [0, 0.71, 0.2, 1],
                                    scale: {
                                        type: "spring",
                                        damping:100,
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
        </div>
    );
};
