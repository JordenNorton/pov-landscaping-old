import { useState, useEffect } from 'react';

const useTypingEffect = (text, typingSpeed = 150) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeoutId = setTimeout(() => {
                setIndex(index + 1);
            }, typingSpeed);

            return () => clearTimeout(timeoutId);
        }
    }, [index, text, typingSpeed]);

    return text.slice(0, index);
};

export default useTypingEffect;
