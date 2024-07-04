import { useEffect } from "react"

const usePageTitle = (count) => {
  useEffect(()=>{
    document.title=` Counter : ${count}`;
  })
}

export default usePageTitle;