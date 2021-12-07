import { useLogDidMount } from "./useLogDidMount";

export function Button({ onClick }) {
  useLogDidMount("Button did mount");
  console.log("Button render");
  return (
    <button className="button" onClick={onClick}>
      add
    </button>
  );
}
