import React, { use, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import MyList from './MyList';
import { ClimbingBoxLoader } from 'react-spinners';
import { toast } from 'react-toastify';

function Mywatch() {
     const {user,refetch,setRefecth} = use(AuthContext);
      const [loading, setLoading] = useState(true);
      const [collection, setCollection] = useState([]);
    useEffect(() => {
      setLoading(true);
             if(!user?.email){
                return
             }
    
        fetch(`https://moviemasterserver.vercel.app/watch?email=${user.email}`)
          .then((res) => res.json())
          .then((data) => {
            // console.log(data)
            setCollection(data);
            
            // console.log(data[0]);
            setLoading(false);
            toast.success('show watchlist');
          })
           .catch(err => {
                // console.log(err)
                toast.error('cound not show watchlist');
              })
      }, [user]);

       if(loading){
    return (
      <div>
        <ClimbingBoxLoader className="text-center mx-auto" color="#db6a69" />
      </div>
    )
  }

  return (
    <div>
      
       <div className="grid grid-row gap-5 mt-10">
 {collection.map(movie => <MyList key={movie._id} movie={movie}/>)}

          </div>
    </div>
  )
}

export default Mywatch
