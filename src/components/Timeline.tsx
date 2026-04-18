import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="April 2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Manager (IT) - Full Stack Java Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
            <p><ul>
              <li> Leading migration of the RAROC Calculator from cloud to on-premises infrastructure for improved control and performance.</li>
              <li>Collaborating with vendors to build dynamic Tableau dashboards for branch-level profitability analysis.</li>
              <li> Managing key banking applications: EWS, Finstinct, Tableau, RAROC, and XBRL.</li>
              <li> Developing backend solutions using SQL and Java to support data processing and analytics.</li>
              <li> Implementing automation workflows using Jenkins to streamline deployment and reduce manual tasks.</li>
              <li> Driving IT initiatives that enhance data visibility, operational efficiency, and business decision-making.</li>
            </ul></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Deputy Manager (IT) - Full Stack Java Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Mumbai, India</h4>
            <p>
              <ul>
                <li>Managing applications like: Finstinct, Litmass EWS, ERM Automation, EPM Automation, FnA Mobile App, COST MIS, RAROC, XBRL, and Tableau.</li>
                <li>Key Projects:</li>
                <ul>
                <li> Branch Profitability Project(P1 Project): Developed an automated reporting system that generates detailed long pages reports on branch, circle, cluster, and region levels, as well as a comprehensive bank-level report.</li>
                <li> Informatica Project: Collaborated with vendors to implement and optimize ETL processes using Informatica.</li>
                </ul>
              </ul>
            </p>
          </VerticalTimelineElement>
      
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;