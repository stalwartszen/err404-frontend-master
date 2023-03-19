import React, { useState, useEffect } from 'react'
import { useStateContext } from '../context';
import { useStorageUpload } from "@thirdweb-dev/react";
import { useContract, useSigner } from 'wagmi';
import { ethers } from 'ethers';
import Loading from './Loading';
import { create as ipfsHttpClient } from "ipfs-http-client";
import { Autocomplete, TextField } from '@mui/material';

const projectId = process.env.REACT_APP_PROJECT_ID;
const projectSecretKey = process.env.REACT_APP_PROJECT_KEY;
const authorization = "Basic " + btoa('2N9UNyXnoYiqydWKo2HD89Q13Jk' + ":" + '6af0ff58b0533c7fa14b57d6a8aab45d');

const Publish = () => {
  const [filePath, setFilePath] = useState();
  const [uploadedImages, setUploadedImages] = useState([]);
  const [doctor, setdoctor] = useState(0);
  const ipfs = ipfsHttpClient({
    url: "https://ipfs.infura.io:5001/api/v0",
    headers: {
      authorization,
    },
  });

  const [datas, setdatas] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { address, RegisterRecords, contract, connect, getAllDoctors } = useStateContext();
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // const form = event.target;
    // console.log(files)
    // const files = form[0].files[0];

    // if (!files || files.length === 0) {
    //   return alert("No files selected");
    // }

    const file = filePath;
    console.log(filePath)
    // upload files
    const result = await ipfs.add(file);


    setUploadedImages([
      ...uploadedImages,
      {
        cid: result.cid,
        path: result.path,
      },
    ]);
    console.log(result.path)

    const results = await RegisterRecords(
  {patientId:0,doctorId:0,
      ipfs:"https://skywalker.infura-ipfs.io/ipfs/" + result.path,
      date:new Date().toLocaleString(),
      description,
      category:title,}
    );

    console.log(results)
    if (results.success) {
      alert("Successfully Registered");
    }


    // window.open(
    //     "https://skywalker.infura-ipfs.io/ipfs/"+result.path,
    //     '_blank' // <- This is what makes it open in a new window.
    //   );

  };


  const handleContext = async () => {
    const data = await getAllDoctors();
    setdatas(data);
  }

  useEffect(() => {
    if (address) handleContext();
  }, [address, contract]);


  //   const uploadToIpfs = async (e) => {
  //     const uploadUrl = await upload({
  //       data: [filePath],
  //       options: { uploadWithGatewayUrl: true, uploadWithoutDirectory: true },
  //     });
  //     return uploadUrl[0]
  //   };

  //   const uploadData = async (e) => {
  //     try {
  //       setIsLoading(true);
  //       e.preventDefault();
  //       if (window.ethereum) {
  //         const provider = new ethers.providers.Web3Provider(window.ethereum);
  //         const signer = provider.getSigner();
  //         const contract = new ethers.Contract(
  //           contractAddress.address,
  //           contractABI,
  //           signer
  //         )

  //         const imageURI = await uploadToIpfs();

  //         const msgTx = await contract.NewRrecord(
  //           `${title}`,
  //           `${description}`,
  //           `${imageURI}`
  //         )

  //         msgTx.wait();
  //         alert("The data is succesfully uploaded!!");
  //         setIsLoading(false);

  //       } else {
  //         console.log('eth object not found')

  //       }
  //     } catch (e) {
  //       console.log(e);
  //     }



  //   }




  return (
    <>
      <div className='pt-8  pb-20 w-screen bg-gradient-to-tr flex justify-center items-center '>
        {!isLoading ? (
          <div className='p-10 bg-[#24133d] bg-opacity-90 w-11/12  lg:w-4/6 xl:w-1/3 tracking-wide rounded-3xl mt-20 '>

            <h1 className='text-2xl text-white tracking-wider font-bold'>Post a new Record</h1>
            <div className=' h-[0.125rem] bg-slate-600 my-2'></div>
            <form action="" className='flex flex-col justify-center'>
              <div className='mb-4'>
                <label className='text-white ml-3'>Title</label>
                <input
                  onChange={e => setTitle(e.target.value)}
                  type="text" name='title' placeholder='Enter Title of a record' className='w-full p-2 rounded-lg mt-2 outline-none text-lg' required />
              </div>

              <div className='mb-4'>
                <label className='text-white ml-3'>Description</label>
                <textarea
                  onChange={e => setDescription(e.target.value)}
                  type="text" required name='desc' rows="4" placeholder='Enter description of record' className='w-full p-2 rounded-lg mt-2 outline-none text-lg' />
              </div>

              <div>
                <h1 className='text-white mb-3'>Choose a File</h1>
                <input type='file'
                  className='font-semibold tracking-wide cursor-pointer text-white'
                  placeholder='Select'
                  onChange={e => setFilePath(e.target.files[0])}
                  required
                />
              </div>
              <div className='d-flex justify-content-center mx-auto'>
                {/* <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={datas.map((option) => option.name)}
                  sx={{ width: 300, bgcolor: 'white', }}
                  renderInput={(params) => <TextField {...params} label="Doctor" />}
                /> */}
                {/* <button className="bg-blue-600 text-white p-2 w-40 rounded-full tracking-wide font-bold text-lg hover:scale-105 transition duration-200"
                  onClick=""
                >
                  Give Access
                </button> */}
              </div>
              <br/>
              <br/>
                <label style={{color:"white"}}>Add Doctor</label>
              <select type="select" deafultValue="Select" value={doctor} onChange={(e)=>{setdoctor(e.target.value)}} >
                <option>Select</option>
                {datas.map((data,i) => (
                  <option key={data.id} value={i}>{data.name}</option>
                ))}
              </select>

              <div className='h-[0.02rem] bg-gray-300 w-full mt-5'></div>

              <div className='mt-5 flex justify-center'>
                <button
                  className="bg-blue-600 text-white p-2 w-40 rounded-full tracking-wide font-bold text-lg hover:scale-105 transition duration-200"
                  onClick={(e) => { onSubmitHandler(e) }}
                >
                  Post
                </button>
              </div>

            </form>
          </div>

        ) : (
          <Loading value='Wait for the transaction' />
        )}
      </div>
      <br/>
    </>

  )
}

export default Publish