import React, { Component } from 'react';
import axios from 'axios';
import Table from './Table';


export default class Studentlist extends Component{
    constructor(props){
        super(props);

        this.state = {business:[]};
    }
    componentDidMount(){
        // debugger;
        axios.get('http://localhost:8000/students/')
        .then(response=>{
            this.setState({business:response.data});
            // debugger;
        })
        .catch(function(error){
            console.log(error);
        })
    }

    Rowtab(){
        return this.state.business.map(function(object,i){
            return <Table obj={object} key={i}/>;
        });
    }

    render(){
        return(
            <div>
                <h4 align="center">Student List</h4>
                <table className="table table-striped" style={{marginTop:10}}>
                    <thead>
                        <tr>
                            <th>RollNo</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th colSpan="4"> Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        { this.Rowtab() }
                    </tbody>
                </table>
            </div>
        );
    }
}