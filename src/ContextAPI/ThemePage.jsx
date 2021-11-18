import {AContext} from './AContext.jsx';
import {useContext} from 'react';


const ThemePage = () => {

    const [theme,setTheme ,val, setVal] = useContext(AContext);
    
    const changeTheme=()=>{
        setTheme(!theme);
    }

    //  setInterval(() => {
    //     setTheme(!theme); 
    //  }, 200);
  return (
    <div className={`container-fluid ${theme?' bg-dark':' bg-danger'}`}>
      <div style={{height:'1000px'}} className="row">
        <div className="col-lg-12">

        
            <button onClick={changeTheme} >Change Theme</button>
        </div>
      </div>
    </div>
  );
};

export default ThemePage;
