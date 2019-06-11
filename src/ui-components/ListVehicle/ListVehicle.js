import React from "react";
import ListVehicleContainer from "./ListVehicleStyle";

import QuickEditInput from "../QuickEditInput/QuickEditInput";
import QuickEditTextArea from "../QuickEditTextArea/QuickEditTextArea";

export default function ListVehicle(params) {

  return (
    <ListVehicleContainer>
      <table align="center">
        <tbody>
          <tr>
            <th>Truck plate</th>
            <th>Cargo type</th>
            <th>Driver</th>
            <th>Truck type</th>
            <th>Price</th>
            <th>Dimension</th>
            <th>Parking address</th>
            <th>Production year</th>
            <th>Status</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
          <tr>
            <td><QuickEditInput value="30A-12345"/></td>
            <td><QuickEditInput value="Computer"/></td>
            <td><QuickEditInput value="Nguyen Van A"/></td>
            <td><QuickEditInput value="5 ton"/></td>
            <td><QuickEditInput value="1,000,000"/></td>
            <td><QuickEditInput value="10-2-11"/></td>
            <td><QuickEditInput value="Hoan Kiem"/></td>
            <td><QuickEditInput value="2015"/></td>
            <td><QuickEditInput value="In-use"/></td>
            <td><QuickEditTextArea value="Excepteur consequat incididunt ipsum deserunt irure sint aliqua elit esse." /></td>
            <td>
              <div>
                <span>Edit</span>
                <span>Delete</span>
              </div>
            </td>
          </tr>
          <tr>
            <td><QuickEditInput value="30A-12345"/></td>
            <td><QuickEditInput value="Computer"/></td>
            <td><QuickEditInput value="Nguyen Van A"/></td>
            <td><QuickEditInput value="5 ton"/></td>
            <td><QuickEditInput value="1,000,000"/></td>
            <td><QuickEditInput value="10-2-11"/></td>
            <td><QuickEditInput value="Hoan Kiem"/></td>
            <td><QuickEditInput value="2015"/></td>
            <td><QuickEditInput value="In-use"/></td>
            <td><QuickEditTextArea value="Excepteur consequat incididunt ipsum deserunt irure sint aliqua elit esse." /></td>
            <td>
              <div>
                <span>Edit</span>
                <span>Delete</span>
              </div>
            </td>
          </tr>
          <tr>
            <td><QuickEditInput value="30A-12345"/></td>
            <td><QuickEditInput value="Computer"/></td>
            <td><QuickEditInput value="Nguyen Van A"/></td>
            <td><QuickEditInput value="5 ton"/></td>
            <td><QuickEditInput value="1,000,000"/></td>
            <td><QuickEditInput value="10-2-11"/></td>
            <td><QuickEditInput value="Hoan Kiem"/></td>
            <td><QuickEditInput value="2015"/></td>
            <td><QuickEditInput value="In-use"/></td>
            <td><QuickEditTextArea value="Excepteur consequat incididunt ipsum deserunt irure sint aliqua elit esse." /></td>
            <td>
              <div>
                <span>Edit</span>
                <span>Delete</span>
              </div>
            </td>
          </tr>
          <tr>
            <td><QuickEditInput value="30A-12345"/></td>
            <td><QuickEditInput value="Computer"/></td>
            <td><QuickEditInput value="Nguyen Van A"/></td>
            <td><QuickEditInput value="5 ton"/></td>
            <td><QuickEditInput value="1,000,000"/></td>
            <td><QuickEditInput value="10-2-11"/></td>
            <td><QuickEditInput value="Hoan Kiem"/></td>
            <td><QuickEditInput value="2015"/></td>
            <td><QuickEditInput value="In-use"/></td>
            <td><QuickEditTextArea value="Excepteur consequat incididunt ipsum deserunt irure sint aliqua elit esse." /></td>
            <td>
              <div>
                <span>Edit</span>
                <span>Delete</span>
              </div>
            </td>
          </tr>
          
        </tbody>
      </table>
    </ListVehicleContainer>
  );
}