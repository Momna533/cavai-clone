import { useGlobalContext } from "../../Context";
import sublinks from "../../data";

function Sidebar(){
    const {isSidebarOpen,closeSidebar} = useGlobalContext();
    return(
        <>
        <div className={`${isSidebarOpen ? "sidebar_wrapper show" : "sidebar_wrapper"}`}>
        <div className="sidebar">
            <button className="close_btn" onClick={closeSidebar}>close</button>
            <div className="sidebar_links">
                {sublinks.map((item,index) =>{
                    const {page,links} = item;
                    return <article  key={index}>
                        <h3>{page}</h3>
                        <div className="sidebar_sublinks">
                            {links.map((item,index)=>{
                                const {url,label} = item;
                                return <a href={url} key={index}>{label}</a>
                            })}
                        </div>
                    </article>
                })}
            </div>
        </div>
        </div>
        </>
    )
}
export default Sidebar;