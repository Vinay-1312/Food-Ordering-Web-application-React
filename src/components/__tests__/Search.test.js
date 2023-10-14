import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import mockData from "../mocks/MockRest.json"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
global.fetch = jest.fn(()=>
{
    return Promise.resolve({
        json: () =>{
            return Promise.resolve(mockData);
        }
    })
});
test("Should redner the body component",async ()=>
{
    await act (async ()=>
    
    render(
    
        <BrowserRouter>
    <Body />
    </BrowserRouter>));

     const searchBTn = screen.getByRole("button",{name:"Search"});

     const searchText = screen.getByTestId("searchText");
     fireEvent.change(searchText,{target: {value:"burger" } })
     fireEvent.click(searchBTn)
     const resCards = screen.getAllByTestId("resCard")
     expect(resCards.length).toBe(2)
})