import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Typewriter({ strings, typeSpeed, backSpeed, delay }) {
    const [currentStringIndex, setCurrentStringIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentString = strings[currentStringIndex];

        if (!isDeleting && currentText.length === currentString.length) {
            setTimeout(() => setIsDeleting(true), delay);
        } else if (isDeleting && currentText === '') {
            setIsDeleting(false);
            setCurrentStringIndex(prevIndex => (prevIndex + 1) % strings.length);
        } 

        const typingTimeout = setTimeout(() => {
            if (!isDeleting) {
                setCurrentText(currentText + currentString.charAt(currentText.length));
            } else {
                setCurrentText(currentString.substring(0, currentText.length - 1));
            }
        }, isDeleting ? backSpeed : typeSpeed);

        return () => clearTimeout(typingTimeout);
    }, [currentText, isDeleting, strings, typeSpeed, backSpeed, delay, currentStringIndex]);

    return (
        <span>{currentText}</span>
    );
}

Typewriter.propTypes = {
    strings: PropTypes.arrayOf(PropTypes.string).isRequired,
    typeSpeed: PropTypes.number,
    backSpeed: PropTypes.number,
    delay: PropTypes.number
};

Typewriter.defaultProps = {
    typeSpeed: 100,
    backSpeed: 50,
    delay: 1000
};

export default Typewriter;
