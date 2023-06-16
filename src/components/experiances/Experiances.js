import React from "react";
import "./Experiances.css";
import ima from "../assets/IMG_20191227_163739_1~2.jpg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experiances = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          icon={<img className="image" src={ima} alt="Timeline Image" />}
        >
          <h3 className="vertical-timeline-element-title">
            My Random High School, Random Place, Random State
          </h3>
          <p> High School </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2008 - 2011"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<img className="image" src={ima} alt="Timeline Image" />}
        >
          <h3 className="vertical-timeline-element-title">
            My Cool University, Poly, Bahrdar Ethiopia
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Software Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<img className="image" src={ima} alt="Timeline Image" />}
        >
          <h3 className="vertical-timeline-element-title">
            Front End Engineer Using Reactjs,Flutter - as a Freelancer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Addis Ababa</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          // className="vertical-timeline-element--work"
          // // date="2020 - present"
          // iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<img className="image" src={ima} alt="Timeline Image" />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Engineer - web development
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Ethiopia</h4>
          <p>Helpe My team by working both in the front end and back end.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experiances;
