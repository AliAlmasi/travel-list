export default function Stats({ items }) {
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / items.length) * 100);
  return (
    <footer className="stats">
      {items.length === 0 ? (
        <em>Start adding some items to your packing list 🚀</em>
      ) : percentage === 100 ? (
        <em>You got everything! Ready to go ✈️</em>
      ) : (
        <em>
          💼 You have{" "}
          {items.length === 1
            ? `${items.length} item`
            : `${items.length} items`}{" "}
          on your list and you already packed {numPacked} (
          {isNaN(percentage) ? 0 : percentage}
          %)
        </em>
      )}
    </footer>
  );
}
