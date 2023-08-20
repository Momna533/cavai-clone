import { useEffect } from "react";
import { useRef } from "react";
function AutoScroll({entries,color}) {
    const containerRef = useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        const container = containerRef.current;
        const scrollAmount  = window.pageYOffset;

        container.scrollTo({
          left : scrollAmount,
          behavior : "smooth"
        })
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    const styles = {
        background : color
    }
    return<>
                   <section className="scroll_2" style={styles}>
          <div className="scroll_2_content">
      <div className="scroll_2_content_entries" ref={containerRef} style={{overflowX: 'hidden', whiteSpace: 'nowrap'}}>
      {entries}
      </div>
      </div>
        </section>
    </>

    
  }
  
  export default AutoScroll;