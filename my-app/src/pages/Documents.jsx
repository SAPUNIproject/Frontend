import { useState } from "react";
import "./Files.css";

export default function Files() {
  const [files, setFiles] = useState([]);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFiles([...files, file.name]);
    }
  };

  return (
    <div className="files">
      <h1>Files</h1>

      <input type="file" onChange={handleUpload} />

      <ul>
        {files.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </div>
  );
}