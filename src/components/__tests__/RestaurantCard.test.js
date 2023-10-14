import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import "@testing-library/jest-dom"
import mockData from "../mocks/mocksdata.json"
test("should restaurant card render",()=>
{
    render(<RestaurantCard data = {mockData} />
    )
    const  title = screen.getByText("McDonald's")
    expect(title).toBeInTheDocument()
})