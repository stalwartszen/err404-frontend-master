import React, { useState } from 'react'

const Timeline = () => {
    const [value, setvalue] = useState("")
    const [ans, setans] = useState([])
    
    const handleSubmit = () => {
        fetch("http://18.183.138.117/medical/guidence/"
            + value, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
        ).then(res => res.json().then(res => {
            console.log(res)
            setans(res)
        }))
    }


    return (
        <>
                <div class="p-8 flex  justify-center items-center" >
                    <h2 className="w-full text-xl p-2 text-white">Ai Diagnosis</h2>
                </div>
                <div class="flex  justify-center items-center" >
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 p-5 rounded w-75 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="large-input" type="text" value={value } onChange={(e)=>setvalue(e.target.value)} />
                {/* <button class="btn" >Submit</button> */}
                <button type="submit" onClick={() => handleSubmit()} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

                </div>
            {ans && ans.map((data, index) => (
                <>
                <div class="container mx-auto w-full h-full">
                <div class="relative wrap overflow-hidden p-10 h-full">
                    <div class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>
                    {/* <!-- right timeline --> */}
                    {index%2==0 &&  <div class="mb-8 flex justify-between items-center w-full right-timeline">
                        <div class="order-1 w-5/12"></div>
                        <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 class="mx-auto font-semibold text-lg text-white">{index+1}</h1>
                        </div>
                        <div class="order-1 bg-white/70 backdrop-blur-2xl rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 class="mb-3 font-bold text-gray-800 text-xl">{data}</h3>
                            {/* <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                        </div>
                    </div>}

                    {/* <!-- left timeline --> */}
                    {index%2 != 0 && <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                        <div class="order-1 w-5/12"></div>
                        <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 class="mx-auto text-white font-semibold text-lg">{index+1}</h1>
                        </div>
                        <div class="order-1 bg-red-400 backdrop-blur-2xl rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 class="mb-3 font-bold text-white text-xl">{data}</h3>
                            {/* <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                        </div>
                    </div>}

                    
                </div>
            </div>
              </>))}
            
        </>
    )
}

export default Timeline;