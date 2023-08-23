import {Button, Typography} from '@mui/material';
import {useNavigate} from "react-router-dom";
import  "../../style/course_selling_app.css"


interface AppbarProps{
    email:string|null,
    setEmail:(setEmail:string|null)=>void,
    isLoading:boolean
}
const Appbar = (props:AppbarProps)=> {
    let email:string|null = props.email;
    let setEmail:(setEmail:string|null)=>void=props.setEmail
    const navigate = useNavigate();
    // const [email, setEmail] = useState<String|null>(null)
    // const [isLoading, setIsLoading] = useState<boolean>(true)

    // useEffect(() => {
    //     fetch("http://localhost:3003/admin/me", {
    //         method: "GET", headers: {
    //             "Content-type": "application/json", "Authorization": "Bearer " + localStorage.getItem("token")
    //         }
    //     }).then((data) => {
    //         return data.json()
    //     }).then((res) => {
    //         console.log("inside useefect  "+email)
    //         console.log(res.username+"    yyy")
    //         if (res.username) {
    //             setEmail(res.username)
    //             setIsLoading(false)
    //         }
    //         console.log(res)
    //     })
    // }, []);

    console.log("outside useefect  "+email)

    const handleSignUpPageForUsers = ()=>{
        //navigate("/signup")
    }
    const handleSignUpPageForAdmins = ()=>{
        //navigate("/signup")
    }
if(props.isLoading){
    <></>
}
    if (email) {
        return <>
            <div style={{
                display: "flex", justifyContent: "space-between", padding: 4
            }}>
                <div>
                    <Typography>Coursera</Typography>
                </div>
                <div style={{display: "flex"}}>
                    <div style={{
                        marginRight: 10
                    }}>
                        <div>
                            
                        </div>
                        <div>
                            <Button
                            onClick={()=>{
                                navigate("/addCourses")
                            }}
                            >
                                Add Course
                            </Button>
                            <Button
                            onClick={()=>{
                                navigate("/courses")
                            }}
                            >
                                Courses
                            </Button>
                            {email}
                        </div>

                    </div>
                    <div>
                        <Button
                            variant={"contained"}
                            onClick={() => {
                                localStorage.removeItem("token")
                                navigate("/login")
                                setEmail(null)
                            }}
                        >logout</Button>
                    </div>
                </div>
            </div>

        </>
    } else {
        return <>
        <div className='navbar'>
            <div className='nav-heading'>
                {/* <a className='nav-heading-titles' href="#"><span>For Users</span></a>
                <a className='nav-heading-titles' href="#" ><span>For Admins</span></a> */}
                {/* <a className='nav-heading-titles' href="#"><span>For Universities</span></a>
                <a className='nav-heading-titles' href="#"><span>For Governments</span></a> */}
                <button
                className='nav-heading-titles' onClick={handleSignUpPageForUsers}
                ><span>For Users</span></button>
                <button
                className='nav-heading-titles' onClick={handleSignUpPageForAdmins}
                ><span>For Admins</span></button>
            </div>

            </div>
        </>
    }


}

export default Appbar;