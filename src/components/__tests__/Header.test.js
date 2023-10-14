import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import "@testing-library/jest-dom"
import { BrowserRouter, redirect } from "react-router-dom"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"

describe("Header Test",()=>
{
    test("Should load Login Button", () =>
    {
        render(
        <BrowserRouter>
        <Provider store={appStore} >
        <Header />
        </Provider>
        </BrowserRouter>
        )

        const login = screen.getByRole("button",{name:"Login"})
        expect(login).toBeInTheDocument()
        
    })
    test("Should load Login Button Click", () =>
    {
        render(
        <BrowserRouter>
        <Provider store={appStore} >
        <Header />
        </Provider>
        </BrowserRouter>
        )

        const login = screen.getByRole("button",{name:"Login"})
       fireEvent.click(login);
       const Logout = screen.getByRole("button",{name:"Login"})
        expect(Logout).toBeInTheDocument()
        
    })
})