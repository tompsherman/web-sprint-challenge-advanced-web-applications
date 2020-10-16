//import libraries
import React from "react";
import { getByRole, render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { useEffect as mockUseEffect } from "../api/useEffect" 

// create mock before test
jest.mock("../api/useEffect.js")


//set up test
  test("Fetches data and renders the bubbles", async () => {
    // mock resolved results
      // mockUseEffect.mockResolvedValueOnce({
      //   message: [{
      //     color: "aliceblue",
      //     code: {
      //       hex: "#f0f8ff"
      //     },
      //     id: 1
      //    },
      //    {
      //     color: "limegreen",
      //     code: {
      //       hex: "#99ddbc"
      //     },
      //     id: 2
      //    },
      //    {
      //     color: "aqua",
      //     code: {
      //       hex: "#00ffff"
      //     },
      //     id: 3
      //    }]
      // })
      render (<BubblePage />)
  })

