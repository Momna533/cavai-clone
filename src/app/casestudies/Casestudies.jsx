import {useState} from "react"
import Letstalk from "../../components/Letstalk/Letstalk";
import Newsletter from "../../components/Newsletter/Newsletter";
function Casestudies() {
    const [filterOption, setFilterOption] = useState('all');
    const [items, setItems] = useState([
      { id: 1, heading: 'one Lorem ipsum dolor sit amet.', subheading :'Cases | lorem ipsum', category: 'category1' },
      { id: 2, heading: 'two Lorem ipsum dolor sit amet.', subheading :'Cases | lorem ipsum', category: 'category2' },
      { id: 3, heading: ' three Lorem ipsum dolor sit amet.', subheading :'Cases | lorem ipsum', category: 'category3' },
      { id: 4, heading: 'four Lorem ipsum dolor sit amet.', subheading :'Cases | lorem ipsum', category: 'category1' },
      { id: 5, heading: 'five Lorem ipsum dolor sit amet.', subheading :'Cases | lorem ipsum', category: 'category3' },
      { id: 6, heading: 'six Lorem ipsum dolor sit amet.', subheading :'Cases | lorem ipsum', category: 'category2' },
      { id: 7, heading: 'seven Lorem ipsum dolor sit amet.', subheading :'Cases | lorem ipsum', category: 'category3' },
      { id: 8, heading: 'eight Lorem ipsum dolor sit amet.', subheading :'Cases | lorem ipsum', category: 'category1' },
      { id: 9, heading: 'nine Lorem ipsum dolor sit amet.', subheading :'Cases | lorem ipsum', category: 'category2' },
      { id: 10, heading: 'ten Lorem ipsum dolor sit amet.', subheading :'Cases | lorem ipsum', category: 'categor1' },
      { id: 11, heading: 'eleven Lorem ipsum dolor sit amet.', subheading :'Cases | lorem ipsum', category: 'category1' },
      { id: 12, heading: 'twelve Lorem ipsum dolor sit amet.', subheading :'Cases | lorem ipsum', category: 'category2' },
      { id: 13, heading: 'thirteen Lorem ipsum dolor sit amet.', subheading :'Cases | lorem ipsum', category: 'category3' },
      { id: 14, heading: 'fourteen Lorem ipsum dolor sit amet.', subheading :'Cases | lorem ipsum', category: 'category3' },
      { id: 15, heading: 'fifteen Lorem ipsum dolor sit amet.', subheading :'Cases | lorem ipsum', category: 'category2' },
      { id: 16, heading: 'sixteen Lorem ipsum dolor sit amet.', subheading :'Cases | lorem ipsum', category: 'category1' },
      { id: 17, heading: 'seventeen Lorem ipsum dolor sit amet.', subheading :'Cases | lorem ipsum', category: 'category3' },
      { id: 18, heading: ' eighteen Lorem ipsum dolor sit amet.', subheading :'Cases | lorem ipsum', category: 'category2' },
      { id: 19, heading: 'nineteen Lorem ipsum dolor sit amet.', subheading :'Cases | lorem ipsum', category: 'category2' },
      { id: 20, heading: 'twenty Lorem ipsum dolor sit amet.', subheading :'Cases | lorem ipsum', category: 'category3' },
      { id: 21, heading: 'Lorem ipsum dolor sit amet.', subheading :'Cases | lorem ipsum', category: 'category2' },
      { id: 22, heading: 'Lorem ipsum dolor sit amet.', subheading :'Cases | lorem ipsum', category: 'category2' },
      { id: 23, heading: 'Lorem ipsum dolor sit amet.', subheading :'Cases | lorem ipsum', category: 'category2' },
      { id: 24, heading: 'Lorem ipsum dolor sit amet.', subheading :'Cases | lorem ipsum', category: 'category3' },
      { id: 25, heading: 'Lorem ipsum dolor sit amet.', subheading :'Cases | lorem ipsum', category: 'category3' },
      { id: 26, heading: 'Lorem ipsum dolor sit amet.', subheading :'Cases | lorem ipsum', category: 'category1' },
      { id: 27, heading: 'Lorem ipsum dolor sit amet.', subheading :'Cases | lorem ipsum', category: 'category1' },
      { id: 28, heading: 'Lorem ipsum dolor sit amet.', subheading :'Cases | lorem ipsum', category: 'category1' },
      { id: 29, heading: 'Lorem ipsum dolor sit amet.', subheading :'Cases | lorem ipsum', category: 'category3' },
      { id: 30, heading: 'Lorem ipsum dolor sit amet.', subheading :'Cases | lorem ipsum', category: 'category3' },
      { id: 31, heading: 'Lorem ipsum dolor sit amet.', subheading :'Cases | lorem ipsum', category: 'category2' },
      { id: 32, heading: 'Lorem ipsum dolor sit amet.', subheading :'Cases | lorem ipsum', category: 'category3' },
      { id: 33, heading: 'Lorem ipsum dolor sit amet.', subheading :'Cases | lorem ipsum', category: 'category1' },
      { id: 34, heading: 'Lorem ipsum dolor sit amet.', subheading :'Cases | lorem ipsum', category: 'category2' },
      { id: 35, heading: 'Lorem ipsum dolor sit amet.', subheading :'Cases | lorem ipsum', category: 'category3' },
      { id: 36, heading: 'Lorem ipsum dolor sit amet.', subheading :'Cases | lorem ipsum', category: 'category1' },
      { id: 37, heading: 'Lorem ipsum dolor sit amet.', subheading :'Cases | lorem ipsum', category: 'category2' },
      // ... other items
    ]);
  
    // Filter items based on the selected option
    const filteredItems = filterOption === 'all' ? items : items.filter(item => item.category === filterOption);
  
    // Pagination logic
    const itemsPerPage = 9; // Number of items to display per page
    const [currentPage, setCurrentPage] = useState(1);
    const totalItems = filteredItems.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
  
    // Get items to display on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  
    // Function to handle filter option change
    const handleFilterChange = option => {
      setFilterOption(option);
      setCurrentPage(1); // Reset pagination when the filter changes
    };
  
    // Function to handle page change
    const handlePageChange = page => {
      setCurrentPage(page);
    };
    return(
        <>
        <section className="blog_home">
            <div className="blog_home_background"></div>
            <div className="blog_home_content">
                <div className="blog_home_content_left">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat pariatur, in minima laudantium esse, ipsa velit debitis perferendis deserunt quam eaque nulla delectus aliquam! Porro officiis neque optio quisquam corporis.</p>
                    <h5>Date,26July 2002 | Momna Ijaz</h5>
                    <a><span>Read more</span>
                            <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1"
            //  xmlns="http://www.w3.org/2000/svg"
            //   xmlns:xlink="http://www.w3.org/1999/xlink"
              ><title>Arrow right</title><g id="icon/expot/button-arrow" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M7.90339859,-4.61852778e-14 L15.9033986,8 L7.90339859,16 L7.24376293,15.3403643 L14.155,8.428 L-4.33431069e-13,8.42846739 L-4.33431069e-13,7.49560168 L14.08,7.495 L7.24376293,0.659635666 L7.90339859,-4.61852778e-14 Z" id="button-arrow" fill="currentColor" fill-rule="nonzero"></path></g></svg></a>
                </div>
                <div className="blog_home_content_right">
                    <img src={require("../../assets/blog.jpg")} alt="blog_img" />
                </div>
            </div>
        </section>
        <section className="blog_filter">
        <div className="blog_filter_content">
      <div className="blog_filter_content_btns">
        <button onClick={() => handleFilterChange('category1')}>Category 1</button>
        <button onClick={() => handleFilterChange('category2')}>Category 2</button>
        <button onClick={() => handleFilterChange('category3')}>Category 3</button>
        <button onClick={() => handleFilterChange('all')}>All</button>
      </div>
      <ul className="blog_filter_content_entries">
        {currentItems.map(item => (
          <li className="blog_filter_content_entry" key={item.id}>
            <img src={require("../../assets/adidas_zalando_cover.webp")} alt="scroll_img" />
            <h4>{item.heading}</h4>
            <h5>{item.subheading}</h5>
          </li>
        ))}
      </ul>
      <div className="blog_filter_content_pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index + 1} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
        </div>
        </section>
        <Letstalk />
        <Newsletter />
        </>
    );
  }
  
  export default Casestudies;
  