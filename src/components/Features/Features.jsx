function Features({heading1,heading2,heading3,desc,img1,img2,img3}) {
    return (<>
    <section className="features">
    <div className="features_content">
        <div className="features_content_entry">
            <img src={img1} alt="feature_img" />
            <h2>{heading1}</h2>
            <p>{desc}</p>
        </div>
        <div className="features_content_entry">
            <img src={img2} alt="feature_img" />
            <h2>{heading2}</h2>
            <p>{desc}</p>
        </div>
        <div className="features_content_entry">
            <img src={img3} alt="feature_img" />
            <h2>{heading3}</h2>
            <p>{desc}</p>
        </div>
    </div>
</section>
    </>)
    
  }
  
  export default Features;