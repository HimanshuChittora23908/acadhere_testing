import React from "react";
import ScrollUpButton from "react-scroll-up-button";
import logo from "../images/Loader.svg";
import Card from "../components/Card";

export default function codingContest({
  contestListQueryData,
  contest,
  setContest,
  id,
  setId,
}) {
  const nextprev = (res) => {
    if (res.maxPages == id && id == 1) {
      return null;
    } else if (id == res.maxPages) {
      return (
        <div className="pagination">
          <button
            onClick={() => setId(id - 1)}
            className="custom-btn-nav btn-nav"
          >
            Previous
          </button>
        </div>
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
        <div className="pagination">
          <button
            onClick={() => setId(id + 1)}
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
        {contestListQueryData.data ? (
          contestListQueryData.data.map((item, ind) => (
            <Card ind={ind} item={item} page="contest" />
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
    </>
  );
}
