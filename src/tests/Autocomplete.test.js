import React from "react";
import { render, screen} from '@testing-library/react'

import Autocomplete from "../components/Autocomplete";

jest.mock("../utils/api");

describe("Given the application is loaded", () => {
  describe("When the user is on the home page", () => {

    it("Then auto complete component renders correctly", () => {
      render(<Autocomplete />);
  
      const input = screen.getByRole('textbox', {placeholder: /search for a product/i})
      
      expect(input).toBeInTheDocument();
    });
  })
})
