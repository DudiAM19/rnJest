import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import App from '../App';

describe('testing app', () => {
  it('success', () => {
    const page = render(<App />);
    page.getAllByTestId('btnChange');
  })
})