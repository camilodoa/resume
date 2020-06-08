import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import SideBlock from './components/SideBlock';
import MainBlock from './components/MainBlock';
import me from './me.jpg';

export default function App() {
  const sideData = [
    {title : 'Contact',
    list : ['Chicago, IL',
      <a href='mailto:camilodortiz@gmail.com'>camilodortiz@gmail.com</a>,
      <a href='https://camilodoa.ml'>camilodoa.ml</a>,
      <a href='https://www.linkedin.com/in/camilodortiz/'>linkedin.com/in/camilodortiz/</a>,
      <a href='https://github.com/camilodoa'>github.com/camilodoa</a>]},
    {title : 'Projects',
    list : [<a href='https://ai-melts-ice.ml'>AI Melts ICE</a>,
      <a href='https://github.com/camilodoa/deig'>Deep Evolutionary Image Generation</a>,
      <a href='https://lunarbaby.ml'>Lunar Baby</a>]},
    {title : 'Programming Languages',
    list : ['Python', 'JavaScript', 'Java', 'Clojure', 'Brainf*ck']},
    {title : 'Frameworks',
    list : ['TF/Keras', 'React', 'Flask', 'Spring Boot']},
    {title : 'Native Languages',
    list : ['English', 'French', 'Spanish']}
  ];

  const mainData = [
    {header : 'Education',
    experiences : [
      {title : 'Amherst College',
      subtitle : 'Bachelor of Arts in Computer Science',
      location : 'Amherst, MA, USA',
      date : 'Class of 2020',
      list : [
        <div>Major GPA: 3.96</div>,
        <div>Cumulative GPA: 3.56</div>,
        <div>Relevant Coursework (CS): Algorithms, Computer Security, Evolutionary Computation, Artificial Intelligence</div>,
        <div>Relevant Coursework (Math): Multivariable Calculus, Discrete Math, Linear Algebra, Differential Equations</div>,
        <div>Relevant Coursework (Physics): Modern Physics, Signals and Noise Lab, Statistical Mechanics and Thermodynamics</div>
      ]}
    ]},
    {header : 'Experience',
    experiences : [
      {title : 'Assistant Researcher',
      subtitle : 'University of Oxford, Department of Computer Science',
      location : 'Oxford, UK',
      date : 'Summer 2019, Winter 2020',
      list : [
        <div>
          Developed and deployed a <a href="http://pdq-webapp.cs.ox.ac.uk/react-ui/">full-stack web application</a> for
          Professor Michael Benedikt's <a href="http://www.cs.ox.ac.uk/projects/pdq/home.html">
            PDQ
          </a> (Proof-Driven Querry Planning) application in
          JavaScript (React.js) and Java (Spring).
        </div>,
        <div>
          Implemented a Spring Boot RESTful API supported by existing PDQ application architectures.
        </div>,
        <div>
          Front end facilitated selecting a database schema,
          writing/selecting an SQL query, and generating, running,
          and exporting the most efficient query-plans.
        </div>
      ]},
      {title : 'Summer Undergraduate Research Fellow',
      subtitle : 'Amherst College, Department of Physics',
      location : 'Amherst, MA, USA',
      date : 'Summer 2018',
      list : [
        <div>
          Designed and built a <a href="https://drive.google.com/file/d/1olpZv4bcsH1xi3PuQgEMsFE5hA1PjX7l/view?usp=sharing">
            precise bidirectional current
            control system
          </a> for delicate magnetic field manipulation
          in a Bose-Einstein Condensate machine.
        </div>,
        <div>
            Formed topological excitations in the F=1 and F=2 ground states of
            Rubidium 87 condensates using the aforementioned current
            control system.
        </div>,
        <div>
            Related <a href="https://www.nature.com/articles/nphys3624">paper</a> on these excitations published in Nature.
        </div>
      ]},
      {title : 'Curatorial Intern',
      subtitle : 'Mead Art Museum',
      location : 'Amherst, MA, USA',
      date : 'Summer 2018',
      list : [
        <div>
            Collaborated with Mead Art Museum Curator Vanja Malloy
            on <a href='https://www.amherst.edu/museums/mead/exhibitions/2019/Dimensionism'>Dimensionism: Modern Art in the Age of Einstein</a>.
        </div>,
        <div>
          Researched and wrote labels for over twenty works shown at
          the exhibition, which opened both at the Berkeley
          Art Museum and Pacific Film Archive and at
          the Mead Art Museum.
        </div>,
        <div>
          <a href="https://www.forbes.com/sites/jonathonkeats/2019/02/28/dimensionism/?fbclid=IwAR1J25yxGDn2EDGLJJWDLUHb6tJLHjm2PSwitp_lV_VEoD2C1PhFMwzcMcI#34d794b27b0f">
            Article
          </a> written by Jonathon Keats for Forbes on the exhibition.
        </div>
      ]}
    ]},
    {header : 'Projects',
    experiences : [
      {title : <a href='https://ai-melts-ice.ml'>AI Melts ICE</a>,
        subtitle : 'Python and JavaScript',
        location : 'Oxford, UK',
        date : 'Winter 2020 - Present',
        list : [
          <div><a href='https://ai-melts-ice.ml'>AI Melts ICE</a> is a prediction tool for ICE arrests.</div>,
          <div>The underlying model is an LSTM neural network trained on data (2014 - 2018) from Syracuse's <a href="https://trac.syr.edu/phptools/immigration/arrest/about_data.html">TRAC web API</a>.</div>,
          <div>The optimal model used in production was found through an evolutionary process of mutation, recombination, and assessment.</div>,
          <div>It's <a href='https://github.com/camilodoa/ai-melts-ice'>open source</a>.</div>
        ]},
        {title : <a href='https://lunarbaby.ml'>Lunar Baby</a>,
        subtitle: 'JavaScript',
        location : 'Amherst, MA, USA',
        date : 'Spring 2020',
        list : [
          <div><a href='https://lunarbaby.ml'>Ra</a> is a q-learning agent that lives in the browser.</div>,
          <div>Over time, it learns to approach the concentric circles in the center of its world.</div>,
          <div>Training environment and agent were created as the first steps for a browser-based RL framework.</div>,
          <div>It's <a href='https://github.com/camilodoa/ra'>open source</a>.</div>
        ]}
    ]}
  ];

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
            <Col sm={12} md={4} lg={2} className='mr-4'>
              <Image alt='me' src={me} roundedCircle className='profile m-1'/>
            </Col>
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
