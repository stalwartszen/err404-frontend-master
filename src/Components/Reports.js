import React, { useEffect, useState } from 'react'
import { Button, Table, ToastBody } from 'react-bootstrap'
import { useStateContext } from '../context'

const Reports = () => {
    const { getReportsOfPatient, address, contract } = useStateContext()
    const [datas, setdatas] = useState([])
    var addres
    const handleContext = async () => {
        const result = await getReportsOfPatient(0)
        addres = address
        setdatas(result)
    }

    useEffect(() => {
        if (contract) handleContext()
    }, [address, contract])
    return (
        <div className='container mx-auto'>
            {datas.length > 0 && <Table>
                <thead className='bg-white/60'>
                    <tr>
                        <th>id</th>
                        <th>Address</th>
                        <th>title</th>
                        <th>description</th>
                        <th>view</th>
                    </tr>
                </thead>
                <tbody className='bg-white/60 backdrop-blur-2xl'>
                    {
                        datas?.map((data, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>0xC91BF17E34BD88563d6d72aF5beE4a01D3a1b1c1</td>
                                <td>{data.category}</td>
                                <td>{data.description}</td>
                                <td><Button onClick={() => {
                                    window.open(
                                        data.ipfs,
                                        '_blank' // <- This is what makes it open in a new window.
                                    );
                                }}>View</Button></td>
                            </tr>
                        )

                        )
                    }
                </tbody>
            </Table>}
        </div>
    )
}

export default Reports