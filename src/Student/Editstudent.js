import React from 'react';
import {Container ,Col ,Form  , FormGroup, Label ,Input,Button} from 'reactstrap';
import axios from 'axios';
import '../Student/Addstudent.css'

class EditStudent extends React.Component{
    constructor(props){
        super(props);
    this.onChageName   = this.onChageName.bind(this);
    this.onChageRollNo = this.onChageRollNo.bind(this);
    this.onChangeAge   = this.onChangeAge.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this); 
        this.state = {
            name:'',
            rol_number:'',
            age:'',
            gender:''
        }
    }

    componentDidMount(){
        // debugger
        // axios.get("http://localhost:8000/student/"+this.props.match.params._id)
        axios.get("http://localhost:8000/student/"+"601c3168bce83c72c3624eaa")
        .then(response=>{
            this.setState({
                name:response.data.name,
                rol_number:response.data.rol_number,
                age:response.data.age,
                gender:response.data.gender});
        })
        .catch(function (error){
            alert(error);
            
        })
    }

    onChageName(e){
        this.setState({
            name:e.target.value
        });
    }

    onChageRollNo(e){
        this.setState({
            rol_number:e.target.value
        });
    }

    onChangeAge(e){
        this.setState({
            age:e.target.value
        });
    }

    onChangeGender(e){
        this.setState({
            gender:e.target.value
        });
    }


    onSubmit(e){
        // debugger;
        e.preventDefault();
        // debugger
        const obj = {
            rol_number :this.state.rol_number,
            name:this.state.name,
            age:this.state.age,
            gender :this.state.gender

        };

        axios.put("student/"+this.props.obj._id,obj)
        .then(res=>alert("Successfully Edited"));
        // debugger;
        this.props.history.push('/Studentlist')
    }
    render(){
        return(
            <Container className="App">
                <h4 className="PageHeading">Update Student Information</h4>
                    <Form className="form" onSubmit={this.onSubmit}>
                        <Col>
                            <FormGroup row>
                                <Label for="name" sm={2}>Student Name</Label>
                                <Col sm={10}>
                                    <Input type="text" name="name" value={this.state.name} onChange={this.onChageName} placeholder="Your Name"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="roll_number" sm={2}>Roll No</Label>
                                 <Col sm={10}>
                                     <Input type="int" name='rol_number' value={this.state.rol_number} onChange={this.onChageRollNo} placeholder="Enter Role NO"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="age" sm={2}>Age</Label>
                                 <Col sm={10}>
                                     <Input type="int" name='age' value={this.state.age} onChange={this.onChangeAge} placeholder="Enter Age"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="gender" sm={2}>Gender</Label>
                                 <Col sm={10}>
                                     <Input type="text" name='gender' value={this.state.gender} onChange={this.onChangeGender} placeholder="Enter Your Gender"/>
                                </Col>
                            </FormGroup>
                        </Col>
                        <Col>
                        <FormGroup row>
                            <Col sm={5}></Col>
                            <Col sm={1}>
                                <Button type="submit" color="success">Submit</Button>
                            </Col>
                            <Col sm={1}>
                                <Button color="danger">Cancel</Button>
                            </Col>
                            <Col sm={5}></Col>
                        </FormGroup>
                        </Col>
                    </Form>
            </Container>
        );
    }
}

export default EditStudent;