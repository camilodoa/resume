import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

export default function MainBlock ({header, experiences}) {
    return (
        <Container fluid className="my-3">
            <b className='header'>{header}</b>
            {experiences.map((elem, index) => (
                <MainSubBlock title={elem['title']} subtitle={elem['subtitle']} location={elem['location']} date={elem['date']} list={elem['list']} key={'MainSubBlock' + index}/>
            ))}
        </Container>
    );
}

function MainSubBlock ({title, subtitle, location, date, list}) {
    return (
        <div className='my-1'>
            <Row>
                <Col className='title'>{title}</Col>
            </Row>
            <Row>
                <Col className='subtitle'><i>{subtitle}</i></Col>
            </Row>
            <Row>
                <Col className='location'>{location}</Col>
                <Col className='date'>{date}</Col>
            </Row>
            <Row>
                <Col className='mt-1'>
                    <ul>
                    {list.map((elem, index) => (
                        <li className='my-1' key={'MainSubBlockItem' + index}>{elem}</li>
                    ))}
                    </ul>
                </Col>
            </Row>
        </div>
    );
}
