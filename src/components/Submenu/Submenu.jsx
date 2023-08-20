import { useGlobalContext } from "../../Context";
import { useEffect, useRef } from "react";
function Submenu(){
    const {isSubmenuOpen,location, page:{page,links}} = useGlobalContext();
    const container = useRef();
    useEffect(()=>{
        const submenu = container.current;
        const {center,bottom} = location;
        submenu.style.left = `${center}px`;
        submenu.style.top = `${bottom}px`;
    },[location])
    return(
        <>
        <div ref={container} className={isSubmenuOpen ? "submenu show" : "submenu"}>
            <section>
                <h4>{page}</h4>
                <div className="submenu_center col_2">
                    {links.map((link,index) =>{
                        const {url,label} = link;
                        return(
                            <a key={index} href={url}>{label}</a>
                        )
                    })}
                </div>
            </section>
        </div>
        </>
    )
}
export default Submenu;