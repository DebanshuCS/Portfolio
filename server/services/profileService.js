const Profile = require('../models/Profile');
const Project = require('../models/Project');
const Publication = require('../models/Publication');
const Experience = require('../models/Experience');

/**
 * Get profile information
 * @returns {Promise<Object>} Profile data
 */
const getProfile = async () => {
  try {
    console.log('Fetching profile information');
    // Get the profile - assuming there's only one profile in the system
    let profile = await Profile.findOne();

    // If no profile exists, create a default one
    if (!profile) {
      console.log('No profile found, creating default profile');
      profile = await createDefaultProfile();
    }

    return { user: profile };
  } catch (error) {
    console.error('Error in getProfile service:', error);
    throw new Error(`Error fetching profile: ${error.message}`);
  }
};

/**
 * Get projects
 * @returns {Promise<Object>} Project data
 */
const getProjects = async () => {
  try {
    console.log('Fetching projects');
    const projects = await Project.find({});

    // If no projects exist, create default ones
    if (projects.length === 0) {
      console.log('No projects found, creating default projects');
      const defaultProjects = await createDefaultProjects();
      return { projects: defaultProjects };
    }

    return { projects };
  } catch (error) {
    console.error('Error in getProjects service:', error);
    throw new Error(`Error fetching projects: ${error.message}`);
  }
};

/**
 * Get publications
 * @returns {Promise<Object>} Publication data
 */
const getPublications = async () => {
  try {
    console.log('Fetching publications');
    const publications = await Publication.find({});

    // If no publications exist, create default ones
    if (publications.length === 0) {
      console.log('No publications found, creating default publications');
      const defaultPublications = await createDefaultPublications();
      return { publications: defaultPublications };
    }

    return { publications };
  } catch (error) {
    console.error('Error in getPublications service:', error);
    throw new Error(`Error fetching publications: ${error.message}`);
  }
};

/**
 * Get experiences
 * @returns {Promise<Object>} Experience data
 */
const getExperience = async () => {
  try {
    console.log('Fetching experiences');
    const experiences = await Experience.find({});

    // If no experiences exist, create default ones
    if (experiences.length === 0) {
      console.log('No experiences found, creating default experiences');
      const defaultExperiences = await createDefaultExperiences();
      return { experiences: defaultExperiences };
    }

    return { experiences };
  } catch (error) {
    console.error('Error in getExperience service:', error);
    throw new Error(`Error fetching experiences: ${error.message}`);
  }
};

/**
 * Create default profile
 * @returns {Promise<Object>} Default profile
 */
const createDefaultProfile = async () => {
  try {
    console.log('Creating default profile');
    const defaultProfile = new Profile({
      name: "Debanshu Das",
      title: "CS Graduate",
      about: "Passionate computer science graduate with expertise in full-stack development and machine learning. Currently exploring innovative solutions in AI and distributed systems.",
      avatar: "https://avatars.githubusercontent.com/u/123456789",
      email: "debanshu.das@example.com",
      location: "Bangalore, India",
      skills: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "Node.js",
        "Docker",
        "AWS",
        "Problem-Solving",
        "Communication",
        "Critical Thinking"
      ],
      socialLinks: {
        github: "https://github.com/debanshudas",
        linkedin: "https://linkedin.com/in/debanshudas",
        twitter: "https://twitter.com/debanshudas"
      },
      researchStatement: "I feel compelled to convey the trajectory of my academic journey, research aspirations, and commitment to advancing Artificial Intelligence (AI) within the field of Cyber-Physical Systems (CPS) security. My academic interests have always been rooted in understanding complex systems and solving intricate, real-world problems. During my undergraduate studies, my thesis, titled 'Rumor Detection using Deep Learning Techniques,' marked my initial foray into applied AI research, wherein I developed an end-to-end framework for early rumor detection on social media. This work not only demonstrated AI's potential in addressing pressing societal issues but also reinforced my desire to pursue AI-focused research.\n\nMy interest in CPS security crystallized during my first research fellowship in 2023, where I began exploring the intersection of AI, Machine Learning (ML), and cyber-physical environments. This research allowed me to examine the nuanced dynamics of CPS, in which the convergence of physical, computational, and communication elements presents both intricate challenges and promising opportunities for intelligent systems. In the course of my research, I led the development of an automated toolchain that parses log files, generates Petri Net models through the alpha-algorithm, and applies perturbations to these models to simulate potential attacker actions. This work culminated in a comprehensive e-commerce case study, leading to a peer-reviewed publication at the 16th International Conference on Communication Systems and Networks. Expanding upon this, I initiated a project aimed at proactively detecting cyber threats in digital infrastructure through attack graph modeling. Leveraging deep learning, I developed a method to predict feasible links in an Attack Graph by integrating data from multiple cyber threat intelligence sources with process mining techniques. This model employs Graph Convolutional Networks (GCNs) to highlight behavioral patterns affecting digital infrastructures, enabling the prediction of probable attack paths. The findings were accepted for presentation at the 29th IEEE Pacific Rim International Symposium on Dependable Computing (PRDC 2024)."
    });

    return await defaultProfile.save();
  } catch (error) {
    console.error('Error creating default profile:', error);
    throw new Error(`Failed to create default profile: ${error.message}`);
  }
};

/**
 * Create default projects
 * @returns {Promise<Array>} Default projects
 */
