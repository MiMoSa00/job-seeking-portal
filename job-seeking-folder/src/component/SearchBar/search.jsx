import React, { useState } from 'react'

function SearchBar(props) {

  
  const {jobCriteria, setJobCriteria} = props;

  const handleChange = (e) => {
  setJobCriteria((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value
  }));
  };
  // console.log(jobCriteria)

 

const search = async() => {
await props.fetchJobsCustom(jobCriteria);
}
    return (
        <div className='flex gap-4 my-10 justify-center px-10'> 
            <select onChange={handleChange} name="title" value={jobCriteria.title} className='w-60 py-3 pl-4 bg-zinc-100 font-bold rounded-md'>
                <option value="" disabled hidden >Job Role</option>
                <option value="Mobile Developer">Mobile Developer</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Game Developer">Game Developer</option>
                <option value="Developer Advocate">Developer Advocate</option>
            </select>

              <select onChange={handleChange} name="type" value={jobCriteria.type} className='w-60 py-3 pl-4 bg-zinc-100 font-bold rounded-md'>
                <option value="" disabled hidden >Job Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time </option>
                <option value="Contract">Contract</option>
                </select>

              <select onChange={handleChange} name="location" value={jobCriteria.location} className='w-60 py-3 pl-4 bg-zinc-100 font-bold rounded-md'>
                <option value="" disabled hidden >Location</option>
                <option value="Remote">Remote</option>
                <option value="In-Office">In-Office</option>
                <option value="Hybrid">Hybrid</option>
                </select>

              <select onChange={handleChange} name="experience" value={jobCriteria.experience} className='w-60 py-3 pl-4 bg-black-100 font-bold rounded-md'>
                <option  value="" disabled hidden >Experience</option>
                <option value="Fresher">Fresher</option>
                <option value="Junior Level">Junior Level</option>
                <option value="Mid Level">Mid Level</option>
                <option value="Advance Level">Advance Level</option>
                </select>

                <button onClick={search} className='w-60 bg-green-500 text-white font-bold py-3 rounded-md'>Search</button>

              
        </div>
    );
}
export default SearchBar;