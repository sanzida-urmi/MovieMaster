import React, { use, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { ClimbingBoxLoader } from 'react-spinners';

function Update() {
     const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const { user } = use(AuthContext);

     useEffect(() => {
      setLoading(true);
        fetch(`http://localhost:4000/movies/update/${id}`
            
    //         , {
    //       headers: {
    //         authorization: `Bearer ${user.accessToken}`,
    //       },
    // }
    
    )
          .then((res) => res.json())
          .then((data) => {
            console.log(data.result);
            setMovie(data.result);
            console.log(" Api called!")
            setLoading(false);
            toast.success("update page");
          })
          .catch(err =>{
            console.log(err)
            toast.error("could not fetch update page")
          });
      }, [user, id]);


        const handleSubmit = (e) => {
          e.preventDefault();
          setLoading(true);
      
          const formData = {
            title: e.target.title.value,
            genre: e.target.genre.value,
            releaseYear: e.target.releaseYear.value,
            director: e.target.director.value,
            cast: e.target.cast.value,
            duration: e.target.duration.value,
            rating: e.target.rating.value,
            language: e.target.language.value,
            country: e.target.country.value,
            plotSummary: e.target.plotSummary.value,
            posterUrl: e.target.posterUrl.value,
            addedBy: e.target.addedBy.value,
            addedAt: new Date().toISOString(),
          }
          console.log(formData);
      
          fetch(`http://localhost:4000/movies/update/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
          })
          .then(res => res.json())
          .then(data=> {
            console.log(data)
            setLoading(false);
            toast.success('successfully updated');
          })
          .catch(err => {
            console.log(err)
             toast.error('could not update');
          })
         
      
        }

         if(loading){
    return (
      <div>
        <ClimbingBoxLoader className="text-center mx-auto" color="#db6a69" />
      </div>
    )
  }

  return (
    <div>
      <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl wrap-anywhere">
      <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center mb-6">Update Movie</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* title Field */}
          <div>
            <label className="label font-medium">Title</label>
            <input
              type="text"
              name="title"
              defaultValue={movie.title}
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
            />
          </div>

          {/* genre Field */}
          <div>
            <label className="label font-medium">Genre</label>
            <input
              type="text"
              name="genre"
              defaultValue={movie.genre}
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
            />
          </div>
          {/* releaseYear Field */}
          <div>
            <label className="label font-medium">ReleaseYear</label>
            <input
              type="text"
              name="releaseYear"
              defaultValue={movie.releaseYear}
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
            />
          </div>
          {/* director Field */}
          <div>
            <label className="label font-medium">Director</label>
            <input
              type="text"
              name="director"
                            defaultValue={movie.director}
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
            />
          </div>
          {/* cast Field */}
          <div>
            <label className="label font-medium">Cast</label>
            <input
              type="text"
              name="cast"
               defaultValue={movie.cast}
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
            />
          </div>
          {/* rating Field */}
          <div>
            <label className="label font-medium">Rating</label>
            <input
              type="text"
              name="rating"
              defaultValue={movie.rating}
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
            />
          </div>
          {/* duration Field */}
          <div>
            <label className="label font-medium">Duration</label>
            <input
              type="text"
              name="duration"
              defaultValue={movie.duration}
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
            />
          </div>
          {/* language Field */}
          <div>
            <label className="label font-medium">Language</label>
            <input
              type="text"
              name="language"
              defaultValue={movie.language}
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
            />
          </div>
          {/* country Field */}
          <div>
            <label className="label font-medium">Country</label>
            <input
              type="text"
              name="country"
              defaultValue={movie.country}
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
            />
          </div>
          


          {/* plotSummary Textarea */}
          <div>
            <label className="label font-medium">PlotSummary</label>
            <textarea
              name="plotSummary"
              defaultValue={movie.plotSummary}
              rows="3"
             className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
            ></textarea>
          </div>

          {/* posterUrl */}
          <div>
            <label className="label font-medium">PosterUrl</label>
            <input
              type="url"
              name="posterUrl"
              defaultValue={movie.posterUrl}
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
            />
          </div>

           {/* addedBy Field */}
          <div>
            <label className="label font-medium">AddedBy</label>
            <input
              type="text"
              name="addedBy"
              readOnly
              value={user?.email}
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              
            />
          </div>



          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full btn-error"
          >
            Update Movie
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Update
