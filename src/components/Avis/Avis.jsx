import { useEffect } from "react";
import "./Avis.css";

export default function Avis() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.trustindex.io/loader.js?62d0b9c5263634873046e10fdb7";
        script.defer = true;
        script.async = true;

        // On l'attache directement à la div du widget
        const container = document.getElementById("trustindex-container");
        if (container) {
            container.appendChild(script);
        }

        return () => {
            if (container && script.parentNode === container) {
                container.removeChild(script);
            }
        };
    }, []);

    return (
        <div className="div_avis">
            <h2>Nos Avis</h2>
            {/* Ici Trustindex va se charger */}
            <div id="trustindex-container"></div>
        </div>
    );
}
