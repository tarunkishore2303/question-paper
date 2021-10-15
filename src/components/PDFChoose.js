import React, { useState } from "react";

import DropdownChooser from "./DropdownChooser";
import RenderPDF from "./RenderPDF";

export default function PDFChoose() {
  const [file, setFile] = useState(1);

  function setFileFunc(fileNum) {
    setFile(fileNum);
  }
  return (
    <div>
      <DropdownChooser setFileFunc={setFileFunc} name="Shreeram" />
      <RenderPDF file={file} />
    </div>
  );
}
