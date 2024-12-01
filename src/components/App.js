import Logo from "./Logo";
import Form from "./Form";
import PackageList from "./PackageList";
import Stats from "./Stats";

import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const handleAddItem = (item) => setItems((items) => [...items, item]);
  const handleDeleteItem = (id) =>
    setItems((items) => items.filter((item) => item.id !== id));
  const handleToggleItem = (id) =>
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  const handleClearList = () =>
    items.length > 0 &&
    window.confirm("Are you sure to delete all items?") &&
    setItems([]);

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackageList
        items={items}
        onClearList={handleClearList}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}
