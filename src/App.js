import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import SideBlock from './components/SideBlock';
import Category from './components/Category';
import {sideData, mainData} from './data';
import styled from 'styled-components';

const Aside = styled(Col)`
  background-color: #e8eef6;
  min-height: 100vh;
  padding-top: .5rem;
`;

const Main = styled(Col)`
  min-height: 100vh;
  padding-top: .5rem;
`;

const NameRow = styled(Row)`
  align-items: center;
  margin: .5rem 0px;
`;

const NameCol = styled(Col)`
  font-size: 2.5em;
  font-weight: 500;
  margin-left: .25rem .25rem .25rem .75rem;
`;

export default function App() {
  return (
    <Container fluid>
      <Row>
        <Aside
          lg={{span : 3, order : 1}}
          md={{span : 4, order : 1}}
          sm={{span : 12, order : 12}}
          xs={{span : 12, order : 12}}
        >
          {sideData.map((elem, index) => (
            <SideBlock title={elem['title']} list={elem['list']} key={'SideBlock' + index}/>
          ))}
        </Aside>
        <Main
          lg={{span : 9, order : 12}}
          md={{span : 8, order : 12}}
          sm={{span : 12, order : 1}}
          xs={{span : 12, order : 1}}
        >
          <NameRow>
            <NameCol sm={12} md={8} lg={8}>
              Camilo Ortiz
            </NameCol>
          </NameRow>
          <Row>
            <Col>
            {mainData.map((item, index) => (
              <Category
                header={item['header']}
                experiences={item['experiences']}
                key={'MainBlock' + index}
              />
            ))}
            </Col>
          </Row>
        </Main>
      </Row>
    </Container>
  );
}
