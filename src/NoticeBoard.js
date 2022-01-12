import React, { useEffect, useState } from "react";
import "./Contest.css";
import Clock from "../src/images/clock.webp";
import ScrollUpButton from "react-scroll-up-button";
import logo from "./images/Loader.svg";
import AutoLinkText from "react-autolink-text2";
import { useNoticeBoardList } from "./queries/hooks";

const Contest = () => {
  const [contest, setContest] = useState(null);
  const [id, setId] = useState(1);

  const noticeBoardListQueryData = useNoticeBoardList({
    id: id,
  });

  useEffect(() => {
    noticeBoardListQueryData.refetch();
  }, [id]);

  const nextprev = (res) => {
    if (res.maxPages == id && id == 1) {
      return null;
    } else if (res.maxPages == id) {
      return (
        <button
          onClick={() => setId(id - 1)}
          className="custom-btn-nav btn-nav"
        >
          Previous
        </button>
      );
    } else if (id > 1 && id < res.maxPages) {
      return (
        <div className="pagination">
          <button
            onClick={() => setId(id - 1)}
            className="custom-btn-nav btn-nav"
          >
            Previous
          </button>
          <button
            onClick={() => setId(id + 1)}
            className="custom-btn-nav btn-nav"
          >
            Next
          </button>
        </div>
      );
    } else {
      return (
        <button
          onClick={() => setId(id + 1)}
          className="custom-btn-nav btn-nav"
        >
          Next
        </button>
      );
    }
  };

  console.log(noticeBoardListQueryData);

  if (localStorage.getItem("user12")) {
    return (
      <div className="bg_contest">
        <div className="card_contest_complete">
          {noticeBoardListQueryData.data ? (
            noticeBoardListQueryData.data.map((item, ind) => (
              <div key={ind}>
                <div className="card_contest">
                  <div className="card_contest-body"></div>
                  <h5 className="date">
                    <img src={Clock} className="Clock"></img>{" "}
                    {new Date(`${item.Post_Time}`).toLocaleString(undefined, {
                      timeZone: "Asia/Kolkata",
                    })}
                  </h5>
                  <h6 className="Status">{item.Status}</h6>
                  <h3 className="name_contest">{item.Heading}</h3>
                  <pre className="pre_msg">
                    <p>
                      <AutoLinkText text={item.Message} className="message" />
                    </p>
                  </pre>
                  {item.Link ? (
                    <h6 className="contest_website">
                      <a href={item.Link} className="contest_url">
                        {item.Link}
                      </a>
                    </h6>
                  ) : null}
                  {item.Other ? (
                    <h6 className="contest_website">
                      <a href={item.Other} className="contest_url">
                        {item.Other}
                      </a>
                    </h6>
                  ) : null}
                </div>
              </div>
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
        {contest ? nextprev(contest) : null}
        <ScrollUpButton />
      </div>
    );
  } else {
    return (
      <>
        <br />
        <button className="hover_button_classroom">
          <a href="/acadhere/classroom" className="linktoClassroom">
            <span></span>
            <span></span>
            <span></span>
            <span></span>Go to Classroom to Login
          </a>
        </button>
      </>
    );
  }
};
export default Contest;
