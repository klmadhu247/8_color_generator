import React, { useState } from "react";
import './color.css';
import { hover } from "@testing-library/user-event/dist/hover";

function Random_Color() {
    const [showColor, setShowColor] = useState(false);
    const [colors, setColors] = useState([]);

    const [copyColor,setCopyColor] = useState('')

    const [colorSelection,setColorSelection] = useState(false)

    const [selectedIndex,setSelectedIndex] = useState(null);

    
    




    const getColor = () => {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            let randomIndex = Math.floor(Math.random() * 16);
            color += letters[randomIndex];
        }
        return color;
    };

    const handleClick = () => {
        setShowColor(true);
       
       
            const newColors = Array.from({ length: 8 }, () => getColor());
        setColors(prevColors=>[...prevColors, newColors]); 

        
        
        
    };

    const handleColorClick=(index,Paletteindex)=>
    {
        setColorSelection(true);
        setSelectedIndex(index)


        setCopyColor(colors[Paletteindex][index])
    }

    const handleDelete=(paletteIndex)=>
    {
        const filteredColorSet = colors.filter((col,index)=>index!=paletteIndex)
        setColors(filteredColorSet)

    }

    console.log('The COLORS ARE: ', colors);

    console.log('Copied COLOR IS: ',copyColor);
    console.log(colorSelection)

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: '30px' }}>
                <button onClick={handleClick}>Generate 8-Color Palette</button>
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginTop: '20px' }}>
               <div style={{display:"flex", flexDirection:"column"}}> { colors.map((colorSet, paletteIndex) => (
    <div key={paletteIndex} style={{ margin: '20px 0', textAlign: 'center' }}>
      <div style={{display:"flex", justifyContent:"space-between"}}>  <p >Palette: {paletteIndex + 1}</p><p onClick={()=>handleDelete(paletteIndex)} className="Delete">Delete palette</p></div> 
        <div style={{ display: "flex", justifyContent: "center" }}>
            {colorSet.map((clr, index) => (
                <div key={index} style={{ textAlign: 'center', margin: '0 10px' }}>
                    <span onClick={() => handleColorClick(index, paletteIndex)}
                          style={{
                              backgroundColor: clr,
                              width: '50px',
                              height: '50px',
                              borderRadius: '50%',
                              display: 'inline-block'
                          }}>
                    </span>
                    <div style={{ color: 'black', marginTop: '5px' }}>
                        {index === selectedIndex && colorSelection ? 'Copied' : clr}
                    </div>
                </div>
            ))}
        </div>
    </div>
))}

                </div>
            </div>
        </div>
    );
}

export default Random_Color;
