import React from 'react'
import "./Experience.css"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import EngineeringIcon from '@mui/icons-material/Engineering';


function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor="#222831">

        {/* Work Experience */}
        {/* Ministry of works */}
        <VerticalTimelineElement className='vertical-timeline-element--education'
          date='2022-present'
          iconStyle={{
            background: "#576CBC", color:
              "white"
          }}
          icon={<WorkIcon />}>
          <h3 className='vertical-timeline-element-title'>
            Ministry of Works (Road
            Infrastructure, Transport, Housing and Urban Development), Ilorin, Kwara
            State</h3>
          <p>Mechanical Engineering Department</p>
        </VerticalTimelineElement>


        {/* e-gov hackathon */}
        <VerticalTimelineElement className='vertical-timeline-element--education'
          date='2023'
          iconStyle={{
            background: "#A5D7E8", color:
              "white"
          }}
          icon={<CodeIcon />}>
          <h3 className='vertical-timeline-element-title'>
            Ilorin Hub E-Government Hackathon</h3>
          <p>Contestant - Team Cool I.T. Solutions</p>
        </VerticalTimelineElement>


        {/* FInal year project */}
        <VerticalTimelineElement className='vertical-timeline-element--education'
          date='2021'
          iconStyle={{
            background: "#222831", color:
              "white"
          }}
          icon={<EngineeringIcon />}>
          <h3 className='vertical-timeline-element-title'>
            Final year design project at Landmark University, Kwara State</h3>
          <p> Design of a smart system for a silo using an arduino microcontroller, sensors and
            relays to control operating conditions within the silo
          </p>
        </VerticalTimelineElement>

        {/* Chevron */}
        <VerticalTimelineElement className='vertical-timeline-element--education'
          date='2020'
          iconStyle={{
            background: "#576CBC", color:
              "white"
          }}
          icon={<WorkIcon />}>
          <h3 className='vertical-timeline-element-title'>
            Chevron Nigeria Limited, Lagos State</h3>
          <p> Undergraduate Intern
          </p>
        </VerticalTimelineElement>


        {/* SWEP */}
        <VerticalTimelineElement className='vertical-timeline-element--education'
          date='2018'
          iconStyle={{
            background: "#222831", color:
              "white"
          }}
          icon={<EngineeringIcon />}>
          <h3 className='vertical-timeline-element-title'>
            Students’ Work Experience Program (SWEP) at Landmark University, Kwara State </h3>
          <p> Production of a manual fish kiln
          </p>
          <p>Volunteer community development service in Omu-Aran
          </p>
          <p> Production of a hydroponics system
          </p>
        </VerticalTimelineElement>

        {/* Hash Code Google */}
        <VerticalTimelineElement className='vertical-timeline-element--education'
          date='2017'
          iconStyle={{
            background: "#A5D7E8", color:
              "white"
          }}
          icon={<CodeIcon />}>
          <h3 className='vertical-timeline-element-title'>
            Google Hash Code 2017 </h3>
          <p> Participant </p>
        </VerticalTimelineElement>

        {/* University education */}
        <VerticalTimelineElement className='vertical-timeline-element--education'
          date='2016-2021'
          iconStyle={{
            background: "#19376D", color:
              "white"
          }}
          icon={<SchoolIcon />}>
          <h3 className='vertical-timeline-element-title'>Landmark University, Kwara State</h3>
          <p>(B. Eng.) Mechanical Engineering (First Class Honours)</p>
        </VerticalTimelineElement>


        {/* Secondary School education */}
        <VerticalTimelineElement className='vertical-timeline-element--education'
          date='2011-2016'
          iconStyle={{
            background: "#19376D", color:
              "white"
          }}
          icon={<SchoolIcon />}>
          <h3 className='vertical-timeline-element-title'>Faith Academy, Ilorin, Kwara State</h3>
          <p>Secondary School Certificate (WASSCE & NECO)</p>
        </VerticalTimelineElement>


      </VerticalTimeline>
    </div>
  )
}

export default Experience