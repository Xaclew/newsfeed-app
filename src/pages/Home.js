import React from "react";
import { useState, useEffect} from "react";


function Home() {
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=d633a2084ead4345854a2a7b4fa58458`
      )
  
      let fetchedData = response.json();
      fetchedData.then((data)=>{setNewsData(data.articles)});
    }
    getData()
  }, []);

  return (
    <div>
      {newsData.map(article => (
        <img src={article.urlToImage}/>
      ))}
    </div>
  )
  
  //   <div>
  //   {/* <Navigation>
  //     <SearchBar></SearchBar>
  //   </Navigation>
  //   <Header/> */}
  //   <section className="favorites"> Hi</section>
  //   <section className="recently viewed"></section>
  //   <footer></footer>
  //   </div>
  // );
}

export default Home;