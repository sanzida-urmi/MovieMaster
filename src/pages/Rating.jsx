import React, { useRef, useState } from 'react'
import MovieCard from '../components/MovieCard';
import { toast } from 'react-toastify';
import { ClimbingBoxLoader } from 'react-spinners';

function Rating() {
 
  const minref = useRef();
  const maxref= useRef();
  const [ary, setAry] = useState([]);
  const [loading, setLoading] = useState(false);
  
  
  const submit= async(e)=>{
    e.preventDefault();
    setLoading(true);

    const min = parseFloat(minref.current.value);
    const max = parseFloat(maxref.current.value);


    if(min < 0 || max>10 || min> max){
      toast("please enter ratings between 1 and 10 and min <= max ");
      return;
    }

       setLoading(true);
    // const res = await fetch(`http://localhost:4000/rating?min=${min}&max=${max}`);
    // const data = await res.json();
    // setAry(data);
    // setLoading(false);

     fetch(`http://localhost:4000/rating?min=${min}&max=${max}`)
        .then(res=>res.json())
        .then(data =>{
             console.log(data)
            setAry(data);
    setLoading(false);
            toast.success("Show movie");
            })
            .catch(err =>{
                     console.log(err);
                     toast.error("could not show movie")
                   })
  };

  
 if(loading){
    return (
      <div>
        <ClimbingBoxLoader className="text-center mx-auto" color="#db6a69" />
      </div>
    )
  }

  return (
    <div>
     <div className='wrap-anywhere'>
       <form onSubmit={submit}>
        <fieldset className="fieldset">
          <label className="label">Min Rating</label>
          <input ref={minref} type="number"  min="0"  step="any" className="input" placeholder="Enter min" />

          <label className="label">Max Rating</label>
          <input ref={maxref} type="number" min="0"  step="any" className="input" placeholder="Enter max" />
          <button type='submit' className="btn btn-error w-20 mt-4">Apply</button>
        </fieldset>
      </form>
     </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
         {ary.map(movie => <MovieCard key={movie._id} movie={movie}/>)}

      </div>
    </div>
  )
}

export default Rating
