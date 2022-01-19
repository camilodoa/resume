import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const ExperienceContainer = styled.div`
  margin: .25rem 0px;
`;

const ExperienceTitle = styled(Col)`
  font-size: 1.2em;
  font-weight: 450;
`;

const ExperienceSubtitle = styled(Col)`
  font-size: 0.9em;
  font-weight: 500;
  font-style: italic;
`;

const ExperienceLocation = styled(Col)`
  font-size: 0.9em;
  font-weight: 400;
`;

const ExperienceDate = styled(Col)`
  font-size: 0.9em;
  font-weight: 400;
  text-align: end;
`;

const ExperienceList = styled(Col)`
  margin-top: .25rem;
`;

const ExperienceListItem = styled.li`
  margin: .25rem 0px;
`;

const Experience = ({ title, subtitle, location, date, list }) => {
  return (
    <ExperienceContainer>
      <Row>
        <ExperienceTitle>{title}</ExperienceTitle>
      </Row>
      <Row>
        <ExperienceSubtitle>{subtitle}</ExperienceSubtitle>
      </Row>
      <Row>
        <ExperienceLocation>{location}</ExperienceLocation>
        <ExperienceDate>{date}</ExperienceDate>
      </Row>
      <Row>
        <ExperienceList>
          <ul>
          {list.map((elem, index) => (
            <ExperienceListItem key={'ExperienceItem' + index}>
              {elem}
            </ExperienceListItem>
          ))}
          </ul>
        </ExperienceList>
      </Row>
    </ExperienceContainer>
  );
};

export default Experience;
