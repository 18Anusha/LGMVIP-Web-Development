import React,{useState} from 'react';
import "./App.css";
import "./card.css";
import {Button} from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import * as ReactBootstrap from 'react-bootstrap';
import { Nav, Navbar } from 'react-bootstrap';
import "./naavbar.css";


function App(){

  const [loading,setLoading] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [buttonClick, setButtonClick] = useState(false);
  const btnClick = async () => {
    try{
      setButtonClick(true);
      fetch('https://reqres.in/api/users?page=1')
      .then((response) => response.json())
      .then((json)=> {
        setCardData(json.data);
      })

      setInterval(()=> {
        setLoading(true);
      }, 1000);
    }

    catch(e){

      console.log(e)
    }
  };

  return (

    <>

      <nav className="navbar_section">
      <div className ="top_main_footer">

         <h2 id="main_title" >TEAM INFORMATION</h2>
          <React.Fragment>
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <div className="navbar">
          <Nav.Item ><Nav.Link href="/" >Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/">Projects</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/">Teams</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
          <Nav.Item> <button className="button" type="button" onClick={btnClick}>LOAD USERS</button></Nav.Item>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
         </React.Fragment>
         </div>
         </nav>

         <div className="container">
         <div className="row justify-ontent-center">

         {buttonClick ?
          (loading ? (<Cards cardData={cardData}/>): <ReactBootstrap.Spinner animation="border" />)
          :(<div className="main_footer"> LOAD USERS FOR INFORMATION </div> )
        }
        </div>
        </div>
        </>
    );
}

function Cards(props){

	return(

		<div className="cards">
		{props.cardData.map((person, index) => {

			return (

				<Card style={{width: "15rem"}}>
				<Card.Img variant="top" src={person.avatar} />
                <Card.Body>
                  <Card.Text>
                   <ul>
                     <li>{person.first_name} {person.last_name}</li>
                     <li>{person.email}</li>
                     <Button variant="primary" id="btn"> View</Button>
                     </ul>
                     </Card.Text>
                     </Card.Body>
                     </Card>

				);
		})}
		</div>

		);
}






    

export default App;