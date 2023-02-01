import './../index.css'

export default function Contents(props){
    return(<>
        <div className="contents">
            {/* Home */}

            <section style={{display:props.Home ? 'flex' : 'none'}}>
                <div className='intro-txt-box'>
                    <p>Hello, Welcome to my Portfolio!<br/> I'm Carl Hari Alisangco. An Inspiring Future Fullstack Developer</p>
                </div>

                <div className="intro-img-box">
                    <img src="profile.jpg"/>
                </div>
            </section>

            {/* About */}
            <section style={{display:props.About ? 'flex' :'none'}}>
                <div className="about-txt-box">
                   
                    <div className="personal-txt">
                    <label>Description</label>
                        <br />
                        <br />
                        <p>Hello There ! I'm Carl Hari Alisangco. Currently Honing my skills and taking Bachelor of Science Degree in Information Technology at RTU (Rizal Technological University) Boni Campus. I still have long way to go, So goodluck to me :D</p>
                    </div>
                    
                    <div className="technologies">
                    <label>Technologies</label>
                    <br />

                        <div className="techs">
                            <img src="html.png" alt="" />
                            <img src="css.png" alt="" />
                            <img src="js.png" alt="" />
                            <img src="node.png" alt="" />
                            <img src="php.png" alt="" />
                            <img src="python.png" alt="" />
                            <img src="tailwind.png" alt="" />
                            <img src="react.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="about-img-box">
                    <img src="profile.jpg"/>
                </div>
            </section>

             {/* Works */}
             <section style={{display:props.Works ? 'flex': 'none'}}>
                <div className="work-box">
                    <p>Works</p>
                    <div className="work-list">
                        <a href='https://github.com/carlalisangco/Todo-App-PHP-oop' target='_blank'><img src="project1.png" alt="" /></a>
                    </div>
                </div>
             </section>


             {/* Contact */}
            <section style={{display:props.Contact ? 'flex': 'none'}}>
                <props.Contact_Email/>
            </section>


            {/* Resume */}
            <section style={{display: props.Resume ? 'flex': 'none'}}>
                
            </section>
        </div>
    </>)
}