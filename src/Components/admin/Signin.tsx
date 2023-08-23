import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Card, Typography} from '@mui/material';
function Signin(){
    return    <div>
        
            <div style = {{
                display:"flex",
                justifyContent:"center",
                paddingTop:150,
                marginBottom:15
            }}>
                <Typography variant={"h6"}>
                Welcome to coursera Signin below
                </Typography>
                
            </div>
        
        <div style = {{display:"flex",
                justifyContent:"center"}}>

        <Card variant="outlined" style={{ width:400, padding:20}}>
        <TextField 
        fullWidth={true}
        id="outlined-basic" 
        label="Username" 
        variant="outlined" />
        <br /><br />
        <TextField 
        fullWidth = {true}
        id="outlined-basic" 
        label="Password" 
        variant="outlined"
        type={"password"} />
        <br /> 
        <br />
        <Button size={'medium'} variant="contained">Sign in</Button>
    </Card>
        </div>
       
    </div>
}

export default Signin