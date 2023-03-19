import React, { useState } from 'react'
import { useStateContext } from '../context'
import { Button } from 'react-bootstrap'
import Navbar from '../Components/Navbar'
const Registerpat = () => {
    const [data, setdata] = useState({
        name: '',
        email: '',
        phone: '',
        emergencyContact: '',
        insurance: '',
        bloodgroup: '',
        password: '',
        role: 'patient'

    })

    const { RegisterPatients, address, connect } = useStateContext()

    const handleRegister = async () => {
        console.log(data)


        console.log(data)

        const result = await RegisterPatients({ address, name: data.name, email: data.email, phone: data.phone })

        console.log(result)
    }

    return (
        <>
            <Navbar />
            <div className='pt-8  pb-20 w-screen bg-gradient-to-tr flex justify-center items-center '>
                <div className="relative overflow-hidden md:flex w-1/3 i justify-around items-center hidden">
                    <img alt="imagesh" src='https://cdn-icons-png.flaticon.com/512/1430/1430453.png' class="rounded-full w-75" />
                </div>
                <div class="flex md:w-1/2 justify-center py-10 items-center ">
                    <form class="w-full backdrop-blur-2xl bg-purple/40 p-5 rounded-lg max-w-sm">
                        <div class="flex justify-center items-center" >
                            <h2 className="w-full text-xl p-2 text-white color-white">Register</h2>
                        </div>
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                                <label class="block text-white-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                    Name
                                </label>
                            </div>
                            <div class="md:w-2/3">
                                <input value={data.name} onChange={(e) => { setdata({ ...data, name: e.target.value }) }} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                            </div>
                        </div>

                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                                <label class="block text-white-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                    Email
                                </label>
                            </div>
                            <div class="md:w-2/3">
                                <input value={data.email} onChange={(e) => { setdata({ ...data, email: e.target.value }) }} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                            </div>
                        </div>
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                                <label class="block text-white-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                    Phone
                                </label>
                            </div>
                            <div class="md:w-2/3">
                                <input value={data.phone} onChange={(e) => { setdata({ ...data, phone: e.target.value }) }} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                            </div>
                        </div>
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                                <label class="block text-white-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                    Emergency phone
                                </label>
                            </div>
                            <div class="md:w-2/3">
                                <input value={data.emergencyContact} onChange={(e) => { setdata({ ...data, emergencyContact: e.target.value }) }} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                            </div>
                        </div>
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                                <label class="block text-white-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                    Insurance ID
                                </label>
                            </div>
                            <div class="md:w-2/3">
                                <input value={data.insurance} onChange={(e) => setdata({ ...data, insurance: e.target.value })} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                            </div>
                        </div>
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                                <label class="block text-white-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                    Blood Group
                                </label>
                            </div>
                            <div class="md:w-2/3">
                                <input value={data.bloodgroup} onChange={(e) => {
                                    setdata
                                        ({
                                            ...data, bloodgroup: e.target.value
                                        })
                                }} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                            </div>
                        </div>
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                                <label class="block text-white-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                    Password
                                </label>
                            </div>
                            <div class="md:w-2/3">
                                <input value={data.password} onChange={(e) => { setdata({ ...data, password: e.target.value }) }} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" />
                            </div>
                        </div>

                        <div class="md:flex md:items-center">
                            <div class="md:w-1/3"></div>
                            <div class="md:w-2/3">
                                <button onClick={() => { handleRegister() }} class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                    Register
                                </button>
                            </div>
                        </div>
                    </form>
                </div>



            </div>

        </>
    )
}

export default Registerpat