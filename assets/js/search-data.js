// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-professional-services",
          title: "Professional Services",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/services/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-service-serve-as-a-reviewer-for-iclr-26",
          title: '[Service]  Serve as a Reviewer for ICLR’26',
          description: "",
          section: "News",},{id: "news-paper-multi-agent-reinforcement-learning-with-serverless-computing-accepted-by-socc-25",
          title: '[Paper]  “Multi-Agent Reinforcement Learning with Serverless Computing” accepted by SoCC’25',
          description: "",
          section: "News",},{id: "news-talk-invited-to-give-a-talk-at-msra-vancouver",
          title: '[Talk]  Invited to give a talk at MSRA Vancouver',
          description: "",
          section: "News",},{id: "news-paper-accelerating-ml-inference-via-opportunistic-pre-loading-on-serverless-clusters-accepted-by-tpds",
          title: '[Paper] “Accelerating ML Inference via Opportunistic Pre-Loading on Serverless Clusters” accepted by TPDS...',
          description: "",
          section: "News",},{id: "news-service-serve-on-the-program-committee-and-artifact-evaluation-program-committee-for-mlsys-26",
          title: '[Service] Serve on the Program Committee and Artifact Evaluation Program Committee for MLSys’26...',
          description: "",
          section: "News",},{id: "news-talk-invited-to-give-a-talk-at-utns-lab-ut-austin",
          title: '[Talk]  Invited to give a talk at UTNS Lab @ UT Austin',
          description: "",
          section: "News",},{id: "news-talk-invited-to-give-a-talk-at-sky-computing-lab-uc-berkeley",
          title: '[Talk] Invited to give a talk at Sky Computing Lab @ UC Berkeley...',
          description: "",
          section: "News",},{id: "news-talk-invited-to-give-a-talk-at-computer-systems-seminar-rice-university",
          title: '[Talk] Invited to give a talk at Computer Systems Seminar @ Rice University...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},];
