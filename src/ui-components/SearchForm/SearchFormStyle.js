import styled from "styled-components";

const SearhFormContainer = styled.div`
  position: relative;
  margin: 0 auto;
  padding-left: 12px;
  padding-top: 6px;
  width : 45%;

  > .btnContainer {
    width : 100%;
    padding-top: 18px;
    position: absolute;
    top: 53px;
    z-index: 0;
    input[type='button'] {
      height: 36px;
      line-height: 27px;
      background-image: -webkit-gradient(linear,left top,left bottom,from(#f5f5f5),to(#f1f1f1));
      background-image: -webkit-linear-gradient(top,#f5f5f5,#f1f1f1);
      -webkit-border-radius: 2px;
      -webkit-user-select: none;
      background-color: #f2f2f2;
      border: 1px solid #f2f2f2;
      border-radius: 4px;
      color: #5F6368;
      cursor: pointer;
      font-family: arial,sans-serif;
      font-size: 14px;
      margin: 11px 4px;
      min-width: 54px;
      padding: 0 16px;
      text-align: center;
      &:hover {
        background-image: -webkit-gradient(linear,left top,left bottom,from(#f8f8f8),to(#f1f1f1));
      background-image: -webkit-linear-gradient(top,#f8f8f8,#f1f1f1);
      -webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.1);
      background-color: #f8f8f8;
      background-image: linear-gradient(top,#f8f8f8,#f1f1f1);
      background-image: -o-linear-gradient(top,#f8f8f8,#f1f1f1);
      border: 1px solid #c6c6c6;
      box-shadow: 0 1px 1px rgba(0,0,0,0.1);
      color: #222;
      }
    }
  }
`;

export default SearhFormContainer;