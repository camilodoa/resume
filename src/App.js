import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import SideBlock from './components/SideBlock';
import MainBlock from './components/MainBlock';
import {sideData, mainData} from './data';

export default function App() {
  return (
    <Container fluid>
      <Row>
        <Col className='aside full pt-2' lg={{span : 3, order : 1}} md={{span : 4, order : 1}} sm={{span : 12, order : 12}} xs={{span : 12, order : 12}}>
          {sideData.map((elem, index) => (
            <SideBlock title={elem['title']} list={elem['list']} key={'SideBlock' + index}/>
          ))}
        </Col>
        <Col className='full pt-2' lg={{span : 9, order : 12}} md={{span : 8, order : 12}} sm={{span : 12, order : 1}} xs={{span : 12, order : 1}}>
          <Row className="align my-2">
            <Col sm={12} md={8} lg={8} className='ml-2'>
              <b className='name m-1'>Camilo Ortiz</b>
            </Col>
          </Row>
          <Row>
            <Col>
            {mainData.map((item, index) => (
              <MainBlock header={item['header']} experiences={item['experiences']} key={'MainBlock' + index}/>
            ))}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
