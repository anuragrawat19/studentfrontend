import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Table extends Component{
    constructor(props){
        super(props);
    }
    DeleteStudent = ()=>{
        console.log(this.props)
        axios.delete("http://localhost:8000/student/"+this.props.obj._id)
        .then(json=>{
            if(json.data.status ===2){
                alert("Student Detail Deleted Successfuly");
            }
            })
            }
    render(){
        return(
            <tr>
                <td>{this.props.obj.rol_number}</td>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.age}</td>
                <td>{this.props.obj.gender}</td>
                <td>
                    <Link to={"/StudentDetail/"+this.props.obj._id} className="btn btn-success">Edit</Link>
                </td>
                <td>
                    <button type="buton" onClick={this.DeleteStudent} className="btn btn-danger">Delete</button>
                </td>
            </tr>
          );
    }
}

export default Table;