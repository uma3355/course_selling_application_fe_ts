import { useEffect, useState } from "react"
import { TextField, Card, Button } from "@mui/material"

const AddCourse = () => {
    const [title, setTitle] = useState<String>("")
    const [description, setDescription] = useState<String>("")

    return <div style={{
        display: "flex",
        justifyContent: "center",
        border: "2px solid blue",
        margin: 100
    }}>
        <Card variant={"outlined"} style={{width: 400, padding: 20}}>
            
            <div style={{
                display:"flex",
                margin: 10
            }}>
        Add Course
            </div>
        <TextField
            onChange={(e) => {
                setTitle(e.target.value)
            }}
            fullWidth={true}
            label="Title"
            style={{
                margin: 10
            }}
        />
        <TextField
            onChange={(e) => {
                setDescription(e.target.value)
            }}
            fullWidth={true}
            label="Description"
            style={{
                margin: 10
            }}
        />
        <Button size={"large"}
            variant="contained"
            style={{
                margin:10
            }}
            onClick={()=>{
                fetch("http://localhost:3003/admin/courses",{
                    method:"POST",
                    body:JSON.stringify({
                        title:title,
                        description:description,
                        imageLink:"",
                        published:true
                    }),
                    headers:{
                        "Content-type":"application/json",
                        "Authorization":"Bearer "+localStorage.getItem("token")
                    }
                }).then(
                    (res)=>{
                        return res.json()
                    }
                ).then((data:coureseResBody)=>{
                    alert(data.courseId)

                })
            }}
            >
        Add Course
        </Button>
        </Card>
    </div>
}
interface coureseResBody{
    message:string,
    courseId:number
}

export default AddCourse