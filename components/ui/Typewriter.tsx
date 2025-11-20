'use client';

import { useState, useEffect, useCallback } from 'react';

interface TypewriterProps {
    strings: string[];
    typeSpeed?: number;
    backSpeed?: number;
    delay?: number;
    loop?: boolean;
    className?: string;
}

export default function Typewriter({
                                       strings,
                                       typeSpeed = 100,
                                       backSpeed = 50,
                                       delay = 2000,
                                       loop = true,
                                       className = '',
                                   }: TypewriterProps) {
    const [currentStringIndex, setCurrentStringIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    const type = useCallback(() => {
        const currentString = strings[currentStringIndex];

        if (!isDeleting) {
            // Typing forward
            if (currentText.length < currentString.length) {
                setCurrentText(currentString.substring(0, currentText.length + 1));
            } else {
                // Finished typing, wait before deleting
                setTimeout(() => setIsDeleting(true), delay);
            }
        } else {
            // Deleting
            if (currentText.length > 0) {
                setCurrentText(currentString.substring(0, currentText.length - 1));
            } else {
                // Finished deleting, move to next string
                setIsDeleting(false);
                if (loop || currentStringIndex < strings.length - 1) {
                    setCurrentStringIndex((prev) => (prev + 1) % strings.length);
                }
            }
        }
    }, [currentText, currentStringIndex, isDeleting, strings, delay, loop]);

    useEffect(() => {
        const timeout = setTimeout(
            type,
            isDeleting ? backSpeed : typeSpeed
        );

        return () => clearTimeout(timeout);
    }, [type, isDeleting, typeSpeed, backSpeed]);

    return (
        <span className={className}>
      {currentText}
            <span className="animate-pulse">|</span>
    </span>
    );
}
