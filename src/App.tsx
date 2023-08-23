import Signup from './Components/admin/Signup.tsx'
import Signin from './Components/admin/Signin.tsx'
import Appbar from './Components/common/Appbar.tsx'
import AddCourse from './Components/admin/AddCourse.tsx'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Courses from "./Components/admin/Courses.tsx";
import Course from "./Components/admin/Course.tsx";
import {RecoilRoot} from "recoil";
import Landing from './Components/common/Landing.tsx'
import { useState, useEffect } from 'react'

function App() {
    //const [count, setCount] = useState(0)

    // return (
    //   <div style = {{
    //     width:"100vw",
    //     height:"100vh",
    //     background:"#eeeeee"
    // }}>
    //   <Appbar></Appbar>
    //   {/* <Signup></Signup> */}
    //   <Signin></Signin>

    //   </div>
    // )
    const [email, setEmail] = useState<string|null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        fetch("http://localhost:3003/admin/me", {
            method: "GET", headers: {
                "Content-type": "application/json", "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then((data) => {
            return data.json()
        }).then((res) => {
            if (res.username) {
                setEmail(res.username)
                setIsLoading(false)
            }
            console.log(res)
        })
    }, []);
    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            background: "#eeeeee"
        }}>
            <RecoilRoot>
                <Router>
                    <Appbar email={email} setEmail={setEmail} isLoading={isLoading}/>
                    <Routes>
                        <Route path="/login" element={<Signin/>}/>
                        <Route path="/signup" element={<Signup email={email} setEmail={setEmail}/>}/>
                        <Route path="/addCourses" element={<AddCourse/>}/>
                        <Route path="/courses" element={<Courses/>}/>
                        <Route path="/course/:courseId" element={<Course/>}/>
                        <Route path="/" element={<Landing/>} />
                    </Routes>
                </Router>
            </RecoilRoot>
        </div>

    )
}

export default App
