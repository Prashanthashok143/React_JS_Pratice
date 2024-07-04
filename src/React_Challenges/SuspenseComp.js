import React, { Suspense, lazy } from 'react'



const SuspenseComp = () => {
  const LazyApp = lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import('./LazyApp')), 5000); 
    });
  });
  return (
    <div>
 
<Suspense fallback={<div><img style={{height:"100%",width:"100%"}} src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTlyeGd5enFmb2djYnV3NGRzcmhhamt6eWZmaWNnMjNqN3M0bWxlNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uIJBFZoOaifHf52MER/giphy.gif' alt='mh'/></div>}>
  <LazyApp/>
</Suspense>

    </div>
  )
}

export default SuspenseComp