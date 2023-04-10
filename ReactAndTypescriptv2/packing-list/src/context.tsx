import { useState, createContext, PropsWithChildren } from 'react';
import {
  createItem,
  filterItems,
  getInitialItems,
  removeItem,
  updateItem,
} from './lib/items';

type ItemState = {
  items: Item[];
  unpackedItems: Item[];
  packedItems: Item[];
  add: (name: string) => void;
  update: (id: string, updates: WithoutId) => void;
  remove: (id: string) => void;
  markAllAsUnpacked: () => void;
};

// Helpful utility methods when you only need partial types of a parent type
type PartialItem = Partial<Item>;
type WithoutId = Omit<PartialItem, 'id'>;

export const ItemsContext = createContext({} as ItemState);

const ItemsProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<Item[]>(getInitialItems());

  const add = (name: string) => {
    const item = createItem(name);
    setItems([...items, item]);
  };

  const update = (id: string, updates: WithoutId) => {
    setItems(updateItem(items, id, updates));
  };

  const remove = (id: string) => {
    setItems(removeItem(items, id));
  };

  const unpackedItems = filterItems(items, { packed: false });
  const packedItems = filterItems(items, { packed: true });

  const markAllAsUnpacked = () => {
    return setItems(items.map((item) => ({ ...item, packed: false })));
  };

  const value = {
    items,
    unpackedItems,
    packedItems,
    add,
    update,
    remove,
    markAllAsUnpacked,
  };

  // This would also work to figure out the type, however you have scoping problems with the context creation above
  // type DerivedItemsState = typeof value;

  return (
    <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
  );
};

export default ItemsProvider;
