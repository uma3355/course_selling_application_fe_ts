import { useEffect, useState } from "react";
import { Card, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


export interface CourseBody {
    id?: number,
    title: string,
    description: string,
    imageLink?: string,
    published: boolean
}
const Courses = () => {
    const navigate = useNavigate();

    const [courses, setCourses] = useState<CourseBody[]>([])
    useEffect(() => {
        fetch("http://localhost:3003/admin/courses", {
            method: "Get",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then((data) => {
            return data.json()
        }).then((res) => {
            setCourses(res)
        })
    }, []);
    return <>
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center"
        }}>
            {courses.map((course) => {
                console.log(course)
                return <SingleCourse course={course} />
            })}
        </div>
    </>
}

export interface Courseprops {
    course: CourseBody
}
export function SingleCourse(props: Courseprops) {
    const navigate = useNavigate();
    return <div style={{
        display: "flex",
        justifyContent: "center"
    }}>
        <Card style={{
            margin: 10,
            width: 300,
            minHeight: 200
        }}>
            <Typography textAlign={"center"} variant="h5">{props.course.title}</Typography>
            <Typography textAlign={"center"} variant="subtitle1">{props.course.description}</Typography>
            <img src={props.course.imageLink} style={{
                width: 300
            }}></img>
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <Button
                    onClick={() => {
                        //navigate("/course/${courseId}")
                        let courseId = props.course.id
                        navigate(`/course/${courseId}`)
                    }}
                >
                    Edit
                </Button>
            </div>

        </Card>
    </div>
}


export default Courses