import React from 'react'
import '../App.css';
import { Card, Button } from 'react-bootstrap';
import {Col} from 'reactstrap';

const Project = () => {
        return (
            <div className="project" id='projets'>
                <h2 style={{textTransform: 'uppercase', fontWeight:'700'}}>Mes projets</h2>
                <hr style={{  borderTop:'5px inset gray',width: '25%', margin: 'auto'}} />
                <Col style={{  display:'flex', justifyContent:'center', flexFlow:'row wrap', margin:'auto ', paddingTop:'1em'}}>

                    <Card style={{ width: '18rem', margin: '20px auto' }}>
                        <Card.Img variant="top" src="./react.png" style={{height:'40%', objectFit:'cover'}} />
                        <Card.Body>
                            <Card.Title>Markedown</Card.Title>
                            <Card.Text style={{paddingTop:'1em'}}>
                            Création d'un éditeur de markdown avec un côté éditeur où on peut écrire du markdown avec
                                différentes mises en formes et de l'autre côté un rendu en HTML.  
                            </Card.Text>
                            <Button href="https://github.com/DemFb/Markdown-React" target="_blank"  variant="secondary">GitHub</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', margin: '20px auto' }}>
                        <Card.Img variant="top" src="./react.png" style={{height:'40%', objectFit:'cover'}} />
                        <Card.Body>
                            <Card.Title>Compteur Redux</Card.Title>
                            <Card.Text style={{paddingTop:'1em'}}>
                                  Manipuler la mécanique de Redux sous forme d'un compteur avec les fonctionnalités d'incrémentation,
                                  de décrémentation et de réinitialisation à 0.
                            </Card.Text>
                            <Button href="https://github.com/DemFb/Compteur" target="_blank"  variant="secondary">GitHub</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', margin: '20px auto' }}>
                        <Card.Img variant="top" src="./javascript.jpg" style={{height:'40%', objectFit:'cover'}} />
                        <Card.Body>
                            <Card.Title>Snake</Card.Title>
                            <Card.Text style={{paddingTop:'1em'}}>
                                 Création du jeux snake avec les fonctionnalités de base du jeu comme
                                 un système de colision avec le corps du serpent ou avec le mur et un
                                  ajout d'un système de score.
                            </Card.Text>
                            <Button href="https://github.com/DemFb/Snake" target="_blank"  variant="secondary">GitHub</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', margin: '20px auto' }}>
                        <Card.Img variant="top" src="./nodejs.png" style={{height:'40%', objectFit:'cover'}} />
                        <Card.Body>
                            <Card.Title>Bike Shop</Card.Title>
                            <Card.Text style={{paddingTop:'1em'}}>
                                  Création d'un site vitre e-commerce responsive. Ajout d'un catalogue
                                  produit et des fonctionnalités comme l'ajout au panier et un système
                                  d'achat avec stripe.
                            </Card.Text>
                            <Button href="https://github.com/DemFb/BikeShop" target="_blank"  variant="secondary" >GitHub</Button>
                        </Card.Body>
                    </Card>
   
                </Col>
            </div>
        )
    
}

export default Project;