import Quickitem from './Quickitem';
import React, {useEffect} from "react";
import '../../scss/quick.scss'


const QuickMenu = () => {
  useEffect(() => {
    const handleToggleMenu = () => {
      document.querySelector("#quick_pyj").classList.toggle("showmenu");
    };

    const quickPlusIcon = document.querySelector("#quick_pyj .quickplusicon");
    quickPlusIcon.addEventListener("click", handleToggleMenu);

    return () => {
      quickPlusIcon.removeEventListener("click", handleToggleMenu);
    };
  }, []);
    
    return (
      <aside id="quick_pyj">
        <div className='radishQuick'>
            <ul className='d-flex flex-column'>
                <Quickitem></Quickitem>             
            </ul>
            <a href="#none" className='quickplusicon'>
                <img src="/img/img_pyj/quick/plus.svg" alt="더보기" className='quickIconPlus' />
            </a>
        </div>
      </aside>
    );
  };
  
  export default QuickMenu;
