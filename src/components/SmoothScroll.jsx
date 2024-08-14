import { useEffect } from "react";

const useSmoothScroll = (ref) => {
    useEffect(() => {
        const handleScroll = (e) => {
            const href = e.currentTarget.getAttribute('data-id');
            if (!href) return;

            const targetElement = document.querySelector(href);

            if (targetElement) {
                e.preventDefault();
                const yOffset = -100;
                const yPosition = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: yPosition, behavior: 'smooth' });
            }
        };

        const buttons = ref.current.querySelectorAll('[data-id]');
        buttons.forEach(button => button.addEventListener('click', handleScroll));

        return () => buttons.forEach(button => button.removeEventListener('click', handleScroll));
    }, [ref]);
};

export default useSmoothScroll;
