import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import InputMask from "react-input-mask";
import Patients from "./Patients";

const Home = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const refresh = localStorage.getItem("refresh");
  const access = localStorage.getItem("access");
  const userDataString = localStorage.getItem("user");
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const [addPatient, setAddPatient] = useState(false);
  const [patientData, setPatientData] = useState({
    name: "",
    phone: "",
    cnic: "",
    fee: "",
    disorder: "",
    attendant: "",
    address: "",
  });
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", patientData.name);
      formData.append("phone", patientData.phone);
      formData.append("cnic", patientData.cnic);
      formData.append("fee_paid", patientData.fee);
      formData.append("disorder", patientData.disorder);
      formData.append("attendant", patientData.attendant);
      formData.append("address", patientData.address);
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}patients/create_patient`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setPatientData({
        name: "",
        phone: "",
        cnic: "",
        fee: "",
        disorder: "",
        attendant: "",
        address: "",
      });
      setAddPatient(false);
    }
  };

  useEffect(() => {
    if (!refresh || !access || !userData) {
      navigate("/login");
    }
  }, [navigate, refresh, access, userData]);

  const [patients, setPatients] = useState([]);
  const fetchPatientData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}patients/get_patients`
    );
    const data = await response.json();
    setPatients(data);
  };
  useEffect(() => {
    fetchPatientData();
  }, [loading]);

  const handleSearch = (e) =>{
    setSearchText(e.target.value)
  }

  return (
    <div className="">
      <Navbar />
      <div className="flex items-center justify-between px-7 mt-4">
        <button
          className="bg-blue-500 py-2 px-3 rounded text-white"
          onClick={() => setAddPatient(true)}
        >
          Add Patient
        </button>

        <input type="text" onChange={(e)=>setSearchText(e.target.value)} placeholder="Search Here" name="" id="" className="border-[1px] border-solid border-gray-200 rounded py-2 px-3 outline-blue-500" />
      </div>
      {addPatient && (
        <div className="h-screen w-screen overflow-scroll fixed top-0 left-0 flex items-center justify-center opacity-95 bg-gray-200">
          <div className="min-w-[300px] md:w-[500px] max-w-[500px]: border-[1px] border-solid border-gray-300 opacity-100 p-5 bg-white rounded-lg">
            <div className="py-1">
              <h2 className="text-xl">Add a Patient</h2>
              <hr />
            </div>
            <form action="" onSubmit={submitHandler}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
                <div className="">
                  <label htmlFor="name">Name</label>
                  <input
                    onChange={handleSearch}
                    type="text"
                    name="name"
                    id="name"
                    className="w-full border-solid border-[1px] border-gray-300 p-2 rounded outline-blue-500"
                  />
                </div>
                <div className="block">
                  <label htmlFor="phone">Phone</label>
                  <InputMask
                    mask="0399-9999999"
                    id="phoneNumber"
                    maskChar="_"
                    onChange={(e) =>
                      setPatientData({ ...patientData, phone: e.target.value })
                    }
                    className="w-full border-solid border-[1px] border-gray-300 p-2 rounded outline-blue-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="block">
                  <label htmlFor="cnic">CNIC</label>
                  <InputMask
                    mask="99999-9999999-9"
                    maskChar="_"
                    onChange={(e) =>
                      setPatientData({ ...patientData, cnic: e.target.value })
                    }
                    type="text"
                    name="cnic"
                    id="cnic"
                    className="w-full border-solid border-[1px] border-gray-300 p-2 rounded outline-blue-500"
                  />
                </div>
                <div className="block">
                  <label htmlFor="fee">Fee paid</label>
                  <InputMask
                    mask="9999.00"
                    maskChar="_"
                    onChange={(e) =>
                      setPatientData({ ...patientData, fee: e.target.value })
                    }
                    type="text"
                    name="fee"
                    id="fee"
                    className="w-full border-solid border-[1px] border-gray-300 p-2 rounded outline-blue-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="block">
                  <label htmlFor="disorder">Disorder</label>
                  <select
                    onChange={(e) =>
                      setPatientData({
                        ...patientData,
                        disorder: e.target.value,
                      })
                    }
                    name="disorder"
                    id="disorder"
                    className="w-full border-solid border-[1px] border-gray-300 p-2 rounded outline-blue-500"
                  >
                    <option value="">-----</option>
                    <option value="generalCheckup">General Checkup</option>
                    <option value="diabetes">Diabetes</option>
                    <option value="Blood Pressure">Blood Pressure</option>
                    <option value="fever">Fever</option>
                    <option value="accident">Accident</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="block">
                  <label htmlFor="attendant">Attendant</label>
                  <select
                    onChange={(e) =>
                      setPatientData({
                        ...patientData,
                        attendant: e.target.value,
                      })
                    }
                    name="attendant"
                    id="attendant"
                    className="w-full border-solid border-[1px] border-gray-300 p-2 rounded outline-blue-500"
                  >
                    <option value="">-----</option>
                    <option value="Brother">Brother</option>
                    <option value="Sister">Sister</option>
                    <option value="Mother">Mother</option>
                    <option value="Father">Father</option>
                    <option value="Son">Son</option>
                    <option value="Daughter">Daughter</option>
                    <option value="Friend">Friend</option>
                    <option value="Cousin">Cousin</option>
                    <option value="Others">Others</option>
                  </select>{" "}
                </div>
              </div>
              <div className="grid grid-cols-1">
                <label htmlFor="">Address</label>
                <textarea
                  onChange={(e) =>
                    setPatientData({ ...patientData, address: e.target.value })
                  }
                  name="address"
                  id="address"
                  className="resize-none w-full border-solid border-[1px] border-gray-300 p-2 rounded outline-blue-500"
                ></textarea>
              </div>
              <div className="flex items-center justify-end gap-3 mt-4">
                <button
                  className="py-1 px-3 bg-gray-200 rounded"
                  onClick={() => setAddPatient(false)}
                >
                  Cancel
                </button>
                <button id='submit'
                  type="submit"
                  className="p-1 px-2 text-white bg-blue-500 rounded"
                >
                  {loading ? <div>loading</div> : <div>OK</div>}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <Patients patients={patients} searchText={searchText} />
    </div>
  );
};

export default Home;
