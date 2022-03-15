import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardList from './CardList'
import { Container, Row } from 'react-bootstrap'
import Buttons from './Buttons'

const CardContainer = () => {
    const [baseUrl, setBaseUrl] = useState("https://rickandmortyapi.com/api/character")
    const [data, setData] = useState([]);
    const [dataUrl, setDataUrl] = useState([]);

    useEffect( () => {
        axios.get(baseUrl)
        .then( response => {
            setDataUrl(response.data.info);
            setData(response.data.results);
        } )
        .catch( error => console.log(error) )    
    }, [baseUrl])

    const nextList = () => setBaseUrl(dataUrl.next);
    const prevList = () => setBaseUrl(dataUrl.prev);
    
    return (
        <>
            <Buttons prevList={ prevList } nextList={ nextList } dataNext={dataUrl.next} dataPrev={dataUrl.prev} />
            <Container>            
                <Row>
                    { data.map( (el, key) =>  (
                        <CardList key={key} data={el}/>
                    ))}
                </Row>
            </Container>
            <Buttons prevList={ prevList } nextList={ nextList } dataNext={dataUrl.next} dataPrev={dataUrl.prev} />
        </>
    )
}

export default CardContainer