import React, { useState } from 'react'

import { useStateContext } from '../context'

const Logindoc = () => {
    const [data, setdata] = useState({
        email: '',
        password: '',
        role: 'doctor'
    })

    const { connect, address, getDoctorByAddress, contract } = useStateContext()

    const handleLogin = async () => {

        const result = await getDoctorByAddress({ address })
        console.log(result)

    }

    return (
        <>
            <div className='pt-8  pb-20 w-screen bg-gradient-to-tr flex justify-center items-center '>
                <form class="w-full backdrop-blur-2xl bg-purple/40 p-5 rounded-lg max-w-sm">
                    <div class="flex justify-center items-center" >
                        <h2 className="w-full text-xl p-2 text-white">Login</h2>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block text-white-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Email
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value={data.email} onChange={(e) => { setdata({ ...data, email: e.target.value }) }} />
                        </div>
                    </div>

                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block text-white-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                Password
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" value={data.password} onChange={(e) => setdata({ ...data, password: e.target.value })} />
                        </div>
                    </div>

                    <div class="md:flex md:items-center">
                        <div class="md:w-1/3"></div>
                        <div class="md:w-2/3">
                            <button onClick={() => { handleLogin() }} class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                Login
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Logindoc