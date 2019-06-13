import React, { useState } from "react";
import ListVehicleContainer from "./ListVehicleStyle";
import Button from "../Button/Button";

import QuickEditInput from "../QuickEditInput/QuickEditInput";
import QuickEditTextArea from "../QuickEditTextArea/QuickEditTextArea";

const Th = function(props) {
  const [ visited, visit ] = useState(false);

  return (<th onClick={ () => visit(!visited) } className={ visited ? 'desc' : '' }>{props.children}</th>);
}

const Tr = function(props) {
  const [ visited, visit ] = useState(false);

  return (<tr onClick={ () => visit(!visited) } className={ visited ? 'visited' : '' }>{props.children}</tr>);
}

export default function ListVehicle(params) {

  return (
    <ListVehicleContainer>
      <table align="center">
        <thead>
          <tr>
            <td>
              <input type="checkbox"/>
            </td>
            <td colSpan="1">
              <div>
                <Button label={'Delete'}/>
                <Button label={'Hide'}/>
              </div>
            </td>
            <td colSpan="7"></td>
            <td colSpan="2">
              <div>
                <div>1 - 10 in 40 records</div>
                <div>
                  <Button label={'Pre'}/>
                  <Button label={'Next'}/>
                </div>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          <Tr>
            <Th className="desc">Truck plate</Th>
            <Th>Cargo type</Th>
            <Th>Driver</Th>
            <Th>Truck type</Th>
            <Th>Price</Th>
            <Th>Dimension</Th>
            <Th>Parking address</Th>
            <Th>Production year</Th>
            <Th>Status</Th>
            <Th>Description</Th>
            <Th>Action</Th>
          </Tr>
          <Tr>
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
          </Tr>
          <Tr>
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
          </Tr>
          <Tr>
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
          </Tr>
          <Tr>
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
          </Tr>
          <Tr>
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
          </Tr>
          <Tr>
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
          </Tr>
          <Tr>
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
          </Tr>
          <Tr>
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
          </Tr>
          <Tr>
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
          </Tr>
          <Tr>
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
          </Tr>
          
        </tbody>
      </table>

    </ListVehicleContainer>
  );
}