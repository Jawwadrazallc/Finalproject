import React, { useEffect, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Users = () => {

  const [users , setUsers] = useState([])

  useEffect(()=>{
     const Usersget = async()=>{
      try {
        let response  = await fetch('http://localhost:8082/api/users')
        const data =  await response.json()
        setUsers(data)
      } catch (error) {
        console.log(error)
      }
     }

     Usersget()
  },[])

  console.log(users)
  return (
   <>
   <div className='flex justify-center p-4 bg-gradient-to-r from-cyan-500 to-red-500 ... rounded  mb-3 text-2xl font-bold
   '>
   All Users
   </div>
   <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
   <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
   <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
   <tr>
       <th scope="col" class="px-6 py-3">
           Name
       </th>
       <th scope="col" class="px-6 py-3">
           Role
       </th>
       <th scope="col" class="px-6 py-3">
          Email
       </th>
       <th scope="col" class="px-6 py-3">
          Edit
       </th>
       <th scope="col" class="px-6 py-3">
          Delete
       </th>
      
   </tr>
</thead>
  
   {
    
    users.map((item , index)=> {
      return (
        <React.Fragment key={index}>
        <tbody>
        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.name}
            </th>
            <td class="px-6 py-4">
                {item.role ? item.role : "No Data"}
            </td>
            <td class="px-6 py-4">
               {item.email}
            </td>
            <td class="px-6 py-4">
              <button><FaEdit className='text-xl text-green-500'/></button>
            </td>
            <td class="px-6 py-4">
              <button><MdDelete  className='text-2xl text-red-500'/></button>
            </td>
          
         
        </tr>
        </tbody>
        </React.Fragment>
      )
    })
   }
   </table>
   </div>
   </>
  )
}

export default Users