import { Button } from "./Button";
import { Item } from "./Item";
import { useLogDidMount } from "./useLogDidMount";

export function List({ items, onAdd }) {
  useLogDidMount("List did mount");
  console.log("List render");
  return (
    <div>
      <Button onClick={onAdd} />
      {items.map((item, i) => (
        <Item key={item.name + i} {...item} />
      ))}
    </div>
  );
}
