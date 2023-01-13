import "locomotive-scroll/dist/locomotive-scroll.css";
import { AnimatePresence } from "framer-motion";
import { useRef} from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import Home from "./sections/Home";
import Request from "./sections/Request";
import Footer from "./sections/Footer";
import GlobalStyles from "./styles/GlobalStyles";


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
                    <ScrollTriggerProxy />
                    <AnimatePresence>
                        <Home/>
                        <Request/>
                        <Footer/>
                    </AnimatePresence>
                </main>
            </LocomotiveScrollProvider>
        </>
    );
}

export default App;
