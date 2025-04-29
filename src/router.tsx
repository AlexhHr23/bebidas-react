import { BrowserRouter, Routes, Route } from "react-router"
import { IndexPage } from "./views/IndexPage"
import { FavoritePage } from "./views/FavoritePage"

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<IndexPage/>}/>
            <Route path="/favoritos" element={<FavoritePage/>}/>
        </Routes>
    </BrowserRouter>
  )
}
