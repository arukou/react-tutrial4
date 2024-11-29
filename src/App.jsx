import { useEffect, useState } from "react";

async function fetchProducts() {
  const response = await fetch("/products.json");
  return response.json();
}

export default function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    (async () => {
      const productsData = await fetchProducts();
      setAllProducts(productsData);
      setFilteredProducts(productsData); 
    })();
  },[]);

  const handleResultClick = () => {
    let results = allProducts;

    if (selectedCategory !== "all") {
      results = results.filter((product) => product.type === selectedCategory);
    }
    if (searchTerm) {
      results = results.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    setFilteredProducts(results);
  }
  
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
                <select id="category" value={selectedCategory} onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  }}>
                  <option value="all">All</option>
                  <option value="vegetables">Vegetables</option>
                  <option value="meat">Meat</option>
                  <option value="soup">Soup</option>
                </select>
              </div>
              <div>
                <label htmlFor="searchTerm">Enter search term:</label>
                <input type="text" id="searchTerm" placeholder="e.g. beans" value={searchTerm}
                onChange={(e) => {setSearchTerm(e.target.value);}}/>
              </div>

              <div>
                <button type="button" onClick={handleResultClick}>Filter results</button>
              </div>
            </form>
          </aside>
          <main>
            {filteredProducts.map((product) => {
              const productName = product.name.substring(0, 1).toUpperCase() + product.name.substring(1);
              return(
                <section key={product.name} className={product.type}>
                  <h2>{productName}</h2>
                  <p>${product.price}</p>
                  <img src={`images/${product.image}`} alt={product.name} />
                </section>
              );
            })}
          </main>
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