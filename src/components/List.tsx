import React from "react";
import { IState as IProps } from "../App";

const List: React.FC<IProps> = (props) => {
  return (
    <ul>
      {props.people?.map((person) => {
        return (
          <li className="List" key={`${person.name}-${Math.random()}`}>
            <div className="List-header">
              <img src={person.url} alt={person.name} className="List-img" />
            </div>
            <p>{person.age} years old</p>
            <p className="List-note">{person.note}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
