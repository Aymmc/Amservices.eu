import { useEffect } from "react";
import './Avis.css'
export default function Avis() {
    useEffect(() => {
        // Injection du script Elfsight si pas déjà présent
        if (!document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]')) {
            const script = document.createElement("script");
            script.src = "https://static.elfsight.com/platform/platform.js";
            script.async = true;
            document.body.appendChild(script);
        }

        let intervalId;
        let attempts = 0;
        const maxAttempts = 10; // 10 * 500ms = 5s max

        const hideElement = () => {
            const el = document.querySelector('.WidgetTitle__Header-sc-c581efe-2.dNtlyB');
            if (el) {
                el.style.display = 'none';
                clearInterval(intervalId);
            } else {
                attempts++;
                if (attempts >= maxAttempts) {
                    clearInterval(intervalId);
                }
            }
        };

        intervalId = setInterval(hideElement, 500);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className="div_avis">
            <h2>Nos Avis</h2>
            <div
                className="elfsight-app-d0eab9b3-e90b-4c69-8340-5c70451d9086"
                data-elfsight-app-lazy
            ></div>
        </div>
    );
}
