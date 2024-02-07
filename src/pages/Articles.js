import React from "react";
import { useState, useEffect} from "react";


function Articles() {
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
  }, [])
  
  ;

  console.log(newsData);
  


  return (
    <div>
    <Navigation></Navigation>
    <SearchBar></SearchBar>
    <ul>
        
    </ul>
    <footer></footer>
    </div>
  );
}

export default Articles;