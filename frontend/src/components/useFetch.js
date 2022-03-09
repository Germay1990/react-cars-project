import { useEffect, useState } from "react";

const useFetch = (url) => {
  let [data, setData] = useState(null);
  let [isPending, setIsPending] = useState(true);
  let [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });
    return () => abortCont.abort();
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
