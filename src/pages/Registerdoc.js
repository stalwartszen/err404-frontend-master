import React, { useState } from 'react'
import { useStateContext } from '../context'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'
const Registerdoc = () => {
    const [data, setdata] = useState({
        name: '',
        email: '',
        hosaddress: '',
        phone: '',
        liscence: '',
        degree: '',
        speciality: '',
        password: ''
    })

    const { RegisterDoctors, address, connect } = useStateContext()
    const navigate = useNavigate()
    const handleRegister = async () => {

        const result = await RegisterDoctors({ address, name: data.name, email: data.email, phone: data.phone })
        console.log(result)
        navigate('/')

    }





    return (
        <>
            <Navbar />
            <div className='pt-8  pb-20 w-screen bg-gradient-to-tr flex justify-center items-center '>
                <div className="relative overflow-hidden md:flex w-1/3 i justify-around items-center hidden">
                    <img src='https://cdn-icons-png.flaticon.com/512/387/387561.png' class="rounded-full w-75" />
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
                                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value={data.name} onChange={(e) => { setdata({ ...data, name: e.target.value }) }} />
                            </div>
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
                                <label class="block text-white-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                    Hospital Address
                                </label>
                            </div>
                            <div class="md:w-2/3">
                                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value={data.hosaddress} onChange={(e) => { setdata({ ...data, hosaddress: e.target.value }) }} />
                            </div>
                        </div>
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                                <label class="block text-white-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                    Phone
                                </label>
                            </div>
                            <div class="md:w-2/3">
                                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value={data.phone} onChange={(e) => { setdata({ ...data, phone: e.target.value }) }} />
                            </div>
                        </div>
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                                <label class="block text-white-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                    License No.
                                </label>
                            </div>
                            <div class="md:w-2/3">
                                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value={data.liscence} onChange={(e) => { setdata({ ...data, liscence: e.target.value }) }} />
                            </div>
                        </div>
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                                <label class="block text-white-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                    Speciality
                                </label>
                            </div>
                            <div class="md:w-2/3">
                                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value={data.speciality} onChange={(e) => { setdata({ ...data, speciality: e.target.value }) }} />
                            </div>
                        </div>
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                                <label class="block text-white-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                    Degree
                                </label>
                            </div>
                            <div class="md:w-2/3">
                                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value={data.degree} onChange={(e) => { setdata({ ...data, degree: e.target.value }) }} />
                            </div>
                        </div>
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                                <label class="block text-white-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                    Password
                                </label>
                            </div>
                            <div class="md:w-2/3">
                                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" value={data.password} onChange={(e) => { setdata({ ...data, password: e.target.value }) }} />
                            </div>
                        </div>

                        <div class="md:flex md:items-center">
                            <div class="md:w-1/3"></div>
                            <div class="md:w-2/3">
                                <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onSubmit={() => { handleRegister() }}>
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

export default Registerdoc