import React from 'react';

const Recorder = ({ isRecording, isPlaying, startRecording, stopRecording }) => (
  <div className='recorder'>
    <br />
    <h1>Recorder</h1>
    <button className='start-button'
      onClick={ startRecording }
      disabled={isRecording || isPlaying}>
      Start
    </button>
    <button className='stop-button'
      onClick={ stopRecording }
      disabled={!isRecording || isPlaying}>
      Stop
    </button>
  </div>
);

export default Recorder;