import { useEffect, useState } from 'react';
import Quotes from './quotes';
import InspirationalQuote from './quote';
import Loading from './loading';

export type Quote = {
  id: number;
  content: string;
  source?: string;
};

export const fetchRandomQuote = async () => {
  const response = await fetch(`/api/quotes/random`);
  return response.json();
};

export const fetchQuotes = async (count: number) => {
  const response = await fetch(`/api/quotes?limit=${count}`);
  return response.json();
};

const Application = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  if (quotes.length === 0) return <Loading />;
  return (
    <main className="mx-auto w-full max-w-2xl py-16">
      {/* OnSubmit usage */}
      {/* <Quotes count={count} onSubmit={() => fetchQuotes(count).then(setQuotes)}> */}
      {/* setQuotes usage */}
      <Quotes setQuotes={setQuotes}>
        <div className="grid grid-cols-2 gap-4">
          {quotes.map((quote) => (
            <InspirationalQuote
              content={quote.content}
              source={quote.source}
              key={quote.id}
            />
          ))}
        </div>
      </Quotes>
    </main>
  );
};

export default Application;
