import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Andhra University"
            date="2018 — 2021"
            description="B.S Computer Science"
          />
          <TimelineItem
            title="Naraya Junior College"
            date="2015 — 2017"
            description="InterMediate"
          />
          <TimelineItem
            title="ABHYUDAYA HIGH SCHOOL"
            date="2014 — 2015"
            description="scondary education"
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Dreamhyre"
            id="Front-End Developer (mern-stack)"
            date="2022(Nov)— Present"
            description="As a frontend developer specializing in the MERN stack, I bring a unique blend of creativity and technical expertise to the table. With a keen eye for design and a deep understanding of React.js, I craft captivating user interfaces that seamlessly integrate with backend functionality. Leveraging the power of MongoDB, Express.js, and Node.js, I deliver responsive, scalable, and performant web applications that exceed expectations."
          />
         
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="Web design" value={80} />
          <SkillItem title="Front-End design" value={80} />
          <SkillItem title="Html&&Css" value={80} />
          <SkillItem title="javascript " value={75} />
          <SkillItem title="React " value={85} />
          <SkillItem title="Nodejs " value={60} />
          <SkillItem title="Expressjs " value={60} />
          <SkillItem title="MongoDb " value={70} />

        </ul>
      </div>
    </section>
  );
};

export default Resume;
