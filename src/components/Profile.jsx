import { useState } from "react";
import Bio from "./Bio";
import Hire from "./Hire";

function Profile({ hours = 0 }){
  const [followers, setFollowers] = useState(0);
  const [rate, setRate] = useState(0);
  const [currentHours, setCurrentHours] = useState(hours);
  const handleFollow = () => setFollowers((count) => count + 1);
  const handleAddRate = () => setRate((currentRate) => currentRate + 1);
  const handleAddHour = () => setCurrentHours((current) => current + 1);
  const handleClear = () => setCurrentHours(0);
  const handleReset = () => window.location.reload();

    return (
      <>
    <div>
        <Bio />
          <div className="mt-6 flex gap-6">
            <div className="w-48 rounded-xl bg-[#FAF3E1] py-4 text-center">
              <p className="text-4xl font-bold text-[#FA8112]">{followers}</p>
              <p className="mt-1 text-lg">Followers</p>
            </div>
            <div className="w-48 rounded-xl bg-[#FAF3E1] py-4 text-center">
              <p className="text-4xl font-bold text-[#FA8112]">{rate}</p>
              <p className="mt-1 text-lg">PHP per hour</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            className="cursor-pointer rounded-lg bg-[#FA8112] px-8 py-3 text-xl font-bold text-[#222222]"
            onClick={handleFollow}
          >
            Follow
          </button>
          <button
            className="cursor-pointer rounded-lg bg-[#222222] px-8 py-3 text-xl font-bold text-[#FAF3E1]"
            onClick={handleAddRate}
          >
            Add rate
          </button>
          <button
            className="cursor-pointer rounded-lg border-2 border-[#222222] px-8 py-3 text-xl font-bold"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
        <Hire hours={currentHours} rate={rate} handleAddHour={handleAddHour} handleClear={handleClear} />
      </>
    );
}

export default Profile;