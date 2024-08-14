import { useEffect, useRef } from "react";

const useSmoothScroll = (ref) => {
    useEffect(() => {
        const handleScroll = (e) => {

            const href = e.currentTarget.getAttribute('href');

            if (href.startsWith('http://') || href.startsWith('https://')) {
                return;
            }

            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const yOffset = -100;
                const yPosition = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: yPosition, behavior: 'smooth' });
            }

        };

        const buttons = ref.current.querySelectorAll('a');
        buttons.forEach(button => button.addEventListener('click', handleScroll));

        return () => buttons.forEach(button => button.removeEventListener('click', handleScroll));
    }, [ref]);
};

export default useSmoothScroll;
