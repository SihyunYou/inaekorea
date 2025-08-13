// VerticalTimeline.jsx
import React from "react";
import {
  VerticalTimeline as VT,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { generateGreenGradient } from "../utils/Color.js";

export default function VerticalTimeline({ items }) {
  return (
    <VT>
      {items.map((item, idx) => (
        <VerticalTimelineElement
          key={idx}
          className="vertical-timeline-element--work"
          contentStyle={{ background: item.bgColor, color: "#fff" }}
          contentArrowStyle={{ borderRight: `7px solid ${item.bgColor}` }}
          date={item.date}
          iconStyle={{ background: item.bgColor, color: "#fff" }}
          icon={item.icon}
        >
          <h5 className="vertical-timeline-element-title"><strong>{item.title}</strong> ({item.date})</h5>
          <h6 className="vertical-timeline-element-subtitle">{item.subtitle}</h6>
          {item.details?.length > 0 && (
            <ul style={{ marginTop: "10px", marginBottom: '0', paddingLeft: '15px' }}>
              {item.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          )}
        </VerticalTimelineElement>
      ))}
    </VT>
  );
}
