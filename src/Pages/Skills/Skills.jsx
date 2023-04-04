import React from 'react'
import './Skills.css'
import SectionHead from '../../Components/SectionHead/SectionHead'
import imgHtml from '../../images/html.png'
import imgCss from '../../images/css.png'
import imgGit from '../../images/github.png'
import imgJquery from '../../images/jquery.png'
import imgSql from '../../images/mysql.png'
import imgReact from '../../images/react.png'
import imgJs from '../../images/js.png'
import imgBootstrap from '../../images/Bootstrap.png'
import OMACodersCertificat from '../../images/onemillionarabecoder.png'
import {SkillsCard , CertificateCard} from '../../Components/SkillsCard/SkillsCard'



const Skills = () => {
  return (
    <>
        <div className="container py-4">
            <SectionHead title="Skills" description = "I have expertise in multiple programming languages, specialy JavaScript. I'm also proficient in web development technologies such as HTML, CSS, and React. My technical skills are complemented by my ability to communicate effectively and work collaboratively with clients and team members."/>
            <div className="row skills my-4">
                <div className="col-md-6">
                    <p className="skills-para">
                        To building websites and web applications I use modern
                        technologies and techniques with best practices to make my
                        clients satisfied 100% with the result...
                    </p>
                    <div className="row">
                        <SkillsCard src={imgHtml} alt="HTML"/>
                        <SkillsCard src={imgCss} alt="css"/>
                        <SkillsCard src={imgBootstrap} alt="Bootstrap"/>
                        <SkillsCard src={imgJs} alt="js"/>
                        <SkillsCard src={imgJquery} alt="jquery"/>
                        <SkillsCard src={imgReact} alt="React"/>
                        <SkillsCard src={imgGit} alt="GitHub"/>
                        <SkillsCard src={imgSql} alt="GitHub"/>
                    </div>
                </div>
                <div className="col-md-6 bg-light p-4 rounded-3">
                    <div className="row">
                        <SectionHead title="Certificate"/>
                        <CertificateCard title="One Million Arabe Coders" src={OMACodersCertificat}  alt="OMACodersCertificat"/>
                        <CertificateCard title="One Million Arabe Coders" src={OMACodersCertificat}  alt="OMACodersCertificat"/>                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Skills