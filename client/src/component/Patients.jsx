import React from 'react'

const Patients = ({patients, searchText}) => {
    console.log(searchText);
    const filteredPatients = searchText.length >= 0 ? patients.filter(patient => patient.name.includes(searchText)) : patients;
    return (
        <div className='mt-2 px-5'>
            <table className='w-full table-auto'>
                <thead className='bg-blue-500'>
                    <tr className='py-5'>
                        <td className='py-2 text-white px-2'>Sr.No</td>
                        <td className='py-2 text-white px-2'>Patient Name</td>
                        <td className='py-2 text-white px-2'>CNIC</td>
                        <td className='py-2 text-white px-2'>Disorder</td>
                        <td className='py-2 text-white px-2'>Fee Paid</td>
                        <td className='py-2 text-white px-2'>Attendant</td>
                        <td className='py-2 text-white px-2'>Address</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredPatients.map((patient, index) => (
                            <tr key={patient.id} className='border-b-solid border-[1px] border-gray-100 '>
                                <td className='py-2 px-2 bg-blue-100 border-b-solid border-[1px] border-gray-100'>{index+1}</td>
                                <td className='py-2 px-2 bg-blue-100 border-b-solid border-[1px] border-gray-100'>{patient.name}</td>
                                <td className='py-2 px-2 bg-blue-100 border-b-solid border-[1px] border-gray-100'>{patient.cnic}</td>
                                <td className='py-2 px-2 bg-blue-100 border-b-solid border-[1px] border-gray-100'>{patient.disorder}</td>
                                <td className='py-2 px-2 bg-blue-100 border-b-solid border-[1px] border-gray-100'>{patient.fee_paid}</td>
                                <td className='py-2 px-2 bg-blue-100 border-b-solid border-[1px] border-gray-100'>{patient.attendant}</td>
                                <td className='py-2 px-2 bg-blue-100 border-b-solid border-[1px] border-gray-100'>{patient.address}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Patients