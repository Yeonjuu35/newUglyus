import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

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
      if (isHovered || window.scrollY > 0) {
        document.body.classList.add('hovermode');
      } else {
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
      <div className='container customWidth naviStyle d-flex justify-content-between align-items-center p-0'>
        <h1 className='m-0'>
          <img className='logoimg' src="./img/header/logo.svg" alt="어글리어스 로고" />
        </h1>
        <ul className='gnb d-flex justify-content-center align-items-center'>
          {Object.values(menuData).map((menu, index) => (
            <li key={index}
              className='gnbli position-relative'
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <a href={menu.gnblink} className={`naviIcon${index}`}>
                <span className={'fontNavi fontMedium'}>{menu.gnbnm}</span>
              </a>
              {menu.subMenus.length > 0 && (
                <ul className={`gnbul position-absolute text-center text-nowrap ${index === Object.values(menuData).length - 1 ? 'ulStyle2' : 'ulStyle1'}`}>
                  {menu.subMenus.map((subMenu, subIndex) => (
                    <li key={subIndex} className='ulSubmenu d-flex justify-content-center align-items-center'>
                      <a href={subMenu.gnblink}>
                        <span className='fontNaviSub fontRegular'>{subMenu.gnbnm}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
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