import React from "react";

import { Logo, SearchForm } from "../../ui-components";

export default function Search(props) {
    
  return (
    <div>
      <center>
        <Logo />
        <SearchForm />
        {/* <div>
          <Button>Tìm kiếm</Button>
          <Button>Thêm mới</Button>
        </div> */}
      </center>
    </div>
  )
}