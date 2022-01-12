import React, { useEffect, useState } from "react";
import "./Contest.css";
import { useContestList, useHackathonList } from "./queries/hooks";
import CodingContest from "./contests/codingContest";
import Hackathon from "./contests/hackathon";

const Contest = () => {
  const [screen, setScreen] = useState("codingContest");

  // CP
  const [contest, setContest] = useState(null);
  const [id, setId] = useState(1);

  useEffect(() => {
    contestListQueryData.refetch();
  }, [id]);

  const contestListQueryData = useContestList({
    id: id,
  });

  // Hackathon
  const [hackathon, setHackathon] = useState(null);
  const [idHackathon, setIdHackathon] = useState(1);

  const hackathonListQueryData = useHackathonList({
    id: idHackathon,
  });

  useEffect(() => {
    hackathonListQueryData.refetch();
  }, [idHackathon]);

  return (
    <div className="bg_contest">
      <div className="pagination">
        <button
          onClick={() => setScreen("codingContest")}
          className="custom-btn-nav btn-nav"
        >
          Coding
        </button>
        <button
          onClick={() => setScreen("hackathon")}
          className="custom-btn-nav btn-nav"
        >
          Hackathon
        </button>
      </div>
      {screen === "codingContest" ? (
        <CodingContest
          contestListQueryData={contestListQueryData}
          contest={contest}
          setContest={setContest}
          id={id}
          setId={setId}
        />
      ) : (
        <Hackathon
          hackathonListQueryData={hackathonListQueryData}
          hackathon={hackathon}
          setHackathon={setHackathon}
          idHackathon={idHackathon}
          setIdHackathon={setIdHackathon}
        />
      )}
    </div>
  );
};

export default Contest;
