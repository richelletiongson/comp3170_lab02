import './index.css'
import Book from './Book'
import { useState, useEffect } from 'react'
import booksData from '../data/books.json'

function App() {
  const [bookData, setBookData] = useState(null);
  const [bookData2, setBookData2] = useState(null);

  useEffect(() => {
    const getFirstBook = async () => {
      try {
        const response = await fetch('https://api.itbook.store/1.0/books/9781642002270');
        
        const bookData = await response.json();
        console.log(JSON.stringify(bookData));
        
        setBookData(bookData);
      } catch (error) {
        console.log("the error is " + error);
      }
    };

    const getSecondBook = async () => {
      try {
        const response = await fetch('https://api.itbook.store/1.0/books/9781484241844');
        
        const bookData = await response.json();
        console.log(JSON.stringify(bookData));
        
        setBookData2(bookData);
      } catch (error) {
        console.log("the error is " + error);
      }
    };

    getFirstBook();
    getSecondBook();
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1 className="header-title">Book Catalog</h1>
      </header>
      
      <main className="main-content">
        <div className="content">
          <div className="new-button-column">
            <button className="new">New</button>
          </div>
          
          <div className="books-container">
            {bookData && (
              <Book 
                image={bookData.image}
                price={bookData.price}
                url={bookData.url}
              />
            )}
            
            {bookData2 && (
              <Book 
                image={bookData2.image}
                price={bookData2.price}
                url={bookData2.url}
              />
            )}
    
            {booksData.slice(0, 3).map((book, index) => (
              <Book 
                key={book.isbn13}
                image={book.image}
                price={book.price}
                url={book.url}
              />
            ))}
          </div>
        </div>
      </main>
      
      <footer className="footer">
        <p className="footer-text">© Richelle Margarette Tiongson, 2025</p>
      </footer>
    </div>
  );
}

export default App;