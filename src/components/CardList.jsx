import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Card, Col, ListGroup } from 'react-bootstrap'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

const CardList = ({data}) => {
    return (
        <>
            <Col xs={12} md={4} xl={3} className="g-4">
                <Card className='shadow h-100'>
                    <Card.Img variant="top" src={data.image} alt={data.name} />
                    <Card.Body>
                        <span style={ {position: "absolute", top: "0", right: "0", minWidth: "50px", height: "auto", backgroundColor: "grey", borderRadius: "50%", padding: "12.5px", textAlign: "center", color: "white", boxShadow: "1px 1px 4px 1px black"} }>{data.id}</span>
                        <Card.Title className="text-center">{data.name}</Card.Title>
                        <ListGroup variant="flush">
                            <ListGroup.Item >
                                <FontAwesomeIcon icon={faCircleNotch} /> {" "}
                                <b>Species: </b>{data.species}</ListGroup.Item>
                            <ListGroup.Item>
                                <FontAwesomeIcon icon={faCircleNotch} /> {" "}
                                <b>Status: </b>{data.status}</ListGroup.Item>
                            <ListGroup.Item>
                                <FontAwesomeIcon icon={faCircleNotch} /> {" "}
                                <b>Gender: </b>{data.gender}</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>               
            </Col>        
        </>
    )
}

export default CardList