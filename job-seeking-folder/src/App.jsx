import Navbar from "./component/Navbar"
import Header from "./component/Header/indexs"
import SearchBar from "./component/SearchBar/search"
import JobCard from "./component/JobCard/Job"
import jobData from "./JobDummyData"
import { useEffect, useState } from "react"
import { collection, query, orderBy, where, getDocs } from "firebase/firestore";
import {db} from "./firebase.config"


function App() {
 
const [jobs, setJobs] = useState([]);
const [customSearch, setCustomSearch] = useState(false);

const [jobCriteria, setJobCriteria] = useState({
  type: "",
  title: "",
  experience: "",
  location: "",
});


const handleClearClick = () => {
  setCustomSearch(false);
  resetJobCriteria();
  fetchJobs();
}

const resetJobCriteria = () => {
  setJobCriteria({
  type: "",
  title: "",
  experience: "",
  location: ""
  });
};

const fetchJobs = async() => {
  setCustomSearch(false);
  const tempJobs = []
const jobsRef = query(collection(db, "jobs"));
const q = query(jobsRef, orderBy("postedOn", "desc"));
const req = await getDocs(q);

req.forEach((job) => {
  // console.log(doc.id, " => ", doc.data());
tempJobs.push({
  ...job.data(),
  id: job.id,
  postedOn: job.data().postedOn.toDate()
})  
});
setJobs(tempJobs);
}
const fetchJobsCustom = async(jobCriteria) => {
  setCustomSearch(true);
  const tempJobs = []
const jobsRef = query(collection(db, "jobs"));
const q = query(jobsRef, where("type", "==", jobCriteria.type) , where("title", "==", jobCriteria.title) , where("experience", "==", jobCriteria.experience) , where("location", "==", jobCriteria.location),orderBy("postedOn", "desc"))
const req = await getDocs(q);
req.forEach((job) => {
  // console.log(doc.id, " => ", doc.data());
tempJobs.push({
  ...job.data(),
  id: job.id,
  postedOn: job.data().postedOn.toDate()
})  
});
setJobs(tempJobs);
}



useEffect(() => {
  fetchJobs();
}, [])
  return (
  
      <div>
       <Navbar />
       <Header />
       <SearchBar  fetchJobsCustom={fetchJobsCustom} jobCriteria={jobCriteria} setJobCriteria={setJobCriteria}
      
       />
       {customSearch && (
       <button onClick={handleClearClick} className="flex pl-[950px] mb-2">
        <p className="bg-blue-300 px-10 py-2 rounded-md text-white">Clear Filters</p>
       </button>
       )}
       {jobs.map((job)=> (
        <JobCard key={job.id} {...job}/>
       ))}
       
      </div>
    
  );
}

export default App;

