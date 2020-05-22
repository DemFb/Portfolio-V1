import React from 'react';
import '../App.css';
import { Jumbotron } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faPhoneSquare, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';




const LandingPage = () =>  {

        return (
            <div>
                <Jumbotron className='landing-background'>
                    <h2 style={{fontWeight:'bold', fontSize:'50px', paddingTop:'1em'}}>Développeur Web FullStack Junior</h2>
                    <hr/>
                    <p style={{fontSize:'30px', fontWeight:'bold'}}>HTML - CSS | JavaScript | Node JS - Express | React | Bootstrap | MongoDB</p>
                    <p className="lead">
                        
                        <a  href="https://www.linkedin.com/in/fabala-dembele/" target="_blank" rel="noopener noreferrer"  className='logo'> 
                           <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" style={{ padding:'8px', 
                        fontSize:'5em', color:'gray'}}/>
                        </a> 
                    
                        <a href="https://github.com/DemFb?tab=repositories" target="_blank" rel="noopener noreferrer"  > 
                          <FontAwesomeIcon icon={faGithubSquare} aria-hidden="true" style={{ padding:'8px', 
                        fontSize:'5em', color:'gray', }}/>
                        </a>   

                        <a href="tel:+33695355193" rel="noopener noreferrer"  > 
                           <FontAwesomeIcon icon={faPhoneSquare} aria-hidden="true" style={{ padding:'8px' , 
                        fontSize:'5em', color:'gray'}} />
                        </a>

                        <a href="mailto:dembele.fabala@gmail.com" rel="noopener noreferrer"  > 
                          <FontAwesomeIcon icon={faEnvelopeSquare} aria-hidden="true" style={{ padding:'8px', 
                          fontSize:'5em', color:'gray'}} />
                        </a>              
                    </p>
                </Jumbotron>
          </div>
        )
    
}

export default LandingPage;