
import {Body} from './Components/Body';

import { OPTIONS } from "./utils/constants";
import { useDispatch } from "react-redux";
import { addResources , addItemWithTagUser, addItemWithTagRequest} from "./utils/resourceSlice";
import { useEffect,useState } from 'react';

function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true);
   
  const getResources = async() =>{
      const data = await fetch('https://media-content.ccbp.in/website/react-assignment/resources.json',OPTIONS)
      const json = await data.json();
      const itemWithTagUser = json.filter((item)=> item.tag === 'user')
      const itemWithTagRequest = json.filter((item)=>item.tag ==="request")
      
      dispatch(addResources(json))
      dispatch(addItemWithTagRequest(itemWithTagRequest))
      dispatch(addItemWithTagUser(itemWithTagUser))
     
     
      
      
      setLoading(false)
      
  }
  useEffect(()=>{
      getResources()
  },[])
  return (
  
      
       <Body  loading={loading}/>
  
  );
}

export default App;
