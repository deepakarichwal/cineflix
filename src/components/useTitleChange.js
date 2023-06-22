import { useEffect } from "react";

export const useTitleChange = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return null;
};
