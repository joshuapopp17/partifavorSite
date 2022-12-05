import React from 'react'
import { Container } from 'react-bootstrap'
import NewsCard from '../components/cards/NewsCard'

function Home() {
  return (
    <Container>
        <div style={{backgroundColor: "#FF8F1C", height: 500, width: 'auto', padding: 10, borderRadius: 10}}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <h1 style={{color: 'white'}}>Plan, Manage, Party.</h1>
            </div>
        </div>
        <div style={{marginTop: 30}}>
            <h1>News and Updates</h1>
            <div>
                <NewsCard />
            </div>
        </div>
    </Container>
  )
}

export default Home