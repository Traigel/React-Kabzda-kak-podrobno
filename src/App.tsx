import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
  return (
      <div>
        <PageTitle title={"This is APP component"}/>
        <PageTitle title={"My friends"}/>
        <Rating value={3}/>
        <Accordion titleValue={"Menu"} collapsed={true}/>
        <Accordion titleValue={"Users"} collapsed={false}/>
        <Rating value={4}/>
        <Rating value={1}/>
        <Rating value={0}/>
        <Rating value={5}/>
      </div>
  )
}

type PageTitlePropsType = {
    title : string
}

const PageTitle = (props: PageTitlePropsType) => {
  return <h1>{ props.title }</h1>
};

export default App;