import { useState } from "react";
import Bio from "./Bio";
import Controls from "./Controls";
import Hire from "./Hire";

function Profile({ hours = 0 }){
  const [followers, setFollowers] = useState(0);
  const [rate, setRate] = useState(0);
  const [currentHours, setCurrentHours] = useState(hours);
  const handleFollow = () => setFollowers((count) => count + 1);
  const handleAddRate = () => setRate((currentRate) => currentRate + 1);
  const handleAddHour = () => setCurrentHours((current) => current + 1);
  const handleClear = () => setCurrentHours(0);

    return (
      <>
    <div>
        <Bio name="Chad Ellie N. Sanchez" username="@ellienanachi" />
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

        <Controls handleFollow={handleFollow} handleAddRate={handleAddRate} />
        <Hire hours={currentHours} rate={rate} handleAddHour={handleAddHour} handleClear={handleClear} />
      </>
    );
}

export default Profile;