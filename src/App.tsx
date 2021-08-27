import React from "react";
import List from "./components/List";

// CSS
import "./App.css";
import AddToList from "./components/AddToList";

export interface IState {
  people: Array<{
    name: string;
    url: string;
    age: number;
    note?: string;
  }>;
}

const App: React.FC = () => {
  const [people, setPeople] = React.useState<IState["people"]>([
    {
      name: "Brad",
      url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      age: 25,
      note: "Good for life",
    },
  ]);

  return (
    <div className="App">
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
};

export default App;
