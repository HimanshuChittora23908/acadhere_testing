import React from "react";
import Clock from "../../src/images/clock.webp";
import Hourglass from "../../src/images/hourglass.webp";
import ReadMoreReact from "read-more-react";

function secondsToDhms(seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);

  var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
}

export default function Card({ ind, item, page }) {
  return (
    <div key={ind}>
      <div className="card_contest">
        <div className="card_contest-body"></div>
        {page === "hackathon" ? (
          <div className="date_flex">
            <h5 className="date2">
              {`${item.reg_start}`.slice(0, 10)},{" "}
              {new Date(`${item.reg_start}`).toTimeString().slice(0, 8)}
            </h5>
            <h6>&nbsp; to &nbsp;</h6>
            <h5 className="date2">
              {" "}
              {`${item.reg_end}`.slice(0, 10)},{" "}
              {new Date(`${item.reg_end}`).toTimeString().slice(0, 8)}
            </h5>
          </div>
        ) : null}
        {page === "contest" ? (
          <h5 className="date">
            <img src={Clock} className="Clock"></img> &nbsp;
            {`${item.start_time}`.slice(0, 10)},{" "}
            {new Date(`${item.start_time}`).toTimeString().slice(0, 8)}
          </h5>
        ) : null}
        <h3 className="name_contest">{item.event_name}</h3>
        <h3 className="name_contest">{item.name}</h3>
        {item.desc ? (
          <div className="desc_contest">
            <ReadMoreReact text={item.desc} />
          </div>
        ) : null}
        {page === "contest" ? (
          item.duration < 86400 ? (
            <h5 className="time_contest">
              <img src={Hourglass} className="Hourglass"></img>{" "}
              {new Date(`${item.duration}` * 1000).toISOString().substr(11, 8)}
            </h5>
          ) : (
            <h5 className="time_contest">
              <img src={Hourglass} className="Hourglass" />
              {secondsToDhms(`${item.duration}`)}
            </h5>
          )
        ) : null}
        <h6 className="contest_website">
          <a
            href={"https://" + `${item.resource_website}`}
            className="contest_url"
          >
            {item.resource_website}
          </a>
        </h6>
        <h6 className="contest_website">
          <a href={"https://" + `${item.host}`} className="contest_url">
            {item.host}
          </a>
        </h6>
        <span className="flip_button">
          <a href={item.contest_url}></a>
        </span>
      </div>
    </div>
  );
}
