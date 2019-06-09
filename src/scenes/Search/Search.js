import React from "react";

import { Logo, SearchInput } from "../../ui-components";

export default function Search(props) {
    
  return (
    <div>
      <center>
        <Logo />
        <SearchInput />
        {/* <div>
          <Button>Tìm kiếm</Button>
          <Button>Thêm mới</Button>
        </div> */}
      </center>
    </div>
  )
}