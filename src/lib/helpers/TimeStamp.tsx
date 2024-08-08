"use client";

import useTimestampFormatter from "../hooks/useTimeStampFormatter";

export default function TimeStamp({ time }: { time: Date }) {
  const formattedTimestamp = useTimestampFormatter(time);

  return (
    <span className="font-bold text-lg">
      {formattedTimestamp.substring(0, 10)}{" "}
    </span>
  );
}
