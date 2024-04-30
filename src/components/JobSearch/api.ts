import axios from "axios";

export async function searchJobsApi({ type, name, city, state, country , placeId}:{ type:any, name:any, city:any, state:any, country:any, placeId:any}) {
    try {
      let url;
      if (type === 'job') {
        url = `/jobs?`;
        if (name) {
          url += `name=${name}&`;
        }
      } else if (type === 'company') {
        url = `/companyJobsByName?`;
        if (name) {
          url += `companyName=${name}&`;
        }
      }
      if (placeId){
        url += `placeId=${placeId}&`;
      }
      if (city) {
        url += `city=${city}&`;
      }
      if (state) {
        url += `state=${state}&`;
      }
      if (country) {
        url += `country=${country}`;
      }
      const jobs = await axios.get(`${process.env.REACT_APP_BUSINESS_UTILITY_API}/jobs?type=${type}&placeId=${placeId}&city=${city}&state=${state}&country=${country}`).then((res) => {return res.data});

      return jobs;

    } catch (error) {
      return error
    }
  }
  