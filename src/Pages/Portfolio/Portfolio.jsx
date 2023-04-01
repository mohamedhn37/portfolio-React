import React, {useState, useEffect} from 'react'
import './Portfolio.css'
import SectionHead from '../../Components/SectionHead/SectionHead'
import PortfolioCard from '../../Components/PortfolioCard/PortfolioCard';
import imgForm from '../../images/form.png'
import imgChipiwa from '../../images/chpiwa.png'
import imgCafeFloret from '../../images/cafe-floret.png'
import imgRestorent from '../../images/restorent.png'
import imgGreenOffice from '../../images/green-office.png'
import imgDonation from '../../images/donation-turk.png'


const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Form card',
      date: '01 Feb. 2023',
      category: 'Web-App',
      image: imgForm,
      demoLink: 'https://mohamedhn37.github.io/TPCSS/',
    },
    {
      id: 2,
      title: 'CafeFloret',
      date: '01 Feb. 2023',
      category: 'Web-App',
      image: imgCafeFloret,
      demoLink: 'https://mohamedhn37.github.io/tp-cafe-florette/',
    },
    {
      id: 3,
      title: 'Restaurant',
      date: '02 Feb. 2023',
      category: 'Web-App',
      image: imgRestorent,
      demoLink: 'https://mohamedhn37.github.io/restaurant-web-site/',
    },
    {
      id: 4,
      title: 'Green Office',
      date: '03 Feb. 2023',
      category: 'Web-App',
      image: imgGreenOffice,
      demoLink: 'https://mohamedhn37.github.io/TP-GREEN-OFFICE/',
    },
    {
      id: 5,
      title: 'Chippiwa',
      date: '06 Feb. 2023',
      category: 'Mobile-App',
      image: imgChipiwa,
      demoLink: 'https://mohamedhn37.github.io/Cheppiwa/',
    },
    {
      id: 6,
      title: 'Save Turk',
      date: '14 Feb. 2023',
      category: 'Mobile-App',
      image: imgDonation,
      demoLink: 'https://mohamedhn37.github.io/SaveTurk/',
    },
  ];  
  const [animation, setAnimation] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("fullproject");
  const filteredProjects =
    selectedCategory === "fullproject"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setAnimation(true);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimation(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [animation]);
  
  return (
    <>
      <div className="container py-4">
          <SectionHead title="Portfolio" description = "Check out some of my recent projects in web and mobile development. Each project highlights my skills and expertise in creating user-friendly and innovative solutions."/>
          <div className="col-12 d-flex justify-content-center">
              <button className="p-2" onClick={() => handleCategoryChange('fullproject')} id="full">Full Project</button>
              <button className="p-2" onClick={() => handleCategoryChange('Web-App')} id="web">Web app</button>
              <button className="p-2"  onClick={() => handleCategoryChange('Mobile-App')} id="mobile">Mobile app</button>
          </div>
          <div className={`row text-center m-auto align-items-center mt-3 mb-5 g-5 ${animation ? 'animate' : ''}`}>
            {filteredProjects.map((project) => (
                <PortfolioCard key={project.id} img={project.image} title={project.title} category={project.category} date={project.date} demo={project.demoLink}/>
            ))}
        </div>
      </div>
    </>
  )
}

export default Portfolio