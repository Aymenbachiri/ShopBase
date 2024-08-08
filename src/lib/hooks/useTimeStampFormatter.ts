"use client";

import { useEffect, useState } from "react";

export default function useTimestampFormatter(timestamp: Date) {
  const [formattedTimestamp, setFormattedTimestamp] = useState("");

  useEffect(() => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-US", options);

    setFormattedTimestamp(formattedDate);
  }, [timestamp]);

  return formattedTimestamp;
}
