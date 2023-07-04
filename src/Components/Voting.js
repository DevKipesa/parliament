import React, { useState } from 'react';
import './Voting.css';
const VotingComponent = () => {
  const [votes, setVotes] = useState({});
  const [selectedMethod, setSelectedMethod] = useState('');
  const [voted, setVoted] = useState(false);
  const [voiceRecording, setVoiceRecording] = useState('');

  const handleVote = (option) => {
    if (voted) {
      alert('You have already voted.');
      return;
    }

    if (!selectedMethod) {
      alert('Please select a voting method.');
      return;
    }

    setVotes((prevVotes) => ({ ...prevVotes, [option]: (prevVotes[option] || 0) + 1 }));
    setVoted(true);
  };

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
  };

  const handleVoiceRecording = (event) => {
    const recordedVoice = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setVoiceRecording(reader.result);
    };
    reader.readAsDataURL(recordedVoice);
  };

  const tallyVotes = () => {
    const tally = Object.entries(votes).map(([option, count]) => `${option}: ${count}`).join('\n');
    alert(`Vote Tally:\n${tally}`);
  };

  return (
    <div className="voting-container">
      <h3>Select Voting Method:</h3>
      <div className="voting-methods">
        <label className="voting-method">
          <input type="radio" name="method" value="voice" onChange={() => handleMethodSelect('voice')} />
          Voice Voting
        </label>
        <label className="voting-method">
          <input type="radio" name="method" value="roll-call" onChange={() => handleMethodSelect('roll-call')} />
          Roll Call
        </label>
        <label className="voting-method">
          <input type="radio" name="method" value="secret-ballot" onChange={() => handleMethodSelect('secret-ballot')} />
          Secret Ballot
        </label>
      </div>
      {selectedMethod === 'voice' && (
        <div className="voice-voting">
          <h3>Record Your Vote:</h3>
          <input className="voice-input" type="file" accept="audio/*" onChange={handleVoiceRecording} />
          {voiceRecording && (
            <audio className="voice-recording" src={voiceRecording} controls>
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
      )}
      <h3>Cast Your Vote:</h3>
      <div className="vote-buttons">
        <button className="vote-button" disabled={voted} onClick={() => handleVote('option1')}>
          Vote for Option 1
        </button>
        <button className="vote-button" disabled={voted} onClick={() => handleVote('option2')}>
          Vote for Option 2
        </button>
      </div>
      {voted && <p className="vote-status">You have successfully cast your vote.</p>}
      <div className="tally-button">
        <button onClick={tallyVotes}>Tally Votes</button>
      </div>
    </div>
  );
};

export default VotingComponent;
