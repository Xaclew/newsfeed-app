import React from "react";
import "../styles/Header.css"

function Header() {

    const newsData = [
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Tucker Carlson: Russian state media revels in Moscow visit",
            "description": "The ex-Fox News host is in Moscow, as speculation grows that he may interview Vladimir Putin.",
            "url": "https://www.bbc.co.uk/news/world-europe-68221347",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/54FD/production/_132575712_gettyimages-1534161001.jpg",
            "publishedAt": "2024-02-06T17:52:11.1783348Z",
            "content": "Former Fox News host Tucker Carlson's visit to Moscow has received near-constant coverage in Russia's state media, amid speculation that he may interview President Vladimir Putin.\r\nSocial media has a… [+4140 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Boeing to be 'closely scrutinised' after mid-air blowout",
            "description": "The head of the US aviation regulator told US lawmakers they were stepping up safety checks.",
            "url": "https://www.bbc.co.uk/news/business-68220625",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/17316/production/_132289949_gettyimages-1913163765-1.jpg",
            "publishedAt": "2024-02-06T17:07:13.9440368Z",
            "content": "The head of the US aviation regulator has said Boeing is being \"closely scrutinised\", after a door plug broke off one of its planes mid-flight last month.\r\nFederal Aviation Administration (FAA) boss … [+3257 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Storm-battered California told to brace for more rain",
            "description": "A powerful storm that battered the state over the weekend is expected to bring more rain on Tuesday.",
            "url": "https://www.bbc.co.uk/news/world-us-canada-68206819",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/D83D/production/_132575355_gettyimages-1989095800.jpg",
            "publishedAt": "2024-02-06T16:52:19.1626906Z",
            "content": "Media caption, Watch: LA fire department rescue man from surging river\r\nThe record rain pounding California since Sunday has begun to ease, but officials have warned that mudslides and flooding remai… [+3896 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Donald Trump has no presidential immunity from election fraud charges, court rules - live updates",
            "description": "The former president will not be granted immunity and won't be shielded from criminal prosecution on election fraud.",
            "url": "https://www.bbc.co.uk/news/live/world-us-canada-68023315",
            "urlToImage": "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png",
            "publishedAt": "2024-02-06T16:22:19.1943145Z",
            "content": "US Special Counsel Jack Smith has charged Donald Trump with conspiring to overturn Joe Biden's victory in the 2020 election and committing fraud to stay in office.\r\nThe trial in that case was initial… [+986 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Police to pay $1.9m to black family held at gunpoint in Colorado",
            "description": "The 2020 arrest in Colorado was recorded by bystanders, which showed children handcuffed and crying.",
            "url": "https://www.bbc.co.uk/news/world-us-canada-68211285",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/53F2/production/_113809412_gettyimages-148988270.jpg",
            "publishedAt": "2024-02-06T15:37:15.9595904Z",
            "content": "A black mother and four children, who were held at gunpoint by police in Colorado, have been awarded $1.9m (£1.5m) in a settlement.\r\nBrittney Gilliam was wrongfully stopped in 2020 at a parking lot, … [+1970 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "What does the King's diagnosis mean for William, Harry and the other royals?",
            "description": "It's been a bleak midwinter for the Royal Family. Will the King's health news help to bring them together?",
            "url": "https://www.bbc.co.uk/news/uk-68211941",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0F4C/production/_132561930_gettyimages-1233751956.jpg",
            "publishedAt": "2024-02-06T12:37:22.3818701Z",
            "content": "It's been a bleak midwinter for the Royal Family. Prince William, Prince Harry and their royal relations will now face private anxieties and public pressures after the King's worrying health news.\r\nI… [+3885 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "King Charles latest news: King Charles' cancer 'caught early' says Sunak, after treatment begins",
            "description": "The King began a \"schedule of regular treatments\" on Monday and is staying at home in London, rather than hospital.",
            "url": "https://www.bbc.co.uk/news/live/uk-68213599",
            "urlToImage": "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png",
            "publishedAt": "2024-02-06T12:37:19.0077116Z",
            "content": "The King, pictured last monthImage caption: The King, pictured last month\r\nAfter bombshell royal announcements such as yesterdays news\r\nabout the Kings cancer diagnosis, theres a huge public demand f… [+926 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Country music legend Toby Keith dies aged 62",
            "description": "Toby Keith, one of country music's biggest stars, dies aged 62 - he had previously revealed he had stomach cancer",
            "url": "https://www.bbc.co.uk/news/world-us-canada-68215639",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/83B3/production/_115651733_breaking-large-promo-nc.png",
            "publishedAt": "2024-02-06T10:07:19.2882867Z",
            "content": "Country music star Toby Keith has died at the age of 62, according to a statement published on his website. \r\nHe previously said he had been diagnosed with stomach cancer, a fight he called \"debilita… [+520 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Nevada caucuses or primary: Why both Trump and Haley may claim victory",
            "description": "Republicans are holding two separate ballots this week, with the candidates not going head to head.",
            "url": "https://www.bbc.co.uk/news/world-us-canada-68208325",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/EC4F/production/_132559406_4ed7953cef2dbe882270e9642aa9e3ff2f2f1cdb362_754_4084_22972000x1125.jpg",
            "publishedAt": "2024-02-06T08:07:13.7729534Z",
            "content": "Against a backdrop of neon lights and the clink of casino chips, the Nevada caucuses were once a colourful and important stop in the race to become the presidential nominee.\r\nBut there are no such th… [+4078 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Ukraine-born Miss Japan winner relinquishes crown following affair",
            "description": "The controversial Ukraine-born model has resigned after a report on her relations with a married man.",
            "url": "https://www.bbc.co.uk/news/world-asia-68213223",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/A1CD/production/_132412414_a7304735.jpg",
            "publishedAt": "2024-02-06T03:37:18.2536523Z",
            "content": "The Ukraine-born winner of the Miss Japan beauty pageant has given up her crown after a tabloid report revealed her affair with a married man.\r\nKarolina Shiino, 26, was crowned Miss Japan two weeks a… [+1691 chars]"
        }
    ];

    // const [newsData, setNewsData] = useState(null);

    // useEffect(() => {
    //   async function getData() {
    //     const response = await fetch(
    //       `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=d633a2084ead4345854a2a7b4fa58458`
    //     )
    
    //     let fetchedData = response.json();
    //     fetchedData.then((data)=>{setNewsData(data.articles)});
    //   }
    //   getData()
    // }, []);

    return (
    <div>
      {newsData.map(article => (
        <img src={article.urlToImage}/>
      ))}
    </div>

    // console.log(newsData)

    )
}

export default Header;