import { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Card } from './components/Card/Card';
const apiKey = '4cfa8ac84f434a4d8985a24296c8e965';


export type Product = {
  title: string;
  description: string;
  category: string;
  image: string;
  id: number;
  rating: {
    count: number;
    rate: number;
  }
}

export type Article = {
  source: {
    id: number;
    name: string;
  }
  author: string;
  title: string;
  url: string;
  description: string;
  urlToImage: string;
  content: string;
}

// componenti
const App = () => {
  const [textInInput, setTextInInput] = useState('')
  const [textToSearch, setTextToSearch] = useState('tesla');
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    console.log("sto invocando questo use effect");
  })

  useEffect(() => {
    setArticles([]);
    axios.get<{articles: Article[]}>(`https://newsapi.org/v2/everything?q=${textToSearch}&from=2023-04-05&sortBy=publishedAt&apiKey=${apiKey}`)
    .then((res) => {
      setArticles(res.data.articles);
    })
  }, [textToSearch]);

  return (
    <div className="App">
      <input onChange={(event) => {setTextInInput(event.target.value)}} />
      <button onClick={() => { setTextToSearch(textInInput) }} >Cerca</button>
      {articles.map(item => <Card author={{name: item.author, image: item.urlToImage, checked: true}} content={{text: item.description, image: item.urlToImage}}  />)}
    </div>
  );
}

/*
{news.map(item => {
          return (
          <Card author={item.author} content={item.content} >
            <>
              <p>Pippo</p>
              <p>Ciao</p>
            </>
            </Card>
          )
        }
        )}
        */

export default App;
