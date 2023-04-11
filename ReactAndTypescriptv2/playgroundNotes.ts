type User = {
  firstName: string;
  lastName: string;
  age: number;
}

// Template literal types, quite userful

type ActionTypes = `update-${keyof User}`;

// Generic types T, K

type Actions<T, K extends keyof T & string> = {
  type: `update-${K}`;
  payload: T[K];
}

type UpdateNameAction = Actions<User, 'firstName'>

type LinkNode<T> = {
  value: T;
  next?: LinkNode<T>;
}

const TextNode: LinkNode<string> = {
  value: "twenty-three",
  next: {
      value: "twentry-four"
  }
}

// Being explicit with the arg typing
// const createLink = (value: string): LinkNode<string> => {return { value }}

// Letting TS use a generic and then figure it out from there
const createLink = <T,>(value: T): LinkNode<T> => {
  return { value };
}

const stringNode = createLink("strang");
const numNode = createLink(23);