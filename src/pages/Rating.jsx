import React, { useRef, useState } from 'react'
import MovieCard from '../components/MovieCard';
import { toast } from 'react-toastify';

function Rating() {
 
  const minref = useRef();
  const maxref= useRef();
  const [ary, setAry] = useState([]);
  
  const submit= async(e)=>{
    e.preventDefault();

    const min = parseFloat(minref.current.value);
    const max = parseFloat(maxref.current.value);


    if(min < 0 || max>10 || min> max){
      toast("please enter ratings between 1 and 10 and min <= max ");
      return;
    }

       
    const res = await fetch(`http://localhost:4000/rating?min=${min}&max=${max}`);
    const data = await res.json();
    setAry(data);
  };
  return (
    <div>
     <div>
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

      <div className="grid grid-cols-3 gap-10 mt-10">
         {ary.map(movie => <MovieCard key={movie._id} movie={movie}/>)}

      </div>
    </div>
  )
}

export default Rating
