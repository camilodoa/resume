import React from 'react';
import Link from './components/Link';

export const sideData = [
  {
    title : 'Contact',
    list : [
      'Chicago, IL',
      <Link src='mailto:camilodortiz@gmail.com'>camilodortiz@gmail.com</Link>,
      <Link src='https://camilodoa.ml'>camilodoa.ml</Link>,
      <Link src='https://www.linkedin.com/in/camilodortiz/'>linkedin.com/in/camilodortiz</Link>,
      <Link src='https://github.com/camilodoa'>github.com/camilodoa</Link>
    ]
  },
  {
    title: 'Skills',
    list: [
      'Web development', 'Reinforcement learning', 'Deep learning',
      'Evolutionary computation', 'Full stack development', 'Unit testing'
    ]
  },
  {
    title : 'Programming languages',
    list : [
      'JavaScript / TypeScript', 'Python', 'Java'
    ]
  },
  {
    title : 'Frameworks',
    list : [
      'React, Jest, Node','Keras, PyTorch, Pandas, Flask',
      'Spring, JUnit'
    ]
  },
  {
    title : 'Native languages',
    list: [
      'English', 'French', 'Spanish'
    ]
  },
  {
    title: 'Relevant coursework',
    list: [
      'Artificial Intelligence', 'Deep Learning (UPenn)',
      'Evolutionary Computation', 'Algorithms', 'Computer Security',
      'Discrete Math', 'Linear Algebra', 'Differential Equations'
    ]
  }
];

