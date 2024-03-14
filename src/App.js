import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

function MatchCard({ match }) {
  return (
    <div className="w-full mx-auto my-4 rounded overflow-hidden shadow-2xl bg-indigo-900 text-white transform transition duration-500 ease-in-out hover:scale-105 border-4 border-indigo-700">
      <div className="flex items-center justify-around px-4 py-2">
        <div className="flex flex-col items-center">
          <img src={match.team1Logo} alt="Team 1 Logo" className="h-12 w-12" />
          <div className="font-bold text-lg mt-1">{match.team1}</div>
        </div>
        <div className="text-3xl font-bold self-center">VS</div>
        <div className="flex flex-col items-center">
          <img src={match.team2Logo} alt="Team 2 Logo" className="h-12 w-12" />
          <div className="font-bold text-lg mt-1">{match.team2}</div>
        </div>
      </div>
      <div className="px-4 py-2">
        <div className="font-bold text-md mb-1">{match.description}</div>
        <span className="inline-block bg-indigo-700 rounded-full px-2 py-1 text-sm font-semibold text-white mr-1 mb-1">{match.date}</span>
      </div>
    </div>
  );
}

function App() {
  const liveMatches = [{ team1: 'RCB', team1Logo: 'rcb.jpeg', team2: 'CSK', team2Logo: 'csk.jpeg', description: 'This is a live match.', date: 'Live Now' }];
  const upcomingMatches = [{ team1: 'MUM', team1Logo: 'mi.jpeg', team2: 'SRH', team2Logo: 'srh.jpeg', description: 'This is an upcoming match.', date: 'Tomorrow at 3 PM' }];
  const username = 'Player1';
  const balance = 100;
  return (
    <div className="App dark bg-gray-900 text-gray-300 min-h-screen overflow-x-hidden">
      <Navbar className="bg-gray-800 text-gray-300" username={username} balance={balance} />
      <div className="p-4">
        <h1 className="text-3xl font-bold text-gray-300">Live Matches</h1>
        <div className="flex flex-wrap justify-center">
          {liveMatches.map((match, index) => <MatchCard key={index} match={match} />)}
        </div>

        <h1 className="text-3xl font-bold mt-4 text-gray-300">Upcoming Matches</h1>
        <div className="flex flex-wrap justify-center">
          {upcomingMatches.map((match, index) => <MatchCard key={index} match={match} />)}
        </div>
      </div>
    
    </div>
  );
}

export default App;