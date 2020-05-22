import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquare, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    return (
  
        <div style={{paddingBottom: '4em', background: '#ADA996', 
        background: '-webkit-linear-gradient(to bottom, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996)',
        background: 'linear-gradient(to bottom, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996)',
        }} id='contact'>
            <h2 style={{textTransform: 'uppercase', fontWeight:'900', paddingTop:'1em'}}>À propos</h2>
            <hr style={{  borderTop:'5px inset gray',width: '25%', margin: 'auto'}} />

            <div style={{display:'flex',}}>
                <div style={{display:'flex', justifyContent:'center', paddingTop:'3em', width:'60%'}}>
                    <p style={{width:'80%'}}>
                        Bienvenue ! 
                        <br/>
                        <br/>
                        Je m’appelle Fabala, développeur Web Junior spécialisé sur la technologie JavaScript et ses 
                        frameworks, j'aime beaucoup apprendre à réaliser du côté front-end des sites design et
                         attractifs mais j’aime aussi réaliser des projets du côté back-end.
                        <br/>
                        <br/>
                          Passionné de sports, de nouvelles technologies et de programmation en quête
                          de challenges à relever sur des projets novateurs et à la découverte de nouvelles 
                          technologies à apprendre.
                        <br/>
                        <br/>
                        Je suis capable d'utiliser différentes technologies comme HTML, CSS, JavaScript ou 
                        Node JS, mais aussi les frameworks tel que React pour le Front-End et Express pour 
                        le Back-end. De rendre le site plus design avec Bootstrap et Reactstrap.
                    </p>
                </div>

                <div style={{display:'flex', flexFlow:'column wrap', paddingTop:'3em',}}>
                    <div style={{display:'flex', alignItems:'center',paddingLeft:'2em',}}>
                        <FontAwesomeIcon icon={faPhoneSquare} aria-hidden="true" style={{ padding:'8px 10px', 
                            fontSize:'4em', color:'gray'}} />
                        <h5>06 95 35 51 93</h5>
                    </div>

                    <div style={{display:'flex', alignItems:'center', paddingLeft:'2em',}}>
                        <FontAwesomeIcon icon={faEnvelopeSquare} aria-hidden="true" style={{ padding:'8px 10px', 
                            fontSize:'4em', color:'gray'}} />
                        <h5>dembele.fabala@gmail.com</h5>
                    </div>

                    <div style={{display:'flex', alignItems:'center', paddingLeft:'2em',}}>
                    <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" style={{ padding:'8px 10px', 
                        fontSize:'4em', color:'gray'}}/>
                        <h5>@dembelefabala</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About