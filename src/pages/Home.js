import React from 'react' //must download extension es7 to be able to shortcut component
import Header from "../Components/Header/Header";
import CardComponent from '../Components/Cards/Cards1/CardComponent';
import CardComponent2 from '../Components/Cards/Cards2/CardComponent2';
import CardComponent3 from '../Components/Cards/Cards3/CardComponent3';
import CardComponent4 from '../Components/Cards/Cards4/CardComponent4';
import FAQ from '../Components/FAQ/FAQ';

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
