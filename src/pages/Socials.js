import React from 'react'
import { Container } from 'react-bootstrap'
import {FaInstagram, FaYoutube, FaEnvelope} from 'react-icons/fa'
import '../style/Socials.css'

function Socials() {
  return (
    <div>
        <Container style={{marginBottom: 40, marginTop: 20}}>
            <h3>Follow us and stay in the loop. We sometimes even reply to comments!</h3>
            <h5>Maybe even slide in the DM's you silly goose.</h5>
        </Container>
        <Container>
            <h1 style={{color: "#FF8F1C"}}>Social Media</h1>
            <div style={{display: 'flex', flexDirection: 'column', gap: 30, width: '100%', justifyContent: 'center', alignItems: 'flex-start'}}>
                <div style={{marginLeft: 30}}>
                    <div class="socialLink" style={{display: 'flex', gap: 10,flexDirection: 'row', alignItems: 'center'}}> 
                        <FaInstagram size={40}/>
                        <h3>@partifavor_app</h3>
                    </div>
                    <div class="socialLink" style={{display: 'flex', gap: 10,flexDirection: 'row', alignItems: 'center'}}> 
                        <FaYoutube size={40}/>
                        <h3>@partifavor</h3>
                    </div>
                </div>
                <div>
                <h1 style={{color: "#FF8F1C"}}>Email</h1>
                    <div class="socialLink" style={{marginLeft: 30, display: 'flex', gap: 10,flexDirection: 'row', alignItems: 'center'}}> 
                        <FaEnvelope size={40}/>
                        <h3>contact@partifavor.com</h3>
                    </div>
                </div>
            </div>
        </Container>
    </div> 
  )
}

export default Socials