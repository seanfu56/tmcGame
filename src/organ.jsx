import React from "react";
import { useState } from "react";
import problem from "./organ_problem.json";
const Organ = () => {
  const [ans, setAns] = useState("");
  console.log(problem.problems[0].p);
  return (
    <div>
      <input
        onChange={(e) => {
          setAns(e.target.value);
          console.log(e.target.value);
        }}
      />
      {problem.problems.map((prob) => {
        return !ans.includes(prob.ans) ? (
          <p key={prob.p} style={{ color: "red" }}>
            {prob.p}
          </p>
        ) : (
          <p key={prob.p} style={{ color: "green" }}>
            {prob.p}
          </p>
        );
      })}
    </div>
  );
};

export default Organ;
