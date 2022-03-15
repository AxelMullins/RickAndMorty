import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/" className="d-flex align-items-center">
                    <img
                    alt="Rick and Morty"
                    src={logo}
                    width="100"
                    height="100"
                    />{' '}
                    <h1 className='px-4'>Rick and Morty</h1>            
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header