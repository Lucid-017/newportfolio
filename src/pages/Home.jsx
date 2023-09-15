import './css/Home.css'

 const Home = ()=>{

    return(
        <div className='body'>
            {/* intro */}
            <div className="screen">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                    {/* write up */}
                    <div className="home-title">
                        <h1>FRONTEND DEV.</h1>
                    </div>
                    <div className="text w-2/2 justify justify-items-cente">
                        <p>Greetings, Wanderer of the web! I am Uchenna </p> 
                        <p>and I <span className="font-bold" style={{color:'#f92e2d'}}>make websites.</span> </p>
                        <p>I invite you to delve into the kaleidoscopic world of my portfolio-a treasure trove of 
                            digital craftsmanship and creative wizardry
                        </p>
                    </div>
                    <div className="info mt-10">
                        <p>
                            <a href="#services">What i do</a>
                        </p>
                        <p>
                            <a href="#works">Works</a>
                        </p>
                        <p>
                            <a href="#contact">Contact</a>
                        </p>
                     </div>
                     <div className='home-text'>
                        <p>01</p>
                    </div>
                </div>
            </div>
          
            {/* section end */}
            {/* section begin */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center" id='services'>
                    <div className="home-title  ">
                        <h1>WHAT I DO.</h1>
                    </div>
                    <div className="text w-2/2">
                        <p>I handle the implementation of websites from the start, steering the wheel during the frontend 
                            development phase. I work with React, one of the most professional 
                            and efficient code frameworks you can find. What you need to bring is a vision. The rest is on me.
                        </p>
                    </div>
                    <div className='section-text'>
                        <p>02</p>
                    </div>
                
                {/* write up */}
            </div>
            {/* this section will swoop in with animation one by one */}
            <div className='grid grid-cols-1 md:grid-cols-2 items-center mt-5'>
                <div className="right"></div>
                <div className="text w-2/2">
                    <p>
                        A store to launch? A site to develop? Changes to make to your current website? 
                        We will work together to define what needs to be done!
                        Websites and Web Applications With The Goal Of Making 
                        he User's Interaction As Simple And Efficient As Possible
                    </p>
                </div>
                <div className="right"></div>
                <div className="text w-2/2 mt-10">
                    <p>
                        I've worked on dozens of projects ranging from landing pages to websites and highly complex web apps. 
                        I have a wide range of experience with custom animations, 
                        external code integration and F'insweet hacks employed on all kinds of projects.
                    </p>
                </div>
            </div>
            
            
        </div>
    )
 };

export default Home