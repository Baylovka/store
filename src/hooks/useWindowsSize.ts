'use client';

import { useState, useEffect } from 'react';

interface WindowSize {
    widthWindow: number;
    heightWindow: number;
}

export function useWindowSize(): WindowSize {
    const [size, setSize] = useState<WindowSize>({
        widthWindow: 0,
        heightWindow: 0,
    });

    useEffect(() => {
        function onResize() {
            setSize({
                widthWindow: window.innerWidth,
                heightWindow: window.innerHeight,
            });
        }

        window.addEventListener('resize', onResize);
        onResize();

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return size;
}
