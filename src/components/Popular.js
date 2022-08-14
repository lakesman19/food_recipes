import React from 'react'
// import axios from 'axios'
import { useEffect } from 'react'

const Popular = () => {
    useEffect(() => {
      getPopular()
    }, [])
    
    const getPopular = async ()=>{
        // axios.get('https://api.spoonacular.com/recipes/complexSearch', {
        //   params: {
        //     maxResult: 9,
        //     key: (process.env.REACT_APP_API_KEY =
        //       '779b336aa7d4488bb6305954a31884d2'),
        //   },
        // })
        // .then((Res)=>{
        //  console.log(Res)
        // })
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
        const data =await api.json()
        console.log(data)
    }
  return (
    <div>
       popular 
    </div>
  )
}

export default Popular    