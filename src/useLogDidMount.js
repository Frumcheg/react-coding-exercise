import { useEffect } from "react";

export function useLogDidMount(text) {
  useEffect(() => {
    console.log(text);
  }, []);
}
