import React , {useState , useEffect} from 'react'
import test from "../assets/img/bath2.jpg"
export default function SectionFour() {
    const [isPhone, setIsPhone] = useState(false);
    useEffect(() => {
        if(window.innerWidth <= 900)
        setIsPhone(true)
    }, [])
    return (
        <div className="sectionFour-wrapper">
            <div className="top">
               <div className="w-50 d-flex justify-content-center align-items-center ml-5"> <div className="item">
                    <img alt="" src={test}></img>
                </div>
                <div className="item">
                    <img alt="" src={test}></img>
                </div>
                <div className="item">
                    <img alt="" src={test}></img>
                </div></div>
                <div className="w-50 d-flex justify-content-center align-items-center mr-5"><div className="item">
                    <img alt="" src={test}></img>
                </div>
                <div className="item">
                    <img alt="" src={test}></img>
                </div>
                <div className="item">
                    <img alt="" src={test}></img>
                </div></div>
            </div>
            <div className="bottom">
                <div className="top"><h1>Marvellous Marble</h1></div>
            {isPhone ? (<div className="bottom">
                <div className="item">
                    <img alt="" src={test}></img>
                    <h6>Carrara Polished Marble</h6>
                    <h6>From £71.98 M</h6>
                </div>
              
            </div>) : (<div className="bottom">
                <div className="item">
                    <img alt="" src={test}></img>
                    <h6>Carrara Polished Marble</h6>
                    <h6>From £71.98 M</h6>
                </div>
               <div className="item">
                    <img alt="" src={test}></img>
                    <h6>Carrara Polished Marble</h6>
                    <h6>From £71.98 M</h6>
                </div>
                <div className="item">
                    <img alt="" src={test}></img>
                    <h6>Carrara Polished Marble</h6>
                    <h6>From £71.98 M</h6>
                </div>
                <div className="item">
                    <img alt="" src={test}></img>
                    <h6>Carrara Polished Marble</h6>
                    <h6>From £71.98 M</h6>
                </div>
                <div className="item">
                    <img alt="" src={test}></img>
                    <h6>Carrara Polished Marble</h6>
                    <h6>From £71.98 M</h6>
                </div>
            </div>)}
            </div>
        </div>
    )
}
