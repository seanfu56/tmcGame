import React from "react";
import { useState, useEffect } from "react";
import problem from "./organ_problem.json";
const Organ = () => {
  const [ans, setAns] = useState("");
  const [success, setSuccess] = useState(false);
  console.log(problem.problems[0].p);
  useEffect(() => {
    let suc = true;
    for (let i = 0; i < problem.problems.length; i++) {
      suc = suc && ans.includes(problem.problems[i].ans);
    }
    setSuccess(suc);
  }, [ans]);
  return (
    <>
      <input
        onChange={(e) => {
          setAns(e.target.value);
          console.log(e.target.value);
        }}
      />
      {success ? (
        <h1>success</h1>
      ) : (
        <div>
          {problem.problems.map((prob) => {
            return !ans.includes(prob.ans) ? (
              <p key={prob.p} style={{ color: "red" }}>
                {prob.p}
              </p>
            ) : (
              <p key={prob.p} style={{ color: "#4D5139" }}>
                {prob.p}
              </p>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Organ;
