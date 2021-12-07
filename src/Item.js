export function Item(item) {
  console.log("render", item.name);
  return <div className="item">{item.name}</div>;
}
