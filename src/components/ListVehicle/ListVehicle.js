import React, { useState, useCallback } from "react";
import ListVehicleWrapper from "./ListVehicleWrapper";
import Button from "../Button/Button";

import QuickEditInput from "../QuickEditInput/QuickEditInput";
import QuickEditTextArea from "../QuickEditTextArea/QuickEditTextArea";

const Th = function(props) {
  const [visited, visit] = useState(false);

  return (
    <th onClick={() => visit(!visited)} className={visited ? "desc" : ""}>
      {props.children}
    </th>
  );
};

const Tr = function(props) {
  const [visited, visit] = useState(false);
  const item = {};
  const handleClick = useCallback(() => visit(!visited), [item]);
  return (
    <tr onClick={() => visit(!visited)} className={visited ? "visited" : ""}>
      {props.children}
    </tr>
  );
};

export default function ListVehicle(params) {
  return (
    <ListVehicleWrapper>
      <table align="center">
        <thead>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td colSpan="1">
              <div>
                <Button label={"Delete"} />
                <Button label={"Hide"} />
              </div>
            </td>
            <td colSpan="7"></td>
            <td colSpan="2">
              <div>
                <div>1 - 10 in 40 records</div>
                <div>
                  <Button label={"Pre"} />
                  <Button label={"Next"} />
                </div>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          <Tr>
            <Th className="desc">Truck plate</Th>
            <Th>Name</Th>
            <Th>Address</Th>
            <Th>Action</Th>
          </Tr>
          <Tr>
            <td>
              <QuickEditInput value="30A-12345" />
            </td>
            <td>
              <QuickEditInput value="Computer" />
            </td>
            <td>
              <QuickEditTextArea value="Excepteur consequat incididunt ipsum deserunt irure sint aliqua elit esse." />
            </td>
            <td>
              <div>
                <span>Edit</span>
                <span>Delete</span>
              </div>
            </td>
          </Tr>
        </tbody>
      </table>
    </ListVehicleWrapper>
  );
}
