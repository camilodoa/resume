import React from 'react';
import UnstyledContainer from 'react-bootstrap/Container';
import Experience from './Experience';
import styled from 'styled-components';

const Container = styled(UnstyledContainer)`
  margin: 1rem 0px;
`;

const CategoryHeader = styled.span`
  font-size: 1.5em;
  font-weight: 450;
`;

const Category = ({ header, experiences }) => {
    return (
        <Container fluid>
            <CategoryHeader>{header}</CategoryHeader>
            {experiences.map((elem, index) => (
                <Experience
                  title={elem['title']}
                  subtitle={elem['subtitle']}
                  location={elem['location']}
                  date={elem['date']}
                  list={elem['list']}
                  key={'Experience' + index}
                />
            ))}
        </Container>
    );
}

export default Category;
