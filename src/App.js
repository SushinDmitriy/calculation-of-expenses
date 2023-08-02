import Costs from "./components/costs/Costs";
import NewCost from "./components/NewCoast/NewCoast";
import React, { useState } from "react";
const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2021, 2, 12),
    description: "Holodolnik",
    amount: 1200,
  },
  {
    id: "c2",
    date: new Date(2020, 2, 12),
    description: "MacBook",
    amount: 111.35,
  },
  {
    id: "c3",
    date: new Date(2022, 4, 1),
    description: "Jeance",
    amount: 999.99,
  },
];

function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS);
  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };
  return (
    <div>
      <NewCost odAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
