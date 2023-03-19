import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Vitals = () => {
  return (
      <>
        <div className='pt-8  pb-20 w-screen bg-gradient-to-tr flex justify-center items-center '>
              <div className='p-10 bg-[#24133d] bg-opacity-90 w-11/12  lg:w-4/6 xl:w-1/3 tracking-wide rounded-3xl mt-20 '>
              <h1 className='text-2xl text-white tracking-wider font-bold'>Vitals Record</h1>
                  <div className=' h-[0.125rem] bg-slate-600 my-2'></div>
                  <form class="bg-purple/70 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2" for="username">
                        Date
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="date" />
                      </div>
                      <div class="mb-4">
                        <label class="block text-white text-sm font-bold mb-2" for="username">
                            Sugar
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                        </div>
                        
                        <div class="mb-4">
                            <label class="block text-white text-sm font-bold mb-2" for="username">
                            Blood Pressure Diastolic
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Blood Pressure Diastolic"/>
                      </div>
                      <div class="mb-4">
                            <label class="block text-white text-sm font-bold mb-2" for="username">
                            Blood Pressure Systolic
                            </label>    
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Blood Pressure Systolic"/>
                      </div>
                      <div class="mb-4">
                            <label class="block text-white text-sm font-bold mb-2" for="username">
                            Temperature
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Temperature"/>
                      </div>
                      <div class="mb-4">
                            <label class="block text-white text-sm font-bold mb-2" for="username">
                            Heart Rate
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Temperature"/>
                      </div>
                      <div class="mb-4">
                            <label class="block text-white text-sm font-bold mb-2" for="username">
                            Weight
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Temperature"/>
                      </div>
                      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
                  </form>
            </div>
          </div>
          <hr />
          
          {/* <div className='pt-8  pb-20 w-screen bg-gradient-to-tr flex justify-center items-center '>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 bg-dark dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Sugar
                            </th>
                            <th scope="col" class="px-6 py-3">
                            Blood Pressure Diastolic
                            </th>
                            <th scope="col" class="px-6 py-3">
                            Blood Pressure Systolic
                              </th>
                            <th scope="col" class="px-6 py-3">
                            Temperature
                              </th>
                              <th scope="col" class="px-6 py-3">
                              Heart Rate
                              </th>
                              <th scope="col" class="px-6 py-3">
                              Weight
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-dark  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td class="px-6 py-4">
                                Silver
                            </td>
                            <td class="px-6 py-4">
                                Laptop
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                            <td class="px-6 py-4 text-right">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Microsoft Surface Pro
                            </th>
                            <td class="px-6 py-4">
                                White
                            </td>
                            <td class="px-6 py-4">
                                Laptop PC
                            </td>
                            <td class="px-6 py-4">
                                $1999
                            </td>
                            <td class="px-6 py-4 text-right">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Magic Mouse 2
                            </th>
                            <td class="px-6 py-4">
                                Black
                            </td>
                            <td class="px-6 py-4">
                                Accessories
                            </td>
                            <td class="px-6 py-4">
                                $99
                            </td>
                            <td class="px-6 py-4 text-right">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>              */}


               
      </>
  )
}

export default Vitals