import axios from "axios";
export const getJobDetails = async(job: any) =>{

   const res = await axios.get(`${process.env.REACT_APP_BUSINESS_UTILITY_API}/job/${job.id}`,
      job
   ).catch((err) => {
    console.log("Job doesn't exist")
   });

   if(res && res.data){
    return res.data
   }

}


export const getUserDetails = async(token: string) =>{
   let config = {
      headers: {
        'Authorization': token
      }
    }

   const res = await axios.get(`${process.env.REACT_APP_BASE_API}/career/user/getDetails`,
   config).catch((err) => {
    console.log("User doesn't exist")
   });

   if(res && res.data){
    return res.data
   }

}


export const getUserId = async(token: string) =>{
   let config = {
      headers: {
        'Authorization': token
      }
    }

   const res = await axios.get(`${process.env.REACT_APP_SSO_API}/users/user`,
   config).catch((err) => {
    console.log("User doesn't exist")
   });
   if(res && res.data){
    return res.data.id
   }

}


export const getScores = async(payload: any) =>{

   // const res = await axios.get(`${process.env.REACT_APP_BASE_API}/scores?userId=${payload.cv._id}&jobId=${payload.job._id}`)
   // .catch(async (err) => {
   //    console.log(err.err)
   // });
   //if(res && res.data){
      //const resData = Object.entries(res.data.data);
      //if(resData.length === 0){
      const post = await axios.post(`${process.env.REACT_APP_BASE_API}/count-scores`, 
      {
         timeout:2000,
         payload
      }).then((res) => {return res.data})
      .catch((err) => {
            console.log(err.err)
         });
         // const get = await axios.get(`${process.env.REACT_APP_BASE_API}/scores?userId=${payload.cv._id}&jobId=${payload.job._id}`)
         console.log(" job id ->>",payload.job._id," post returend data ---> ", post)

         return post
         //}
}
   
//}
    
      



