import React, { use, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import MyList from './MyList';

function Mywatch() {
     const {user,setLoading,refetch,setRefecth} = use(AuthContext);
      const [collection, setCollection] = useState([]);
    useEffect(() => {
             if(!user?.email){
                return
             }
    
        fetch(`http://localhost:4000/watch?email=${user.email}`
            
        //     , {
        //   headers: {
        //     authorization: `Bearer ${user.accessToken}`,
        //   },
        // }
    
    )
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            setCollection(data);
            
            // console.log(data[0]);
            setLoading(false);
          });
      }, [user]);
  return (
    <div>
      
       <div className="grid grid-row gap-5 mt-10">
 {collection.map(movie => <MyList key={movie._id} movie={movie}/>)}

          </div>
    </div>
  )
}

export default Mywatch
