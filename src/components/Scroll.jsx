import {useRef,useEffect} from 'react'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import './css/Scroll.css'
const Scroll = () => {
    const sectionRef = useRef(null)
    const triggerRef = useRef(null)

    gsap.registerPlugin(ScrollTrigger)
    useEffect(()=>{
        const pin = gsap.fromTo(sectionRef.current,{
            translateX:0
        },
        {
            translateX:'-300vw',
            ease:'none',
            duration:1,
            scrollTrigger:{
                trigger:triggerRef.current,
                start:'top top',
                end: '2000 top',
                scrub:1,
                pin:true
            }
        })
        return ()=>{
            pin.kill()
        }
    },[])
  return (
    <section className='scroll-section-outer mt-32'>
        <div ref={triggerRef}>
            <div ref={sectionRef} className="scroll-section-inner">
                <div className="scroll-section">
                    <h1>section 1</h1>
                </div>
                <div className="scroll-section">
                    <h1>section 2</h1>
                </div>
                <div className="scroll-section">
                    <h1>section 3</h1>
                </div>
                <div className="scroll-section">
                    <h1>section 4</h1>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Scroll