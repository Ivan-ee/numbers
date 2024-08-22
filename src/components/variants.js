export const fadeIn = (direction, delay) => {
    return {
        hidden: {
            y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
            x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                delay: delay,
                ease: "easeInOut",
                damping: 30,
                stiffness: 100,
            }
        }
    }
}