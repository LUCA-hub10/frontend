import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
/*import { FaCog, FaEdit, FaProductHunt, FaSignOutAlt, FaUser } from 'react-icons/fa';*/
import ModifyInfo from '../../Components/ModifyInfo';
import Profile from '../../Components/Profile';
import PProducts from '../../Components/Products';
import HHistory from '../../Components/HHistory';
import { signOut } from '../../Redux/Actions/ClientActions';

const ClientProfile = () => {
    const client = useSelector(state =>  state.ClientReducers.client?.client);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [now, setNow]= useState("profile");

//   const handleDelete = async () => {
//     await dispatch(deleteClient(client._id));
//     navigate("/home");
//   };

const SignOutAccount = async () =>{
    await dispatch(signOut());
    navigate("/home");
}

  useEffect(() => {
    if (!client) {
      navigate("/signIn");
    }
  }, [client, navigate]);

  return (
    <div className="container-fluid">
      {/* SideBar */}
      <div className="row">
        <div className="col-3 p-0">
          <div className="bg-body-secondary p-1">
            <div  className="d-flex justify-content-center">
            {client?.photo && <Card.Img variant="top" src={client.photo} className="sidebar-img rounded-circle w-50" />}
            </div>
            <div className="d-flex justify-content-center mt-2 mb-4">
              <h5>{client?.userName}</h5>
            </div>
            <div>

            <div>
            <Button variant="light" className="sidebar-btn w-100 mb-2" onClick={() => setNow("profile")}>
              {/* <FaUser className="me-2" /> */} Profile 
            </Button>
            <Button variant="light" className="sidebar-btn w-100 mb-2" onClick={() => setNow('modify-info')}>
              {/* <FaEdit className="me-2" />  */} Modify Personal Info
            </Button>
            <Button variant="light" className="sidebar-btn w-100 mb-2" onClick={() => setNow('products')}>
              {/* <FaProductHunt className="me-2" />  */} Products
            </Button>
            <Button variant="light" className="sidebar-btn w-100 mb-2" onClick={() => setNow('history')}>
              {/* <FaProductHunt className="me-2" /> */} History 
            </Button>
            </div>

            <div style={{marginTop:"185px"}}>
            <Button               style={{backgroundColor:"#b0572d" , borderColor:"#b47651"}}
 className="sidebar-btn w-100 mb-2" onClick={() => setNow('settings')}>
              {/* <FaCog className="me-2" /> */} Settings 
            </Button>
            <Button               style={{backgroundColor:"#b47651" , borderColor:"#b47651"}}
className="sidebar-btn w-100" onClick={SignOutAccount}>
              {/* <FaSignOutAlt className="me-2" /> */} Sign Out 
            </Button>
            </div>

            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-9 p-1">
        {now =="profile"?<Profile/>:null}
        {now =="modify-info"?<ModifyInfo/>:null}
        {now == "products"?<PProducts />:null}
        {now == "history"?<HHistory />:null}
        </div>
      </div>
    </div>
  );
};
export default ClientProfile;