import React from 'react'
import Sectionji from './componenets/Section1/Sectionji'
import Section2 from './componenets/Section-2/Section-2'
export const App = () => {

  const data = [
  {
    heading: "Mountains",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    description: "Beautiful mountain landscapes with fresh air and scenic views."
  },
  {
    heading: "Ocean",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description: "Calm and vast ocean waves that bring peace and relaxation."
  },
  {
    heading: "Forest",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    description: "Green forests full of life, trees, and natural beauty."
  }, 
  {
    heading: "City",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    description: "Modern cities filled with lights, buildings, and busy life."
  }, 
  {
    heading: "Desert",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    description: "Hot and dry desert landscapes with endless sand dunes."
  }
]; 
  return (
    <div>
      <Sectionji data={data}/>
      <Section2 />
    </div>
  ) 
} 
export default App