import { useEffect, useState } from "react";

//! Here we have,
//! Extracted logic that was present in the Search component into a hook.
//! This hook will return an object that contains the isLoading, posts, and error values.

export default function useGetMemesHook() {
  const [memes, setMemes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getMemesData();
  }, []);

  const getMemesData = async () => {
    try {
      setIsLoading(true);
      const resp = await fetch("https://api.imgflip.com/get_memes");
      const data = await resp.json();
      setMemes(data.data.memes);
      setIsLoading(false);
    } catch (err) {
      setError(`Error getting memes data. Error Message:${err}`);
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    memes,
    error,
  };
}
