import React from 'react'
import Container from 'react-bootstrap/Container'
import CardGroup from 'react-bootstrap/CardGroup'
import TeamCard from '../components/cards/TeamCard'

function Team() {
  return (
    <Container>
        <h1>Meet the team</h1>
        <CardGroup style={{gap: 20}}>
            <TeamCard
                name={"Joshua Popp"} 
                roles={["Founder", "Developer", "Creative Director"]}
                photo={"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"}
                message={"I want a Doner kebab so bad. Anyways, download partifavor LOL"}
                ></TeamCard>
            <TeamCard
                name={"Aaron Terraza"} 
                roles={["Creative Director", "Artist"]}
                photo={"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"}
                message={""}
                ></TeamCard>
            <TeamCard
                name={"Joahan Espinosa"} 
                roles={["Web-development intern"]}
                photo={"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"}
                message={""}
                ></TeamCard>
        </CardGroup>
    </Container> 
  )
}

export default Team