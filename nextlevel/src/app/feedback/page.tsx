"use client";

import { Fragment, useState, useEffect, use } from "react";
import type { feedback } from "@/pages/api/feedback/[feedbackId]";

interface data {
  feedback: feedback[];
}

interface oneData {
  feedback: feedback;
}

export default function FeedbackPage() {
  // const dataResult = use(getData());
  const [result, setresult] = useState<data>();
  const [feedback, setFeedback] = useState<feedback>();
  const [loading, setloading] = useState<boolean>(true);
  useEffect(() => {
    fetch(`/api/feedback`)
      .then((res) => res.json())
      .then((data) => {
        setresult(data);
        setloading(false);
      });
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  function loadFeedbackHandler(id: string) {
    const choice = result?.feedback.find((data: feedback) => {
      return data.id === id;
    });
    setFeedback(choice);
  }

  return (
    <Fragment>
      {feedback && <p>{feedback?.email}</p>}
      <ul>
        {result &&
          result.feedback.map((data: feedback) => (
            <li key={data.id}>
              {data.text}
              <button onClick={() => loadFeedbackHandler(data.id)}>
                button
              </button>
            </li>
          ))}
      </ul>
    </Fragment>
  );
}

// export async function getData() {
//   const data = await (
//     await fetch(`/api/feedback`, { cache: "no-store" })
//   ).json();
//   console.log(data);
//   return {
//     props: {
//       data: data,
//     },
//   };
// }
