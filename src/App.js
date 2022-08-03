import AppHeader from "./components/AppHeader"
import AppFooter from "./components/AppFooter"
import { Route, Routes } from "react-router-dom"

function App() {
    return (
        <>
            <AppHeader />
            <div
                style={{
                    backgroundColor: "pink",
                    flexDirection: "column-reverse",
                    justifyContent: "space-between",
                }}
                flex={1}
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="demos" element={<Demos />} />
                    <Route path="pricing" element={<Pricing />} />
                    <Route path="integrations" element={<Integrations />} />
                </Routes>
                <AppFooter flex={1} />
            </div>
        </>
    )
}

const Home = () => <div>Home</div>
const Pricing = () => <div>pricing</div>
const Integrations = () => <div>integrations</div>
const Demos = () => <div>demos</div>

export default App