const createDefaultProjects = async () => {
  try {
    console.log('Creating default projects');
    const defaultProjects = [
      {
        title: "DeepRumor",
        description: "Researched an end-to-end framework for early rumor detection on social media using deep learning, addressing key bottlenecks with weak supervision algorithms.",
        technologies: ["CNN", "LSTM", "Web Crawling", "Feature Extraction"],
        image: "/projects/deeprumor.jpg",
        link: "https://github.com/debanshudas/deeprumor"
      },
      {
        title: "HR Planes",
        description: "Designed a novel object detection model to automatically detect airplanes in high-resolution satellite images using YOLOv7 and Faster R-CNN. Achieved 80.27% accuracy.",
        technologies: ["R-CNN", "YOLOv7", "High-Res Data"],
        image: "/projects/hrplanes.jpg",
        link: "https://github.com/debanshudas/hrplanes"
      },
      {
        title: "CampusVLAN",
        description: "Revamped campus networking structure, configured VLANs on all switches, and implemented VLAN tagging. The primary goal was to create a secure, well-organized, high-performance network.",
        technologies: ["Cisco Packet Tracer", "Networking", "VLAN"],
        image: "/projects/campusvlan.jpg",
        link: "https://github.com/debanshudas/campusvlan"
      },
      {
        title: "PALM",
        description: "Developed an innovative framework, PALM, that bridges the gap between event log analysis and threat modeling in e-commerce systems, leveraging process mining techniques and graph convolutional networks to transform overlooked event log data into predictive insights for security analysis.",
        technologies: ["Process Mining", "Attack Graph", "GCN"],
        image: "/projects/palm.jpg",
        link: "https://github.com/debanshudas/palm"
      },
      {
        title: "TransLingua",
        description: "Constructed an encoder-decoder model to translate languages in real-time, fine-tuned with attention mechanisms.",
        technologies: ["Seq2Seq learning", "NLP", "Attention Mechanisms"],
        image: "/projects/translingua.jpg",
        link: "https://github.com/debanshudas/translingua"
      },
      {
        title: "AnoDetICS-NN",
        description: "Developed a sophisticated anomaly detection system for Industrial Control Systems using neural networks. Implemented a comprehensive seq2seq model with PyTorch, featuring process-specific detection models and a novel evaluation methodology. The system includes real-time data processing, model training, and anomaly detection with support for InfluxDB integration.",
        technologies: ["PyTorch", "Neural Networks", "ICS Security", "Time Series Analysis", "Anomaly Detection"],
        image: "/projects/anodet.jpg",
        link: "https://github.com/debanshudas/anodet-ics-nn"
      }
    ];

    return await Project.insertMany(defaultProjects);
  } catch (error) {
    console.error('Error creating default projects:', error);
    throw new Error(`Failed to create default projects: ${error.message}`);
  }
};

/**
 * Create default publications
 * @returns {Promise<Array>} Default publications
 */
const createDefaultPublications = async () => {
  try {
    console.log('Creating default publications');
    const defaultPublications = [
      {
        title: "Simulating cyber-attack scenarios by discovering Petri Nets from large scale event logs",
        authors: ["Debanshu Das"],
        conference: "16th International Conference on Communication Systems & Networks (COMSNETS)",
        year: 2024,
        description: "Developed an automated tool-chain parsing log files, generating Petri Net models using the α-algorithm, and perturbing the models to simulate attacker actions. Conducted a comprehensive e-commerce case study.",
        link: "https://example.com/paper1"
      },
      {
        title: "PALM: A framework to identify novel attacks in an e-commerce system",
        authors: ["Debanshu Das"],
        conference: "29th IEEE Pacific Rim International Symposium on Dependable Computing (PRDC)",
        year: 2024,
        description: "Implemented an innovative approach to evaluate cyber risks through a behavioural model of an e-commerce system and conducted the prediction of novel exploits potentially extending from the system.",
        link: "https://example.com/paper2"
      }
    ];

    return await Publication.insertMany(defaultPublications);
  } catch (error) {
    console.error('Error creating default publications:', error);
    throw new Error(`Failed to create default publications: ${error.message}`);
  }
};

/**
 * Create default experiences
 * @returns {Promise<Array>} Default experiences
 */
const createDefaultExperiences = async () => {
  try {
    console.log('Creating default experiences');
    const defaultExperiences = [
      {
        title: "Data Science Intern",
        company: "Verzeo",
        location: "Chennai",
        type: "Remote",
        startDate: "Jan 2021",
        endDate: "March 2021",
        points: [
          "Developed AgeWise, a facial recognition system predicting age range from facial features using CNN-based methods.",
          "Achieved superior model accuracy, outperforming benchmark algorithms. Presented the results of the projects to the esteemed mentor, receiving positive feedback on the validity and potential impact of the model."
        ],
        certification: "Earned Pro Degree certificate in Data Science- In collaboration with Microsoft."
      },
      {
        title: "Research Fellowship",
        company: "BITS Pilani",
        location: "Goa",
        type: "On-Site",
        startDate: "July 2023",
        endDate: "August 2024",
        points: [
          "Actively contributed to the \"PAST: Predictor and Analyzer of Security Threats\" NTIHAC-HUB (IIT Kanpur), aiming to enhance innovative solutions that effectively mitigate security risks and safeguard critically connected infrastructures.",
          "Co-Authored two peer-reviewed conference papers, garnering constructive and favorable feedback from reviewers."
        ],
        learning: "Petri Nets, Predictive Process Monitoring, Threat Intelligence and Attack Graphs"
      }
    ];

    return await Experience.insertMany(defaultExperiences);
  } catch (error) {
    console.error('Error creating default experiences:', error);
    throw new Error(`Failed to create default experiences: ${error.message}`);
  }
};

module.exports = {
  getProfile,
  getProjects,
  getPublications,
  getExperience
};