import React , { useEffect , useState } from 'react'
import "../assets/css/imageslider.css"

export default function ImageSlider() {
    const [count, setCount] = useState(0);
    
        
    return (
        <div className="img-slider">
            <div className="banner"><div className="text"><pre>NEW 2020 COLLECTIONS

                                        <br/>BROWSE NEW COLLECTIONS</pre></div>
               <div className="bullets">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div></div>
        </div>
    )
}
