import React, {useLayoutEffect, useRef} from 'react';
import React, {useLayoutEffect,useRef} from 'react';
import {motion} from "framer-motion";
import gsap from "gsap"
import styled from "styled-components"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import Header from "../components/Header";
import Hero from "../components/Hero";
import WatchVideo from "./WatchVideo";
import Video from "./Video";
import About from "./About";
import OurCottages from "./OurCottages";
import OurPartners from "./OurPartners";
import OurCottages1 from "./OurCottages1";
import OurCottages2 from "./OurCottages2";


const Section = styled(motion.section)`
  min-height: 100vh;
  
`;

const Right = styled.div`
  position: absolute;
  left: 5%;
  min-height: 100vh;
  z-index: -1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Item = styled(motion.div)`
  display: flex;
  width: 100vw;
`;
const Home = () => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    const all = useRef(null);
    useLayoutEffect(() => {
        let element = ref.current;
        let scrollingElement = all.current;
        let pinWrapWidth = scrollingElement.offsetWidth;
        let t1 = gsap.timeline();
        setTimeout(() => {
            t1.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: "top top",
                    scroller: ".App",
                    invalidateOnRefresh: true,
                    // onUpdate: () => scrollingElement.pause(),
                    // onUpdate: () => {
                    //     gsap.set(scrollingElement.pause())
                    // },
                    scrub: 1,
                    pin: true,
                    markers: true,
                    end: `${pinWrapWidth} bottom`
                },
                height: scrollingElement,
                ease: "none",
            });
            t1.to(scrollingElement, {
                scrollTrigger: {
                    trigger: scrollingElement,
                    start: "top top",
                    scroller: ".App",
                    scrub: 1,
                    invalidateOnRefresh: true,
                    // pinSpacing: false,

                    markers: true,
                    end: `${pinWrapWidth} bottom`
                },
                x: -pinWrapWidth,
                ease: "none",
            });
        }, 1000);
    }, []);
`;
const Home = () => {


gsap.registerPlugin(ScrollTrigger);
const ref = useRef(null);
const all = useRef(null);
useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = all.current;
    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();
    setTimeout(() => {
        t1.to(element, {
            scrollTrigger: {
                trigger: element,
                start: "top top",
                end: `${pinWrapWidth} bottom`,
                scroller: ".App",
                scrub: 1,
                pin: true,
            },
            height: `${scrollingElement.scrollWidth}px`,
            ease: "none",
        });
        t1.to(scrollingElement, {
            scrollTrigger: {
                trigger: scrollingElement,
                start: "top top",
                end: `${pinWrapWidth} bottom`,
                scroller: ".App",
                scrub: 1,
            },
            x: -pinWrapWidth,
            ease: "none",
        });
    }, 1000);
}, []);

    return (
        <div>
             <Section ref={ref}  id="home">
                 <div>
                    <Header/>
                </div>
                <Right  data-scroll ref={all}>
                    <Item>
                         <Hero/>
                     </Item>
                    <Item>
                        <OurCottages />
                    </Item>
                    <Item>
                        <OurCottages1/>
                    </Item>
                    <Item>
                        <OurCottages2/>
                    </Item>
                     <WatchVideo/>
                   </Item>
                    <Item>
                         <Video/>
                     </Item>
                     <Item>
                         <About/>
                    </Item>
                     <Item>
                         <OurCottages/>
                     </Item>
                     <Item>
                             <OurCottages1/>
                     </Item>
                     <Item>
                             <OurCottages2/>
                     </Item>
                     <Item>
                         <KeyPersons/>
                     </Item>
                     <Item>
                         <OurPartners/>
                  </Item>
                </Right>
            </Section>
        </div>
    );
};

export default Home;