import React, { use, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import MovieCard from '../components/MovieCard';
import MycollectionList from './MycollectionList';
import { ClimbingBoxLoader } from 'react-spinners';
import { toast } from 'react-toastify';

function MyCollection() {
      const {user,refetch,setRefecth} = use(AuthContext);
  const [collection, setCollection] = useState([]);
  const [loading, setLoading] = useState(false);
  

  console.log(user);

     useEffect(() => {
      setLoading(true);

         if(!user?.email){
            return
         }

    fetch(`http://localhost:4000/movies/my-collection?email=${user.email}`
        
    //     , {
    //   headers: {
    //     authorization: `Bearer ${user.accessToken}`,
    //   },
    // }

)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setCollection(data);
        
        // console.log(data[0]);
        setLoading(false);
         toast.success("Show collection");
      })
      .catch(err =>{
                       console.log(err);
                       toast.error("could not show collection")
                     });
  }, [user,refetch]);

console.log(collection);

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
 {collection.map(movie => <MycollectionList key={movie._id} movie={movie}/>)}

          </div>
    </div>
  )
}

export default MyCollection
