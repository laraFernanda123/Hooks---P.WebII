import {useState, useEffect} from 'react';

const useCheckList = defaultState => {
    const [isContextList, setIsContextList] = useState(defaultState);

    useEffect(() => {
        
        window.onclick = () => setIsContextList(true);
        
        

        return () => {
          window.onclick = () => {};
        }
        
      }, [isContextList]);
    
    return isContextList;

};

export default useCheckList;