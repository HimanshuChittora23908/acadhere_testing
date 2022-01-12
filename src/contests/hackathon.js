import React from "react";
import Card from "../components/Card";
import "../Contest.css";
import ScrollUpButton from "react-scroll-up-button";
import logo from "../images/Loader.svg";

export default function hackathon({
  hackathonListQueryData,
  hackathon,
  setHackathon,
  idHackathon,
  setIdHackathon,
}) {
  const nextprev = (res) => {
    if (res.maxPages == idHackathon && idHackathon == 1) {
      return null;
    } else if (idHackathon == res.maxPages) {
      return (
        <div className="pagination">
          <button
            onClick={() => setIdHackathon(idHackathon - 1)}
            className="custom-btn-nav btn-nav"
          >
            Previous
          </button>
        </div>
      );
    } else if (idHackathon > 1 && idHackathon < res.maxPages) {
      return (
        <div className="pagination">
          <button
            onClick={() => setIdHackathon(idHackathon - 1)}
            className="custom-btn-nav btn-nav"
          >
            Previous
          </button>
          <button
            onClick={() => setIdHackathon(idHackathon + 1)}
            className="custom-btn-nav btn-nav"
          >
            Next
          </button>
        </div>
      );
    } else {
      return (
        <div className="pagination">
          <button
            onClick={() => setIdHackathon(idHackathon + 1)}
            className="custom-btn-nav btn-nav"
          >
            Next
          </button>
        </div>
      );
    }
  };

  return (
    <>
      <div className="card_contest_complete">
        {hackathonListQueryData.data ? (
          hackathonListQueryData.data.map((item, ind) => (
            // <div key={ind}>
            //   <div className="card_contest">
            //     <div className="card_contest-body"></div>
            //     <div className="date_flex">
            //     <h5 className="date2">{(`${item.reg_start}`).slice(0, 10)}, {new Date(`${item.reg_start}`).toTimeString().slice(0, 8)}</h5>
            //     <h6>&nbsp; to &nbsp;</h6>
            //     <h5 className="date2"> {(`${item.reg_end}`).slice(0, 10)}, {new Date(`${item.reg_end}`).toTimeString().slice(0, 8)}</h5>
            //     </div>
            //     <h3 className="name_contest">{item.name}</h3>
            //     {item.desc ? <div className="desc_contest"><ReadMoreReact text={item.desc}/></div> : null}
            //     <h6 className="contest_website"><a href={"https://" + `${item.host}`} className="contest_url">{item.host}</a></h6>
            //     <span className="flip_button"><a href={item.site}></a></span>
            //   </div>
            // </div>
            <Card ind={ind} item={item} page="hackathon" />
          ))
        ) : (
          <div
            style={{
              display: "flex",
              background: "transparent",
              width: "80vw",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: "20vw", height: "20vw" }}
              src={logo}
              alt="Logo"
            />
          </div>
        )}
      </div>
      {hackathon ? nextprev(hackathon) : null}
      <ScrollUpButton />
    </>
  );
}
