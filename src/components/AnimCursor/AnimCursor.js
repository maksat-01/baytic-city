import React from 'react';
import AnimatedCursor from "react-animated-cursor";

const AnimCursor = () => {
    return (
        <div>
            <AnimatedCursor
                innerSize={9}
                outerSize={9}
                color='249, 61, 83'
                outerAlpha={0.8}
                innerScale={0.14}
                outerScale={5}
                clickables={[
                    'a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    '.link'
                ]}
            />

        </div>
    );
};

export default AnimCursor;