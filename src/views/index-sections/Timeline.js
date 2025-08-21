import React from "react";
import { useInView } from "react-intersection-observer";
import "./Timeline.scss";

const TimelineItem = ({ item, isEven, isLast, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <React.Fragment key={index}>
      {/* Timeline Section */}
      <div
        ref={ref}
        className={`row align-items-center how-it-works ${
          !isEven ? "justify-content-end" : ""
        } ${inView ? "visible" : "hidden"}`}
      >
        {isEven ? (
          <>
            <div className={`col-2 text-center ${isLast ? "full-bottom" : "bottom"}`}>
              <div className="circle">{item.id}</div>
            </div>
            <div className="col-10" text-left>
              <h5 style={{ marginTop: '10px' }}><strong>{item.title}</strong></h5>
              <h6 dangerouslySetInnerHTML={{ __html: item.description }} />
              {item.addition && item.addition.length > 0 && (
                <ul style={{ padding: '0', marginTop: '10px' }}>
                  {item.addition.map((add, idx) => (
                    <li key={idx} style={{ color: '#333', display: 'inline' }}>
                      <span style={{ marginRight: '5px', fontSize: '22px', lineHeight: '0.8' }}>•</span>
                      {add}<br />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="col-10 text-right">
              <h5 style={{ marginTop: '10px' }}><strong>{item.title}</strong></h5>
              <h6 dangerouslySetInnerHTML={{ __html: item.description }} />
              {item.addition && item.addition.length > 0 && (
                <ul style={{ padding: '0', marginTop: '10px' }}>
                  {item.addition.map((add, idx) => (
                    <li key={idx} style={{ color: '#333', display: 'inline' }}>
                      {add}
                      <span style={{ marginLeft: '5px', fontSize: '22px', lineHeight: '0.8' }}>•<br /></span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className={`col-2 text-center ${isLast ? "full-bottom" : "full"}`}>
              <div className="circle">{item.id}</div>
            </div>
          </>
        )}
      </div>

      {/* Timeline Path (except for last item) */}
      {!isLast && (
        <div className="row timeline">
          <div className="col-2">
            <div className={`corner ${isEven ? "top-right" : "right-bottom"}`}></div>
          </div>
          <div className="col-8">
            <hr />
          </div>
          <div className="col-2">
            <div className={`corner ${isEven ? "left-bottom" : "top-left"}`}></div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default function Timeline({ data }) {
  return (
    <div className="container-fluid blue-bg">
      <div className="container">
        {data.map((item, index) => {
          const isEven = index % 2 === 0;
          const isLast = index === data.length - 1;

          return (
            <TimelineItem 
              key={index}
              item={item}
              isEven={isEven}
              isLast={isLast}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}