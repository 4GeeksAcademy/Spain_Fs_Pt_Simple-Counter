//import react into the bundle
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

const DigitCounter = () => {
    const [digit, setDigit] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => { 
            setDigit(prevDigit => prevDigit + 1);
        }, 1000);
        return () => clearInterval(interval); //limpia el digito cuando llega a 9
    }, []);
    return <Home digit={digit} />; };

ReactDOM.createRoot(document.getElementById('app')).render(<DigitCounter />);