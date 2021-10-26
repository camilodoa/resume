import React from 'react';

export const sideData = [
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
          • Major GPA: 3.96, Cumulative GPA: 3.56
        </div>,
        <div>
          • Activities and societies: Marsh Arts House (president), Eletronics
          Club, WAMH 89.3FM host
        </div>
      ]}
    ]
  },
  {
    header : 'Experience',
    experiences : [
      {title : 'Software Engineer',
      subtitle : 'JPMorgan Chase & Co.',
      location : 'Chicago, IL',
      date : 'Summer 2020 - Present',
      list : [
        <div>
          • Leading UI development on an exciting new onboarding app that leverages
          React and TypeScript.
        </div>,
        <div>
          • Built a full stack React and Node application that was used to
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
          • Developing a full-stack <a href="http://pdq-webapp.cs.ox.ac.uk/react-ui/">web application</a> for
          Prof. Michael Benedikt's <a href="http://www.cs.ox.ac.uk/projects/pdq/home.html">
          Proof-Driven Query Planning</a> research project.
        </div>,
        <div>
          • App facilitates selecting a datasource, writing an SQL query, and
          generating, running, and exporting optimal query-plans.
        </div>,
        <div>• It leverages React and Spring Boot and it's <a href='https://github.com/ProofDrivenQuerying/pdq'>open source</a>.</div>
      ]
    },
    {
      title : 'Mentee',
      subtitle : 'LatinX in AI (LXAI)',
      location : 'Chicago, IL',
      date : 'Spring 2021 - Summer 2021',
      list : [
        <div>
          • Conducted preliminary research on training Spiking
          Neural Networks (SNNs) to solve OpenAI's Breakout environment under the mentorship
          of Pablo Hernandez-Leal.
        </div>,
        <div>
          • The project is still active and it's <a href='https://github.com/camilodoa/lxai'>open source</a>.
        </div>
      ]
    },
    {
      title : 'Volunteer',
      subtitle : 'PODER',
      location : 'Chicago, IL',
      date : 'Fall 2020 - Summer 2021',
      list : [
        <div>
          • Redesigned and reimplemented <a href='https://www.poderworks.org/'>PODER</a>'s student dashboard to have a dynamic onboarding
          experience, display grades, and show the student's progress in the
          program
        </div>
      ]
    },
    // {title : 'Summer Undergraduate Research Fellow',
    // subtitle : 'Amherst College, Department of Physics',
    // location : 'Amherst, MA, USA',
    // date : 'Summer 2018',
    // list : [
    //   <div>
    //     Designed and built a <a href="https://drive.google.com/file/d/1olpZv4bcsH1xi3PuQgEMsFE5hA1PjX7l/view?usp=sharing">
    //       precise bidirectional current
    //       control system
    //     </a> for delicate magnetic field manipulation
    //     in a Bose-Einstein Condensate machine.
    //   </div>,
    //   <div>
    //       Formed topological excitations in the F=1 ground state of
    //       Rb-87 condensates using the aforementioned current
    //       control system (related <a href="https://www.nature.com/articles/nphys3624">paper</a> on these excitations published in Nature).
    //   </div>
    // ]},
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
    //     Researched and wrote labels for twenty works shown at
    //     the exhibition, which opened at the Berkeley
    //     Art Museum and Pacific Film Archive,
    //     at the Zimmerli Art Museum,
    //     and at
    //     the Mead Art Museum.
    //   </div>,
    //   <div>
    //   Artist and critic Jonathon Keats wrote
    //   an <a href="https://www.forbes.com/sites/jonathonkeats/2019/02/28/dimensionism/?fbclid=IwAR1J25yxGDn2EDGLJJWDLUHb6tJLHjm2PSwitp_lV_VEoD2C1PhFMwzcMcI#34d794b27b0f">
    //       article
    //     </a> for Forbes on the exhibition.
    //   </div>
    // ]}
  ]},
  {
    header : 'Projects',
    experiences : [
      {
        title : <a href='https://ai-melts-ice.ml'>AI Melts ICE</a>,
        subtitle : 'Python and JavaScript',
        location : 'Oxford, UK',
        date : 'Winter 2020 - Winter 2021',
        list : [
          <div>
            • <a href='https://ai-melts-ice.ml'>AI Melts ICE</a> documents and
            predicts county-specific ICE arrests in the US.
          </div>,
          <div>
            • The predictions are generated by an LSTM neural network trained on
            data (2014 - 2018) from Syracuse's <a href="https://trac.syr.edu/phptools/immigration/arrest/about_data.html">TRAC web API</a>.
          </div>,
          <div>
            • It was made with React, Flask, and Keras and
            it's <a href='https://github.com/camilodoa/ai-melts-ice'>open source</a>.
          </div>
        ]
      },
      {
        title : <a href='https://camilodoa.ml/dra'>Dra</a>,
        subtitle: 'JavaScript',
        location : 'Chicago, IL, USA',
        date : 'Spring 2020 - Fall 2020',
        list : [
          <div>
            • <a href='https://camilodoa.ml/dra'>Dra</a> is a Deep Q-Network agent
            that lives in the browser and learns to approach the goal in the
            center of the page.
          </div>,
          <div>
            • Network implementation and environment were written
            with <a href='https://mathjs.org/'>math.js</a> and <a href='http://paperjs.org/'>paper.js</a>.
            It's <a href='https://github.com/camilodoa/dra'>open source</a>.
          </div>,
        ]
      }]
    }
];
