'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface ResProp {
  id: number,
  title: string,
  description: string,
  rent: number,
  images: string[],
  duration: number,
  location: string
}

const Jobs: any = async (job: any) => {
  const [jobs, setJobs] = useState([])

  const fetchjob = async() => {
    try {
      const response = await axios.get(
        `post`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true
        }
      );
      console.log(response.data + response.status + response.headers);
      setJobs(response.data); 
    } catch (err) {
      console.log(err);
    }
  }

  console.log('Data:', jobs);

  useEffect(() => {
    fetchjob();
  }, [])

  return (
    <div className="container mx-auto px-3">
      <div className="grid grid-cols-1 md:grid-cols-4 py-4 gap-y-4 md:gap-x-4">
        {jobs.map(job => (
          <div key={job['id']} className="bg-[#121212] w-full rounded-lg p-4 text-white">
            <div>
              <h2 className="text-xl font-semibold">{job['title']}</h2>
              <p className="text-gray-500 text-sm mt-1">{job['duration']}</p>
              <p className="text-gray-500 text-sm mt-1">{job['rent']}</p>
              <p className="text-gray-500 text-sm mt-1">{job['location']}</p>
              <p className="mt-6 text-sm lg:text-justify md:text-center text-justify no-scrollbar" style={{ height: '12rem', overflow: 'scroll' }}>
                {job['description']}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
