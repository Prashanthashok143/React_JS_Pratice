import { useEffect, useState } from 'react'

const useAPI = (URL) => {
  const [userdata, setUserdata] = useState([]);
  const [iserror, setIserror] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AxiosData(URL);
  },[]);

  const AxiosData = async () => {
    setIserror(false);
    setLoading(true);
    try {
      const ApI = await fetch(URL);
      const response = await ApI.json();
      setUserdata(response);
      setLoading(false);
    } catch (error) {
      setIserror(true);
      setLoading(false);
    }
  };
  
 return [userdata,loading,iserror];
}

export default useAPI