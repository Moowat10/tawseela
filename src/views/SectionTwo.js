import React, { Component } from 'react'
import img1 from "../assets/img/bath1.jpg"
import img2 from "../assets/img/bath2.jpg"


export default class SectionTwo extends Component {
    render() {
        return (
            <div className = "sectionTwo-wrapper">
               <div className = "pics1">
               <div className = "pic">
                    <img src={img2}/> 
                </div>
               <div className = "pic">
               <img src={img1}/>
               </div>
               <div className = "pic">
               <img src={img2}/>
               </div>
               <div className = "pic">
               <img src={img1}/>
               </div>
               </div>

               <div className = "pics2">
               <div className = "pic">
                    <img src={img2}/> 
                </div>
               <div className = "pic">
               <img src={img1}/>
               </div>
               <div className = "pic">
               <img src={img2}/>
               </div>
               <div className = "pic">
               <img src={img1}/>
               </div>
               </div>
               <div className = "seemorebtn">
                   <button>see more</button>

               </div>
               <div className = "sectionTwotitle">
                    <div className = "trendingtitle-holder">
                        <h2> Trending Now. </h2>
                         </div>
                    <div className = "instgramlink-holder">

                        <a><h5>Our Instgram Page</h5></a>
                    </div>
               </div>
            </div>
        )
}}