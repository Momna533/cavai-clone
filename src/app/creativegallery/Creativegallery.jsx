import { useEffect,useState } from "react";
const items = [
    { id: 1, heading: 'one Lorem ipsum dolor sit amet.',  subheading :'Cases | lorem ipsum', category: 'category1' },
    { id: 2,  heading: 'two Lorem ipsum dolor sit amet.',  subheading :'Cases | lorem ipsum', category: 'category2' },
    { id: 3,  heading: 'three Lorem ipsum dolor sit amet.',  subheading :'Cases | lorem ipsum', category: 'category4' },
    { id: 4,  heading: 'four Lorem ipsum dolor sit amet.',  subheading :'Cases | lorem ipsum',category: 'category3' },
    { id: 5,  heading: 'five Lorem ipsum dolor sit amet.',  subheading :'Cases | lorem ipsum', category: 'category2' },
    // Add more items with different categories
  ];

  const ParentButton = ({ category, onClick, active }) => {
    return (
      <button className={active ? 'active' : ''} onClick={() => onClick(category)}>
        {category}
      </button>
    );
  };

  const CategoryButton = ({ category, onClick }) => {
    return (
      <button onClick={() => onClick(category)}>
        {category}
      </button>
    );
  };
    const categoriesByParent = {
    parent1: ['category1', 'category2'],
    parent2: ['category3', 'category4'],
    // Add more categories for other parents
  };
function Creativegallery() {
    const [activeParent, setActiveParent] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);
  
    const handleParentClick = (parent) => {
      setActiveParent(parent);
      setActiveCategory(null);
    };
  
    const handleCategoryClick = (category) => {
      setActiveCategory(category);
    };
  
    const handleShowAll = () => {
      setActiveParent(null);
      setActiveCategory(null);
    };
  
    const filteredItems = items.filter(item => {
      if (activeCategory) {
        return item.category === activeCategory;
      }
      if (activeParent) {
        return categoriesByParent[activeParent].includes(item.category);
      }
      return true;
    });
  
    return(
        <>
       <div className="blog_filter">
       <div className="blog_filter_content">
      <div className="blog_filter_content_btns_parent">
      <button onClick={handleShowAll}>Show All</button>
        {/* <ParentButton category={null} onClick={handleParentClick} active={!activeParent} /> */}
        <ParentButton category="parent1" onClick={handleParentClick} active={activeParent === 'parent1'} />
        <ParentButton category="parent2" onClick={handleParentClick} active={activeParent === 'parent2'} />
        {/* Add more parent buttons for other parents */}
      </div>
      {activeParent && (
          <div className="blog_filter_content_btns">
            {categoriesByParent[activeParent].map((category) => (
              <CategoryButton
                key={category}
                category={category}
                onClick={handleCategoryClick}
                active={activeCategory === category}
              />
            ))}
          </div>
      )}
        <ul className="blog_filter_content_entries">
          {filteredItems.map((item) => (
            <li className="blog_filter_content_entry" key={item.id}>
            <img src={require("../../assets/adidas_zalando_cover.webp")} alt="scroll_img" />
            <h4>{item.heading}</h4>
            <h5>{item.subheading}</h5>
            </li>
          ))}
        </ul>
    </div>
          </div>
        </>
    );
  }
  
  export default Creativegallery;
  