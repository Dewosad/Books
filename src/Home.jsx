import { useState } from "react";
import { fetchBooks } from "./utils/api";
import Card from "./components/Card";

function Home() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const handleSearch = () => {
    if (!query) return;

    fetchBooks(query)
      .then((data) => {
        if (data && data.items) {
          setBooks(data.items);
        } else {
          console.error("Response error");
          setBooks([]);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // const truncateDescription = (text, wordLimit) => {
  //   const words = text.split("");
  //   if (words.length > wordLimit) {
  //     return words.slice(0, wordLimit).join("") + "...";
  //   }
  //   return text;
  // };

  return (
    <div
      className={`bg-gray-900 px-10 py-10 ${
        books.length > 0 ? "h-[100%]" : "h-screen"
      }`}
    >
      {books.length > 0 ? (
        <div className="flex flex-col gap-10">
          {books.slice(0, 4).map((book) => (
            <Card
              key={book.id}
              title={book.volumeInfo?.title}
              image={book.volumeInfo?.imageLinks?.thumbnail}
              authors={book.volumeInfo?.authors}
              // description={truncateDescription(
              //   book.volumeInfo?.description,
              //   30
              // )}
              description={book.volumeInfo?.description}
              releaseDate={book.volumeInfo?.publishedDate}
              Pages={book.volumeInfo?.pageCount}
              rating={book.volumeInfo?.averageRating}
              type={book.volumeInfo?.industryIdentifiers?.[0].identifier}
              category={book.volumeInfo?.categories}
            />
          ))}
        </div>
      ) : (
        <div className="">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for books"
            className="w-full p-2 text-lg text-gray-900 rounded-lg"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
