import { Button } from "@mui/material"

function Landing() {
    return <div className='container'>
        <div className="inner-container">

            <div className='navbar-second'>
                <div >
                    {/* <img src="images/coursera_logo.png" className='logo' /> */}
                    <div className='logo'><span >Welcome to COURSERA</span></div>
                    {/* <div className='explore-dropdown'>
                    <button className='explore-btn'><span className='explore-span'>Explore</span></button>
                </div>
                <div>
                    <input type="text" placeholder="What do you want to learn" className='search-bar'/>
                </div> */}

                </div>

            </div>

            <div className='content-first'>
                <div className='content'>
                    <h1 className="heading">Learn without limits</h1>
                    <p className="paragraph">Advance your career with our course and solve real world problems</p>
                    {true && <button className="sign-butn"><span className="sign-span">Signup</span>
                    </button>}
                    {true && <button className="sign-butn"><span className="sign-span">Signin</span>
                    </button>}
                </div>
                <div>
                    <img src="images/CourseraLearners_C_Composition_Hillary_copy__3_.png" />
                </div>


            </div>
        </div>
    </div>

}
export default Landing