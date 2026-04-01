
import { Suspense, useState } from 'react'
import './App.css'
import Bannar from './Components/Bannar'
import NavBar from './Components/NavBar'
import Rating from './Components/Rating'
import ToolsCards from './Components/ToolsCards'
import Cart from './Components/Cart'
import HeadLine from './Components/HeadLine'
import GetStarted from './Components/GetStarted'
import PricingSection from './Components/PricingSection'
import WorkflowSection from './Components/WorkflowSection'
import Footer from './Components/Footer'

const getTools =  async () => {
  const res = await fetch("ToolsData.json")
  return res.json()
} 
const ToolsPromise = getTools()

const pricingPromise = fetch("Popular.json")
  .then(res => res.json())

function App() {

const [activeTab, setActiveTab] = useState("Products")
const [carts, setCarts] = useState([]);  




  return (
    <>
      <NavBar carts={carts}></NavBar>
     
      <Bannar></Bannar>
      <Rating></Rating>
      <HeadLine></HeadLine>
      
      <div className="tabs tabs-box justify-center bg-transparent">
      
        <input onClick={() => setActiveTab("Products")} type="radio" name="my_tabs_1" className = {`tab w-40 font-bold rounded-full ${activeTab==="Products" ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white" : ""}`} aria-label="Products" defaultChecked/>
      
        <input onClick={() => setActiveTab("Cart")} type="radio" name="my_tabs_1" className= {`tab font-bold w-40 rounded-full ${activeTab === "Cart" ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white" : ""}`} aria-label={`Cart (${carts.length})`}/>
      </div>

      {activeTab === "Products" && <Suspense fallback={<p>Data Loading...</p>}> <ToolsCards ToolsPromise={ToolsPromise} carts={carts} setCarts={setCarts}></ToolsCards></Suspense>}

      {activeTab === "Cart" && <Cart carts={carts} setCarts={setCarts}></Cart>}
      
      <GetStarted></GetStarted>

      <PricingSection pricingPromise={pricingPromise}></PricingSection>

      <WorkflowSection></WorkflowSection>

      <Footer></Footer>
    </>
  )
}

export default App
