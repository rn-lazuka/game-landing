import {useEffect, useState} from 'react'

export default function useWindowSize() {
    const isSSR = typeof window === 'undefined';
    const [windowSize, setWindowSize] = useState<{width:number, height:number}>({
        width: isSSR ? 1920 : window.innerWidth,
        height: isSSR ? 1080 : window.innerHeight
    })

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                })
            };

            window.addEventListener('resize', handleResize)
            handleResize()
            return () => window.removeEventListener('resize', handleResize)
        }
    }, [])
    return windowSize
}
