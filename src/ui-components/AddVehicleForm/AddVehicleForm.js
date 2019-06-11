import React from 'react';

import InputTxt from "../InputTxt/InputTxt";
import Button from "../Button/Button";
import AddVehicleFormContainer from "./AddVehicleFormStyle";

export default function AddVehicleForm(props){

  return (
    <AddVehicleFormContainer>
      <div className="topSection">
        <div>
          <InputTxt label="Truck plate" name="plate"/>
          <InputTxt label="Truck plate" name="plate"/>
          <InputTxt label="Truck plate" name="plate"/>
          <InputTxt label="Truck plate" name="plate" multiline/>
        </div>
        <div>
          <InputTxt label="Truck plate" name="plate"/>
          <InputTxt label="Truck plate" name="plate"/>
          <InputTxt label="Truck plate" name="plate"/>
        </div>
        <div>
          <InputTxt label="Truck plate" name="plate"/>
          <InputTxt label="Truck plate" name="plate"/>
          <InputTxt label="Truck plate" name="plate"/>
        </div>
      </div>
      <div className="actionSection">
        <Button label="Submit"/>
        <Button label="Reset"/>
      </div>
    </AddVehicleFormContainer>
  );
}