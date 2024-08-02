import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import '../../scss/header.scss'

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: tableData, error } = await supabase
          .from('headernavi')
          .select('*');
        if (error) throw error;
        setData(tableData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isHovered) {
        document.body.classList.add('hovermode');
        document.body.classList.remove('scrollmode');
      } else if (window.scrollY > 0) {
        document.body.classList.add('scrollmode');
        document.body.classList.remove('hovermode');
      } else {
        document.body.classList.remove('scrollmode');
        document.body.classList.remove('hovermode');
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHovered]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const menuData = data.reduce((acc, item) => {
    const [main, sub] = item.prnum.split('|').map(Number);
    if (!acc[main]) acc[main] = { ...item, subMenus: [] };
    if (sub !== undefined) acc[main].subMenus.push(item);
    return acc;
  }, {});

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <header className='fixed-top'>
      <div className='container customWidth1 naviStyle d-flex justify-content-between align-items-center p-0'>
        <h1>
          <img className='logoWidth logoMargin' src='./img/header/logo.svg' alt="어글리어스 로고" />
        </h1>
        <ul className='gnb d-flex justify-content-lg-center align-items-lg-center'>
          {Object.values(menuData).map((menu, index) => (
            <li key={index} className='gnbli position-relative' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              <a href={menu.gnblink} className={`naviIcon${index} d-lg-block d-flex justify-content-between align-items-center`}>
                <span className={'fontNavi fontMedium'}>{menu.gnbnm}</span>
                <span className='d-lg-none d-block arrowIcon'><img src="./img/header/arrow.svg" alt="더보기" /></span>
              </a>
              {/* {menu.subMenus.length > 0 && (
                <ul className={`gnbul position-absolute text-center text-nowrap ${index < Object.values(menuData).length - 2 ? 'ulStyle1' : index === Object.values(menuData).length - 2 ? '' : 'ulStyle2'}`}>
                  {menu.subMenus.map((subMenu, subIndex) => (
                    <li key={subIndex} className='ulSubmenu d-flex justify-content-center align-items-center'>
                      <a href={subMenu.gnblink}>
                        <span className='fontNaviSub fontRegular'>{subMenu.gnbnm}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )} */}
            </li>
          ))}
          <li>
            <button className='menuBtn d-lg-none p-0'><i className='btnIcon'></i></button>
          </li>
        </ul>
        <ul className="d-flex justify-content-center align-items-center">
          <li className='utilStyle'><a href="#"><span className="fontUtil fontRegular">로그인</span></a></li>
          <li><a href="#"><span className="fontUtil fontRegular">회원가입</span></a></li>
        </ul>
      </div>
    </header>
  );
}

export default App;