import React from "react";
import { getByRole, render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { useEffect as mockUseEffect } from "../api/useEffect" 

jest.mock("../api/useEffect.js")

const colorList= [{
 color: "aliceblue",
 code: {
   hex: "#f0f8ff"
 },
 id: 1
},
{
 color: "limegreen",
 code: {
   hex: "#99ddbc"
 },
 id: 2
},
{
 color: "aqua",
 code: {
   hex: "#00ffff"
 },
 id: 3
}]
  test("Fetches data and renders the bubbles", async () => {

    // render app 
      render (<BubblePage />)
    // fetched data from API

    // component waits for API then renders bubbles returned
  })
