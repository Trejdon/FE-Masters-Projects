import { useContext, useState } from 'react';
import {
  createItem,
  filterItems,
  getInitialItems,
  removeItem,
  updateItem,
} from '../lib/items';
import Header from './header';
import ItemList from './item-list';
import MarkAllAsUnpacked from './mark-all-as-unpacked';
import NewItem from './new-item';
import { ItemsContext } from '../context';

const Application = () => {
  // const [items, setItems] = useState(getInitialItems());

  // const add = (name: string) => {
  //   const item = createItem(name);
  //   setItems([...items, item]);
  // };

  // const update = (id: string, updates: any) => {
  //   setItems(updateItem(items, id, updates));
  // };

  // const remove = (id: string) => {
  //   setItems(removeItem(items, id));
  // };

  // const unpackedItems = filterItems(items, { packed: false });
  // const packedItems = filterItems(items, { packed: true });

  // const markAllAsUnpacked = () => {
  //   return setItems(items.map((item) => ({ ...item, packed: false })));
  // };

  const { items, add, markAllAsUnpacked, unpackedItems, packedItems} = useContext(ItemsContext);

  return (
    <main className="mx-auto flex flex-col gap-8 p-8 lg:max-w-4xl">
      <Header items={items} />
      <NewItem addItem={add} />
      <section className="flex flex-col gap-8 md:flex-row">
        <ItemList
          title="Unpacked Items"
          items={unpackedItems}
        />
        <ItemList
          title="Packed Items"
          items={packedItems}
        />
      </section>
      <MarkAllAsUnpacked onClick={markAllAsUnpacked} />
    </main>
  );
};

export default Application;
