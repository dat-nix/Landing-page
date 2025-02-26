"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Scoreboard() {
  // Fake data state 
  const [scoreData, setScoreData] = useState({
    matchType: "MALE INDIVIDUAL",
    player1: { hit: "M K", score: 2, color: "gray" },
    player2: { hit: "D", score: 1, color: "red" },
    club1: "RMIT Shinsei Kendo Club",
    club2: "RMIT Shinsei Kendo Club",
  });

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center text-white p-4 bg-black">
      {/* Match Type */}
      <p className="text-sm">Lasted update</p>
      <h2 className="text-lg font-bold">{scoreData.matchType}</h2>

      {/* Scoreboard */}
      <div className="flex items-center gap-8 my-4 text-4xl font-bold">
        {/* Player 1 */}
        <div className="flex flex-col items-center">
          <div className={`w-10 h-10 rounded-full bg-${scoreData.player1.color}`}></div>
          <p>{scoreData.player1.score}</p>
          <p className="text-sm">{scoreData.player1.hit}</p>
        </div>

        {/* Score separator */}
        <p>-</p>

        {/* Player 2 */}
        <div className="flex flex-col items-center">
          <div className={`w-10 h-10 rounded-full bg-${scoreData.player2.color}`}></div>
          <p>{scoreData.player2.score}</p>
          <p className="text-sm">{scoreData.player2.hit}</p>
        </div>
      </div>

      {/* Club Names */}
      <p className="text-sm">
        {scoreData.club1} <span className="mx-2">VS</span> {scoreData.club2}
      </p>
    {/* Visit RIKT page */}
      <Link
        href="/rikt"
        className="mt-6 px-6 py-3 text-lg font-semibold bg-orange-500 text-black rounded-lg hover:bg-orange-600 transition"
      >
        Visit RIKT
      </Link>
    </div>
  );
}
