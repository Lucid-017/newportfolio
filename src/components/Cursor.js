import { useEffect, useState } from 'react'
// import './Cursor.css'
import AnimatedCursor from "react-animated-cursor"


const Cursor = ()=>{

    return(
        <AnimatedCursor
            innerSize={10}
            outerSize={35}
            innerScale={1.2}
            outerScale={1.5}
            outerAlpha={0}
            hasBlendMode={true}
            innerStyle={{
                backgroundColor: 'black'
              }}
              outerStyle={{
                border: '3px solid black',
                mixBlendMode: 'exclusion'
              }}
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
    )
}

export default Cursor