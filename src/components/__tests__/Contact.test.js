import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"


describe("Contact US test",() =>{
test("Should load contact us page",()=>
{
    render(<Contact />);
   const heading =  screen.getByRole("heading");
   expect(heading).toBeInTheDocument();
});

test("Should load Button",()=>
{
    render(<Contact />);
   const button =  screen.getByRole("button");
   expect(button).toBeInTheDocument();
});


test("Should load 2 textbis",()=>
{
    render(<Contact />);
   const textbox =  screen.getAllByRole("textbox");
   expect(textbox.length).toBe(2);
});
});