export const mainData = [
  {
    header : 'Education',
    experiences : [
      {title : 'Amherst College',
      subtitle : 'Bachelor of Arts in Computer Science',
      location : 'Amherst, MA, USA',
      date : 'Class of 2020',
      list : [
        <div>
          Major GPA: 3.96
        </div>,
        <div>
          Activities and societies: Marsh Arts House (president), Eletronics
          Club, WAMH 89.3FM host
        </div>
      ]}
    ]
  },
  {
    header : 'Experience',
    experiences : [
      {
        title : 'NeurIPS 2021 Mentee',
        subtitle : 'LatinX in AI (LXAI)',
        location : 'Chicago, IL',
        date : 'Spring 2021, Present',
        list : [
          <div>
            Conducting research on training Spiking
            Neural Networks (SNNs) to solve OpenAI's Breakout environment under the mentorship
            of Pablo Hernandez-Leal and Rohith Kuditipudi.
          </div>,
          <div>
            The project is <Link src='https://github.com/camilodoa/lxai'>open source</Link>.
          </div>
        ]
      },
      {title : 'Software Engineer',
      subtitle : 'JPMorgan Chase & Co.',
      location : 'Chicago, IL',
      date : 'Summer 2020 - Present',
      list : [
        <div>
          Leading UI development on an exciting new onboarding app that leverages
          React and TypeScript.
        </div>,
        <div>
          Built a full stack React and Node application that was used to
          create 800+ service requests within the first six months of deployment.
        </div>,
      ]
    },
    {
      title : 'Assistant Researcher',
      subtitle : 'University of Oxford, Department of Computer Science',
      location : 'Oxford, UK',
      date : 'Summer 2019, Winter 2020, Summer 2021',
      list : [
        <div>
          Developed a full-stack <Link src="http://pdq-webapp.cs.ox.ac.uk/react-ui/">web application</Link> for
          Prof. Michael Benedikt's <Link src="http://www.cs.ox.ac.uk/projects/pdq/home.html">
          Proof-Driven Query Planning</Link> research project.
        </div>,
        <div>
          App facilitates selecting a datasource, writing an SQL query, and
          generating, running, and exporting optimal query-plans.
        </div>,
        <div>It leverages React and Spring Boot and it's <Link src='https://github.com/ProofDrivenQuerying/pdq'>open source</Link>.</div>
      ]
    },
    // {
    //   title : 'Volunteer',
    //   subtitle : 'PODER',
    //   location : 'Chicago, IL',
    //   date : 'Fall 2020 - Summer 2021',
    //   list : [
    //     <div>
    //       Redesigned and reimplemented <Link src='https://www.poderworks.org/'>PODER</Link>'s student dashboard to have a dynamic onboarding
    //       experience, display grades, and show the student's progress in the
    //       program
    //     </div>
    //   ]
    // },
    // {title : 'Summer Undergraduate Research Fellow',
    // subtitle : 'Amherst College, Department of Physics',
    // location : 'Amherst, MA, USA',
    // date : 'Summer 2018',
    // list : [
    //   <div>
    //     Designed and built a <Link src="https://drive.google.com/file/d/1olpZv4bcsH1xi3PuQgEMsFE5hA1PjX7l/view?usp=sharing">
    //       precise bidirectional current
    //       control system
    //     </Link> for delicate magnetic field manipulation
    //     in a Bose-Einstein Condensate machine.
    //   </div>,
    //   <div>
    //       Formed topological excitations in the F=1 ground state of
    //       Rb-87 condensates using the aforementioned current
    //       control system (related <Link src="https://www.nature.com/articles/nphys3624">paper</Link> on these excitations published in Nature).
    //   </div>
    // ]},
    // {title : 'Curatorial Intern',
    // subtitle : 'Mead Art Museum',
    // location : 'Amherst, MA, USA',
    // date : 'Summer 2018',
    // list : [
    //   <div>
    //       Collaborated with Mead Art Museum Curator Vanja Malloy
    //       on <Link src='https://www.amherst.edu/museums/mead/exhibitions/2019/Dimensionism'>Dimensionism: Modern Art in the Age of Einstein</Link>.
    //   </div>,
    //   <div>
    //     Researched and wrote labels for twenty works shown at
    //     the exhibition, which opened at the Berkeley
    //     Art Museum and Pacific Film Archive,
    //     at the Zimmerli Art Museum,
    //     and at
    //     the Mead Art Museum.
    //   </div>,
    //   <div>
    //   Artist and critic Jonathon Keats wrote
    //   an <Link src="https://www.forbes.com/sites/jonathonkeats/2019/02/28/dimensionism/?fbclid=IwAR1J25yxGDn2EDGLJJWDLUHb6tJLHjm2PSwitp_lV_VEoD2C1PhFMwzcMcI#34d794b27b0f">
    //       article
    //     </Link> for Forbes on the exhibition.
    //   </div>
    // ]}
  ]},
  {
    header : 'Projects',
    experiences : [
      {
        title : <Link src='https://ai-melts-ice.ml'>AI Melts ICE</Link>,
        subtitle : 'Python and JavaScript',
        location : 'Oxford, UK',
        date : 'Winter 2020 - Winter 2021',
        list : [
          <div>
            <Link src='https://ai-melts-ice.ml'>AI Melts ICE</Link> documents and
            predicts county-specific ICE arrests in the US.
          </div>,
          <div>
            The predictions are generated by an LSTM neural network trained on
            data (2014 - 2018) from Syracuse's <Link src="https://trac.syr.edu/phptools/immigration/arrest/about_data.html">TRAC web API</Link>.
          </div>,
          <div>
            It was made with React, Flask, and Keras and
            it's <Link src='https://github.com/camilodoa/ai-melts-ice'>open source</Link>.
          </div>
        ]
      },
      {
        title : <Link src='https://camilodoa.ml/dra'>Dra</Link>,
        subtitle: 'JavaScript',
        location : 'Chicago, IL, USA',
        date : 'Spring 2020 - Fall 2020',
        list : [
          <div>
            <Link src='https://camilodoa.ml/dra'>Dra</Link> is a Deep Q-Network agent
            that lives in the browser and learns to approach the goal in the
            center of the page.
          </div>,
          <div>
            Network implementation and environment were written
            with <Link src='https://mathjs.org/'>math.js</Link> and <Link src='http://paperjs.org/'>paper.js</Link>.
            It's <Link src='https://github.com/camilodoa/dra'>open source</Link>.
          </div>,
        ]
      }]
    }
];
