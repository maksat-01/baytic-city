import "locomotive-scroll/dist/locomotive-scroll.css";
import {useRef} from "react";
import {LocomotiveScrollProvider} from "react-locomotive-scroll";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import Home from "./sections/Home";
import Request from "./sections/Request";
import Footer from "./sections/Footer";
import GlobalStyles from "./styles/GlobalStyles";
import KeyPersons from "./sections/KeyPersons";
import React from "react";


function App() {
    const containerRef = useRef(null);
    return (
        <>
            <GlobalStyles/>
            <LocomotiveScrollProvider
                options={{
                    smooth: true,
                    smartphone: {
                        smooth: true,
                    },
                    tablet: {
                        smooth: true,
                    },
                }}
                watch={
                    []
                }
                containerRef={containerRef}
            >
                <main className="App " data-scroll-container="" ref={containerRef}>
                    <ScrollTriggerProxy/>
                    <Home/>
                    <KeyPersons/>
                    <Request/>
                    <Footer/>
                </main>
            </LocomotiveScrollProvider>
        </>
    );
}

export default App;
