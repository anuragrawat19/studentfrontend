import React from 'react';
import axios from 'axios';
import '../Student/Addstudent.css'  
import {Container ,Col ,Form  , FormGroup, Label ,Input,Button} from 'reactstrap';

class Addstudent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:"",
            rol_number:"",
            age:"",
            gender:""
        }
    }

    Addstudent =()=>{
        axios.post('http://localhost:8000/students/',{name:this.state.name, rol_number:this.state.rol_number, age:this.state.age , gender:this.state.gender}
        ).then(json=>{
            if(json.data.status ===2){
                console.log(json.data.status);
                alert("Student Data Saved Sucessfully");
                this.props.history.push('/Studentlist')
            }
            else{
                alert(json.data.message);
                // this.props.history.push("/Studentlist")
            }
            
        })
    }

    handleChange =(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    render(){
        return(
            <Container className="App">
                <h4 className="PageHeading"> Enter Student Information</h4>
                <Form className="form">
                    <Col>
                    <FormGroup row>
                        <Label for="name" sm={2}>Student Name</Label>
                        <Col sm={10}>
                            <Input type="text" name="name" onChange={this.handleChange} value={this.state.name} placeholder="Your Name"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="rol_number" sm={2}>Roll Number</Label>
                        <Col sm={10}>
                            <Input type="int" name="rol_number" onChange={this.handleChange} value={this.state.rol_number} placeholder="Your RollNo"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="age" sm={2}>Age</Label>
                        <Col sm={10}>
                            <Input type="int" name="age" onChange={this.handleChange} value={this.state.Age} placeholder="Your Age"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="gender" sm={2}>Gender</Label>
                        <Col sm={10}>
                            <Input type="text" name="gender" onChange={this.handleChange} value={this.state.gender} placeholder="Your Gender"/>
                        </Col>
                    </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup row>
                            <Col sm={5}>
                            </Col>
                            <Col sm={1}>
                                <button type="button" onClick={this.Addstudent} className="btn btn-success">Submit</button>
                            </Col>
                            <Col sm={1}>
                                <Button color="danger">Cancel</Button>{' '}  
                            </Col>
                            <Col sm={5}>
                            </Col>

                        </FormGroup>    
                    </Col>

                </Form>
            </Container>
        );
    }
}

export default Addstudent;