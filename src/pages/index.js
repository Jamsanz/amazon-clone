import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({products,rate}) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header/>
     <main className="max-w-screen-lg mx-auto">
       {/* Banner */}
       <Banner />
       {/* ProductFeed */}
       <ProductFeed products={products} rate={rate} />
     </main>
    </div>
  );
}

export const getServerSideProps= async ()=>{
  const products= await fetch('https://fakestoreapi.com/products').then(res=>res.json());
  const rate= await fetch('https://api.fastforex.io/fetch-one?from=USD&to=NGN&api_key=da884fc356-4f9d2f4642-qykhyd').then(res=>res.json());
  return{
    props:{
      products,
      rate
    }
  }
};