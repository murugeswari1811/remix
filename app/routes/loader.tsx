import React from 'react'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react';

export async function loader(){
    const response=await fetch('https://jsonplaceholder.typicode.com/posts');
    const data=await response.json();
    return json(data);
}
const Loader = () => {
    const loaderData=useLoaderData();
  return (
    <>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-blue-500 text-white'>
            <tr>
                <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider'>userid</th>
                <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider'>id</th>
                <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider'>Title</th>
            </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
            
                {loaderData.map((item)=>(   
                    <tr key={item.id}>
                        <td className="px-6 py-4 whitespace-nowrap">{item.userId}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{item.title}</td>
                    </tr>
                ))}
                
            
        </tbody>
      </table>
    </>
  )
}

export default Loader
