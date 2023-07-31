import React from "react";

export default function DateComponent({ date }) {
  if (!date) return null;

  let formattedDate = date.toLocaleString("en-US", {
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "UTC",
  });

  return <div>{formattedDate}</div>;
}
