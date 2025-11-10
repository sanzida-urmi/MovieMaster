import React, { use, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import MovieCard from '../components/MovieCard';
import MycollectionList from './MycollectionList';

function MyCollection() {
      const {user,setLoading} = use(AuthContext);
  const [collection, setCollection] = useState([]);

  console.log(user);

     useEffect(() => {

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
      });
  }, [user]);

console.log(collection);
  return (
    <div>

             <div className="grid grid-row gap-5 mt-10">
 {collection.map(movie => <MycollectionList key={movie._id} movie={movie}/>)}

          </div>
    </div>
  )
}

export default MyCollection
