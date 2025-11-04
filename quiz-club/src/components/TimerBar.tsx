import React from 'react';

type Props = {
  timeLeft: number;
  totalTime: number;
};

const TimerBar: React.FC<Props> = ({ timeLeft, totalTime }) => {
  const percentage = (timeLeft / totalTime) * 100;

  let barColor = 'bg-green-500';
  if (percentage < 50) {
    barColor = 'bg-yellow-500';
  }
  if (percentage < 25) {
    barColor = 'bg-red-500';
  }

  return (
    <div className="w-full bg-gray-200 rounded-full h-8 mb-4 overflow-hidden border-2 border-gray-300">
      <div
        className={`h-full rounded-full ${barColor} transition-all duration-1000 ease-linear flex items-center justify-center`}
        style={{ width: `${percentage}%` }}
      >
        {/* {percentage > 10 && (
          <span className="text-white font-bold text-sm">
            {timeLeft}s
          </span>
        )} */}
      </div>
    </div>
  );
};

export default TimerBar;