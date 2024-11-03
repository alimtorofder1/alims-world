import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useProducts from '../../hooks/useProducts';
import ProductCard from '../../ProductCard/ProductCard';
import Product from '../Produsct/Product';


const AllProducts = () => {
  const [tabIndex , setTabindex]=useState(0)
  const [products]=useProducts();
  const Humidifier = products.filter(item=> item.category === "humidifier");
  const Lamp = products.filter(item=> item.category === "lamp");
  const Fan = products.filter(item=> item.category === "fan");
  const PowerBank = products.filter(item=> item.category === "powerBank");
  return (
    <div>
       <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabindex(index)}>
            <TabList>
                <Tab>Humidifier</Tab>
                <Tab>Lamp</Tab>
                <Tab>Fan</Tab>
                <Tab>PowerBank</Tab>
                <Tab>Drinks</Tab>
            </TabList>
            <TabPanel>
               <div className='grid grid-cols-2 md:grid-cols-3 gap-16'>
               {
                  Humidifier.map(item => <ProductCard key={item._id} item={item}></ProductCard>)
                }
               </div>
            </TabPanel>
            <TabPanel>
               {
                  Lamp.map(item => <ProductCard key={item._id} item={item}></ProductCard>)
                }
            </TabPanel>
            <TabPanel>
               {
                  Fan.map(item => <ProductCard key={item._id} item={item}></ProductCard>)
                }
            </TabPanel>
            <TabPanel>
               {
                  PowerBank.map(item => <ProductCard key={item._id} item={item}></ProductCard>)
                }
            </TabPanel>
            </Tabs>
            {
               products.map(item => <Product key={item._id} item={item}></Product>)
            }
    </div>
  );
};

export default AllProducts;