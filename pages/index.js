import Head from 'next/head'
import Link from 'next/link';
import Hero from '../Components/PageComponents/HomePage/Hero';
import Seasonal from '../Components/PageComponents/HomePage/Seasonal';
import Categories from '../Components/PageComponents/HomePage/Categories';
import Occasion from '../Components/PageComponents/HomePage/CardsForOccasion/Occasional';
import Gifts from '../Components/PageComponents/HomePage/Gifts';
import TextComponent from '../Components/PageComponents/HomePage/TextComponent';
import '../styles/hero.module.css';
import Blog from '../Components/PageComponents/HomePage/Blog';


export default function Home() {
  return (
    <div className="home">
      <Head>
      </Head>
      <Hero/>
      <Seasonal/>
      <Categories/>
      <Occasion/>
      <Gifts/>
      <TextComponent/>
      <Blog/>
      <style jsx>
        {`
          .home{
            
          }
        `}
      </style>
    </div>
  )
}