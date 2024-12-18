import React from 'react'
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Profile = () => {
    const client = useSelector(state => state.ClientReducers.client?.client);
  return (
    <div>
      <Card className="mx-auto p-3">
            <div className='row'>
                <div className='col-4'>
                {client?.photo && <Card.Img variant="top" className='w-100' src={client.photo}/>}
                </div>
                <div className='col-8'>
                <Card.Text><span className='fw-bold'>UserName:</span> {client?.userName}</Card.Text>
                <Card.Text><span className='fw-bold'>Age:</span> {client?.age}</Card.Text>
                <Card.Text><span className='fw-bold'>Phone:</span> {client?.phone}</Card.Text>
                <Card.Text><span className='fw-bold'>Email:</span> {client?.email}</Card.Text>
                <Card.Text><span className='fw-bold'>Location:</span> {client?.location || "Not provided"}</Card.Text>
                <Card.Text><span className='fw-bold'>Description:</span> {client?.description || "No description available"}</Card.Text>
                <Card.Text className='d-flex'>
                    Account Status: <div className='ms-1' style={{color: client?.status === "active" ? "green" : "red"}}> {client?.status}</div>
                </Card.Text>                
                </div>
            </div>
            <div>
                
            </div>
          </Card>
    </div>
  )
}

export default Profile
