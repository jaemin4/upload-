import React, { useRef } from 'react';
import './App.css';

function App() {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("https://359f-34-106-207-131.ngrok-free.app/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("파일 업로드 성공!");
      } else {
        alert("파일 업로드 실패!");
      }
    } catch (error) {
      console.error("업로드 에러:", error);
      alert("오류 발생!");
    }
  };

  return (
    <div className="container">
      <div className="box">
        <div className="ai-powered">✨EWHA</div>

        <div className="icons">
          <span role="img" aria-label="image">🖼️</span>
          <span role="img" aria-label="mic">🎙️</span>
          <span role="img" aria-label="video">▶️</span>
        </div>

        <h1 className="title">Baby Cry Detection</h1>
        <p className="subtitle">AI IoT Programming Project</p>

        <input
          type="file"
          accept=".jpg,.png,.wav,.mp3,.mp4"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />

        <button className="upload-button" onClick={handleButtonClick}>
          파일 선택
        </button>

        <p className="footer-text">
          이미지, 오디오, 비디오 형식 지원 (.jpg, .png, .wav, .mp3, .mp4)<br />
          최대 100MB 및 1시간 분량의 녹음
        </p>
      </div>
    </div>
  );
}

export default App;
