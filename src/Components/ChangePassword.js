import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../Redux/Actions/ClientActions';
import { Button, Form, InputGroup } from 'react-bootstrap';

function ChangePassword(props) {
    const dispatch = useDispatch();
    const client = useSelector(state => state.ClientReducers.client?.client);
    const [newPassword, setNewPassword] = useState('');

    const handleChangePassword = async () => {
      if (newPassword) {
        await dispatch(resetPassword(client._id, newPassword));
        props.setShow("0")
      }
    };
    const [showPassword2, setShowPassword2] = useState(false);

  return (
    <div>
          <Form.Group className="mb-4" controlId="formBasicPassword2">
              <Form.Label>Enter new password</Form.Label>
              <InputGroup className="mb-4">
                <Form.Control 
                  type={showPassword2 ? 'text' : 'password'}
                  placeholder="Enter new password"
                  onChange={(e) => setNewPassword(e.target.value)}
                  className='rounded-start-pill'
                />
                <InputGroup.Text className='p-0' style={{border:'0'}}>
                  <Button 
                    variant="outline-secondary" 
                    onClick={() => setShowPassword2(!showPassword2)}
                    className='rounded-end-pill'
                  >
                    {showPassword2 ? 
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                      <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/>
                      <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/>
                    </svg>
                      : 
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                      </svg>
                    }
                  </Button>
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
         <div className='d-flex justify-content-between my-3'>
         <Button style={{backgroundColor:"#b47651" , borderColor:"#b47651"}}
 onClick={() => props.setShow("0")}>
            back
          </Button>
          <Button style={{backgroundColor:"#b0572d" , borderColor:"#b0572d"}}
 onClick={handleChangePassword}>
            Save Changes
          </Button>
         </div>

    </div>
  )
}

export default ChangePassword
