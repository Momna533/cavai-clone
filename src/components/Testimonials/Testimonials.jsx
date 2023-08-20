import React, { useState, useRef } from 'react';

function Testimonials(){
    const sliderRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startPosition, setStartPosition] = useState(0);
    const [startScrollLeft, setStartScrollLeft] = useState(0);
  
    const handleMouseDown = (event) => {
      setIsDragging(true);
      setStartPosition(event.clientX);
      setStartScrollLeft(sliderRef.current.scrollLeft);
    };
  
    const handleMouseMove = (event) => {
      if (!isDragging) return;
      const deltaX = event.clientX - startPosition;
      sliderRef.current.scrollLeft = startScrollLeft - deltaX;
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
    };
  
    const handleMouseLeave = () => {
      setIsDragging(false);
    };
    return(
        <>
        <div className="testimonials">
           <div className="testimonials_content">
           <h1>Testimonials</h1>
            <div className="testimonials_slide"
                   ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}>
                <div className="testimonials_content_entry">
                    <div className="top">
                        <img src={require("../../assets/testimonials.jpg")} alt="testimonials_img" width={"100px"} />
                        <div>
                            <h4>Alen Waker</h4>
                            <p>Digital marketing,USA</p>
                        </div>
                    </div>
                    <div className="bottom">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam ratione, aut laudantium ut perferendis dolor repellendus dolorem mollitia recusandae.</p>
                    </div>
                </div>
                <div className="testimonials_content_entry">
                    <div className="top">
                        <img src={require("../../assets/testimonials.jpg")} alt="testimonials_img" width={"100px"} />
                        <div>
                            <h4>Alen Waker</h4>
                            <p>Digital marketing,USA</p>
                        </div>
                    </div>
                    <div className="bottom">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam ratione, aut laudantium ut perferendis dolor repellendus dolorem mollitia recusandae.</p>
                    </div>
                </div>
                <div className="testimonials_content_entry">
                    <div className="top">
                        <img src={require("../../assets/testimonials.jpg")} alt="testimonials_img" width={"100px"} />
                        <div>
                            <h4>Alen Waker</h4>
                            <p>Digital marketing,USA</p>
                        </div>
                    </div>
                    <div className="bottom">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam ratione, aut laudantium ut perferendis dolor repellendus dolorem mollitia recusandae.</p>
                    </div>
                </div>
                <div className="testimonials_content_entry">
                    <div className="top">
                        <img src={require("../../assets/testimonials.jpg")} alt="testimonials_img" width={"100px"} />
                        <div>
                            <h4>Alen Waker</h4>
                            <p>Digital marketing,USA</p>
                        </div>
                    </div>
                    <div className="bottom">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam ratione, aut laudantium ut perferendis dolor repellendus dolorem mollitia recusandae.</p>
                    </div>
                </div>
                </div>
           </div>
        </div>

        </>
    )
}
export default Testimonials;