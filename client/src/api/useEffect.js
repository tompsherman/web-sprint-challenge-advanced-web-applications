import React, { useState, useEffect } from "react";
import axios from "axios";

import {axiosWithAuth} from "../utils/axiosWithAuth";

const BubblePage = ({editing}) => {
  const [colorList, setColorList] = useState([]);
  const [effectTrigger, setEffectTrigger] = useState(false)
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(()=> {
    axiosWithAuth()
    .get('/colors')
    .then((response) => {
      setColorList(response.data)
      setEffectTrigger(true)
      })
    .catch((error)=> {
      console.log(error)})
  }, [effectTrigger])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} setEffectTrigger={setEffectTrigger} effectTrigger={effectTrigger} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
