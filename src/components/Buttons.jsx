import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container } from 'react-bootstrap'

const Buttons = ({prevList, nextList, dataPrev, dataNext}) => {
    return (
        <>
        <Container style={ { display: "flex" , justifyContent: "space-around", margin: "1rem auto 0 auto"} }>
            { dataPrev 
                ?   <button onClick={ prevList } style={ {backgroundColor: "transparent", border: "none", fontSize: "3rem"} }>
                        <FontAwesomeIcon icon={faCircleChevronLeft} />
                    </button>
                :   null
            }
            { dataNext 
                ?   <button onClick={ nextList } style={ {backgroundColor: "transparent", border: "none", fontSize: "3rem"} }>
                        <FontAwesomeIcon icon={faCircleChevronRight} />
                    </button>
                :   null
            }
            
        </Container>
        
        </>
    )
}

export default Buttons