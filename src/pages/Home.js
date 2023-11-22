import React from 'react' //must download extension es7 to be able to shortcut component
import Header from "../components/Header/Header";
import CardComponent from '../components/Cards/Cards1/CardComponent';
import CardComponent2 from '../components/Cards/Cards2/CardComponent2';
import CardComponent3 from '../components/Cards/Cards3/CardComponent3';
import CardComponent4 from '../components/Cards/Cards4/CardComponent4';
import FAQ from '../components/FAQ/FAQ';

const Home = () => {
  return (
    <>
      <Header/>
      <CardComponent/>
      <CardComponent2/>
      <CardComponent3/>
      <CardComponent4/>
      <FAQ/>
    </>   
  );
};

export default Home;
