import React,{useState} from 'react';
import { useEffect } from 'react';
import "./Adminhome.css";
import { useHistory } from 'react-router';
import { Button, Container, Row, Col, DropdownButton} from 'react-bootstrap';
import Dropdown from '@restart/ui/esm/Dropdown';


export default function Adminhome() {
    const history = useHistory();
    const checkAuthentication = async () => {
        try {
            const response = await fetch('http://localhost:5000/adminhome', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await response.json();
            console.log(data);
            if (!response.status === 200) {
                throw new Error(response.error);
            }
        } catch (error) {
            console.log(error);
            history.push('/adminlogin');
        }

    }


    // useEffect(() => {
    //     checkAuthentication();
    // }, []);

    const [show,setShow]=useState(false)
    return (
        <div className="adminHome">
                <Container>
                    <Col>
                        <Row><Button variant="secondary" size="lg"  onClick={()=>setShow(!show)}>PDI Report</Button></Row>
                        
                        {show?<Row><Button variant="secondary" size="lg" onClick={event =>  window.location.href='/viewreport'}>View Report</Button></Row>:null}
                        {show?<Row><Button variant="secondary" size="lg" onClick={event =>  window.location.href='/editreport'}>Edit Report</Button></Row>:null}
                        {show?<Row><Button variant="secondary" size="lg" onClick={event =>  window.location.href='/submitreport'}>Submit Report</Button></Row>:null}
                        
                    
                    </Col>
                </Container>
        
            
        </div>
        
        
    )
}
/*<Row><Button variant="secondary" size="lg"  onClick={event =>  window.location.href='/pdireport'}>PDI Report</Button></Row>
<Row><Button variant="secondary" size="lg">View Report</Button></Row>
<Row><Button variant="secondary" size="lg">Edit Report</Button></Row>
<Row><Button variant="secondary" size="lg">Submit Report</Button></Row>*/
