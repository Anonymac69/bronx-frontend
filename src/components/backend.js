import React from 'react'


let getApi = () => {
  const bronxApi = 'http://localhost:8000/article'
  // const placeHolder = 'https://jsonplaceholder.typicode.com/todos/1'
  
  fetch(bronxApi, { headers : { 'Access-Control-Allow-Origin': 'http://localhost:8000/article'}})
    .then(response => response.json())
    .then(data => { console.log(data) })
    .catch(err => { console.log(err)})
}

getApi()

const backend = () => {
  return (
    <div className='backend'>
      <p>Bronx API content inserts here</p>
    </div>
  )
}

export default backend
