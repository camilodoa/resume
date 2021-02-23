import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import SideBlock from './components/SideBlock';
import MainBlock from './components/MainBlock';

export default function App() {
  const sideData = [
    {
      title : 'Contact',
      list : [
        'Chicago, IL',
        <a href='mailto:camilodortiz@gmail.com'>camilodortiz@gmail.com</a>,
        <a href='https://camilodoa.ml'>camilodoa.ml</a>,
        <a href='https://www.linkedin.com/in/camilodortiz/'>linkedin.com/in/camilodortiz</a>,
        <a href='https://github.com/camilodoa'>github.com/camilodoa</a>
      ]
    },
    {
      title : 'Projects',
      list : [
        <a href='https://ai-melts-ice.ml'>AI Melts ICE</a>,
        <a href='https://camilodoa.ml/dra'>Deep Reinforcement Agent</a>,
        <a href='https://github.com/camilodoa/ame'>Automatic Model Evolution</a>,
      ]
    },
    {
      title : 'Programming Languages',
      list : ['Python', 'JavaScript', 'Typescript', 'Java', 'Clojure', 'Brainf*ck']
    },
    {
      title : 'Frameworks',
      list : ['TensorFlow/Keras', 'PyTorch', 'Pandas', 'Flask', 'React',
      'Angular', 'Node', 'Spring']
    },
    {
      title : 'Native Languages',
      list: ['English', 'French', 'Spanish']
    },
    {
      title: 'Skills',
      list: ['Deep learning', 'Machine learning', 'Evolutionary computation',
      'Web development', 'Agile methodologies', 'Pair programming', 'Unit testing', 'CI/CD',
      'Full stack development']
    }
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
        <div>Relevant Coursework (CS): Artificial Intelligence, Deep Learning (UPenn), Evolutionary Computation, Algorithms</div>,
        <div>Relevant Coursework (Math): Multivariable Calculus, Discrete Math, Linear Algebra, Differential Equations</div>,
        <div>Relevant Coursework (Physics): Modern Physics, Signals and Noise Lab, Statistical Mechanics and Thermodynamics</div>
      ]}
    ]},
    {header : 'Experience',
    experiences : [
      {title : 'Software Engineer',
      subtitle : 'JPMorgan Chase & Co.',
      location : 'Chicago, IL',
      date : 'Summer 2020 - Present',
      list : [
        <div>
          Building and deploying a full stack React/Node application designed to
          help increase company productivity.
        </div>,
        <div>
          Developing and maintaining well-tested Spring Boot micro
          services.
        </div>
      ]},
      {title : 'Assistant Researcher',
      subtitle : 'University of Oxford, Department of Computer Science',
      location : 'Oxford, UK',
      date : 'Summer 2019, Winter 2020, Winter 2021 - Present',
      list : [
        <div>
          Developed a full-stack <a href="http://pdq-webapp.cs.ox.ac.uk/react-ui/">PDQ web app</a> for
          Prof. Michael Benedikt's <a href="http://www.cs.ox.ac.uk/projects/pdq/home.html">
          Proof-Driven Query Planning</a> research project.
        </div>,
        <div>
          App facilitates selecting a semantically-interconnected datasource,
          writing an SQL query, and generating, running,
          and exporting optimal query-plans.
        </div>,
        <div>It was made with React and Spring Boot.</div>
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
            Formed topological excitations in the F=1 ground state of
            Rubidium 87 condensates using the aforementioned current
            control system.
        </div>,
        <div>
            Related <a href="https://www.nature.com/articles/nphys3624">paper</a> on these excitations published in Nature.
        </div>
      ]},
      // {title : 'Curatorial Intern',
      // subtitle : 'Mead Art Museum',
      // location : 'Amherst, MA, USA',
      // date : 'Summer 2018',
      // list : [
      //   <div>
      //       Collaborated with Mead Art Museum Curator Vanja Malloy
      //       on <a href='https://www.amherst.edu/museums/mead/exhibitions/2019/Dimensionism'>Dimensionism: Modern Art in the Age of Einstein</a>.
      //   </div>,
      //   <div>
      //     Researched and wrote labels for more than twenty works shown at
      //     the exhibition, which opened both at the Berkeley
      //     Art Museum and Pacific Film Archive and at
      //     the Mead Art Museum.
      //   </div>,
      //   <div>
      //     <a href="https://www.forbes.com/sites/jonathonkeats/2019/02/28/dimensionism/?fbclid=IwAR1J25yxGDn2EDGLJJWDLUHb6tJLHjm2PSwitp_lV_VEoD2C1PhFMwzcMcI#34d794b27b0f">
      //       Article
      //     </a> written by Jonathon Keats for Forbes on the exhibition.
      //   </div>
      // ]}
    ]},
    {header : 'Projects',
    experiences : [
      {title : <a href='https://ai-melts-ice.ml'>AI Melts ICE</a>,
        subtitle : 'Python and JavaScript',
        location : 'Oxford, UK',
        date : 'Winter 2020 - Present',
        list : [
          <div><a href='https://ai-melts-ice.ml'>AI Melts ICE</a> is a prediction tool for ICE arrests in the US.</div>,
          <div>These predictions are generated by an LSTM neural network trained on data (2014 - 2018) from Syracuse's <a href="https://trac.syr.edu/phptools/immigration/arrest/about_data.html">TRAC web API</a>.</div>,
          <div>It's <a href='https://github.com/camilodoa/ai-melts-ice'>open source</a>.</div>
        ]},
        {title : <a href='https://camilodoa.ml/dra'>Dra</a>,
        subtitle: 'JavaScript',
        location : 'Chicago, IL, USA',
        date : 'Spring 2020 - Present',
        list : [
          <div><a href='https://camilodoa.ml/ra'>Dra</a> is a deep reinforcement agent that lives in the browser.</div>,
          <div>Over time, it learns to approach the concentric circles in the center of the page with the help of
          a feedforward neural network.</div>,
          <div>Network implementation and website were made from scratch with
          the help of <a href='https://mathjs.org/'>math.js</a> and <a href='http://paperjs.org/'>paper.js</a></div>,
          <div>It's <a href='https://github.com/camilodoa/dra'>open source</a>.</div>
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
