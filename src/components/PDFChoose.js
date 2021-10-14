import React, { useState } from "react";

import Basic from "./Basic";
import RenderPDF from "./RenderPDF";

export default function PDFChoose() {
  const [file, setFile] = useState(1);

  function setFileFunc(fileNum) {
    setFile(fileNum);
  }
  return (
    <div>
      <Basic setFileFunc={setFileFunc} name="Shreeram" />
      <RenderPDF file={file} />
    </div>
  );
}
