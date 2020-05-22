import React from 'react'
import '../App.css';
import {Form, Col, Row, Button} from 'react-bootstrap';

class formularContact extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            fullName:'',
            company:'',
            email:'',
            Message: '',
            disabled: false,
            emailSent:null
        }
    }

    handleChange= (event) => {
        console.log(event)
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            disabled: true,
        })
    }


    render(){
        return (
            <div style={{paddingTop:'4em'}}>
                <h1> Page contact</h1>
                    <Form style={{width:'40%', margin:'auto', paddingTop:'3em', paddingBottom:'2em' }} onSubmit={this.handleSubmit}>
                        <Form.Group >  
                            <Row>
                                <Col>
                                <Form.Control id='full-name' name='name' type='text' value={this.fullName} onChange={this.handleChange} placeholder="NOM et Prénom" required />
                                </Col>
                                <Col>
                                <Form.Control id='company' name='company' type='text' value={this.state.company} onChange={this.handleChange} placeholder="Entreprise" required/>
                                </Col>
                            </Row>
                        </Form.Group >  
                        
                        <Form.Group >  
                            <Form.Control id='email' name='email' type='email' value={this.state.email} onChange={this.handleChange} placeholder="Email" required/>
                        </Form.Group >  

                        <Form.Group >
                            <Form.Control id='message' name='message' as="textarea" rows="3" value={this.message} placeholder="Votre message" required/>
                        </Form.Group>
                        
                        <Button className='d-inline-block' variant='secondary' type='submit' disabled={this.state.disabled}>
                            Envoyer
                        </Button>

                        {this.state.emailSent === true && <p style={{color: '#57A773', padding: '10px 15px'}}> Votre message a bien été envoyé.</p>}
                        {this.state.emailNotSent === false && <p style={{  color: '#EE6352', padding: '10px 15px'}}> Votre message n'a pu être envoyé.</p>}
                    </Form>
            </div>
        )
    }
}

export default formularContact