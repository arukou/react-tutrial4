import { useEffect, useState } from "react";

async function fetchVerse(name) {
  const url = `${name}.txt`;
  const response = await fetch(url);
  return response.text();
}

export default function App() {
    return (
      <>
        <header>
          <h1>The Can Store</h1>
        </header>
        <div>
          <aside>
            <form>
              <div>
                <label htmlFor="category">Choose a category:</label>
                <select id="category">
                  <option>All</option>
                  <option>Vegetables</option>
                  <option>Meat</option>
                  <option>Soup</option>
                </select>
              </div>
              <div>
                <label htmlFor="searchTerm">Enter search term:</label>
                <input type="text" id="searchTerm" placeholder="e.g. beans" />
              </div>
              <div>
                <button>Filter results</button>
              </div>
            </form>
          </aside>
          <main></main>
        </div>
        <footer>
          <p>All icons found at the Noun Project:</p>
          <ul>
            <li>
              Bean can icon by{" "}
              <a href="https://thenounproject.com/yalanis/">Yazmin Alanis</a>
            </li>
            <li>
              Vegetable icon by{" "}
              <a href="https://thenounproject.com/skatakila/">Ricardo Moreira</a>
            </li>
            <li>
              Soup icon by{" "}
              <a href="https://thenounproject.com/ArtZ91/">Arthur Shlain</a>
            </li>
            <li>
              Meat Chunk icon by{" "}
              <a href="https://thenounproject.com/smashicons/">Oliviu Stoian</a>.
            </li>
          </ul>
        </footer>
      </>
    );
  }