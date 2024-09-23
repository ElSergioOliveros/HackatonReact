import React, { useState } from 'react';

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  const handleChange = (event) => {
    const newProgress = parseInt(event.target.value);
    if (newProgress >= 0 && newProgress <= 100) {
      setProgress(newProgress);
    }
  };

  return (
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ width: `${progress}%` }}
      >
        {progress}%
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={handleChange}
      />
    </div>
  );
}

export default ProgressBar;