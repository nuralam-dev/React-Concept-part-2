import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);
  const [four, setFour] = useState(0);
  const [single, setSingle] = useState(0);

  const handelSingle = () => {
    const updateRun = runs + 1;
    const updateSingle = single + 1;
    setSingle(updateSingle);
    setRuns(updateRun);
  };

  const handelFour = () => {
    const updateRun = runs + 4;
    const updateFour = four + 1;
    setFour(updateFour);
    setRuns(updateRun);
  };

  const handelSix = () => {
    const updateRun = runs + 6;
    const updateSix = sixes + 1;
    setSixes(updateSix);
    setRuns(updateRun);
  };

  return (
    <div>
      <h3>Player : Bangladesh Batsman</h3>
      <h1>score :{runs} </h1>
      {<h2>Six :{sixes} </h2>}
      {<h2>Four :{four}</h2>}
      {<h2>Single :{single}</h2>}

      <button onClick={handelSingle}>single</button>
      <button onClick={handelFour}>Four</button>
      <button onClick={handelSix}>Six</button>
    </div>
  );
}
