import React, { useState } from 'react';
import { Button} from 'react-bootstrap';
import ChangeUserName from './ChangeUserName';
import ChangePassword from './ChangePassword';

const ModifyInfo = () => {

  const [show, setShow] = useState("0");


  return (
    <div className='card p-2 ms-3 mt-1'>
      {show==="0" && (
      <div>
        <h2 className='text-center'>Modify your Information</h2>
<div className='d-flex justify-content-center my-4'>
<Button
              className='rounded-start-pill'
style={{backgroundColor:"#b0572d" , borderColor:"#b0572d"}}
              onClick={() => setShow("username")}
            >
              Change UserName
            </Button>
            <Button
              className='rounded-end-pill '
              style={{backgroundColor:"#b47651" , borderColor:"#b47651"}}
              onClick={() => setShow("password")}
            >
              Change Password
            </Button>
</div>
      </div>
      )
      }
      {show === "username" &&
      (<ChangeUserName setShow={setShow}/>)
      }
      {show === "password" &&
      (<ChangePassword setShow={setShow}/>)
      }
    </div>
  );
};

export default ModifyInfo;
