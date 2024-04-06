import {useContext, useEffect, useState} from "react";
import {ModelCrossContext} from "../context/ModelProvider";

/**
 * Это кастомный хук, который меряет ширину экрана
 */

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState(0);

    useEffect(() => {
        function handleResize() {
            setWindowSize(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        // Вызов handleResize для установки начального размера окна
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []); // Пустой массив зависимостей, чтобы эффект выполнялся только при монтировании

    return windowSize;
}