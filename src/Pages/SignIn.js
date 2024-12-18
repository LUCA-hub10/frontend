import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../Redux/Actions/ClientActions';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import img from '../image/signUp.png'

function SignIn() {
  const client = useSelector(state => state.ClientReducers.client?.client);  
  const [showPassword, setShowPassword] = useState(false);  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async() => {
    await dispatch(signIn(email, password));
  };

  useEffect(() => {
    if (client) {
      navigate("/account");
    }
  }, [client, navigate]);

  return (
    <div className="container-fluid" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover',  height: 'auto', backgroundPosition: 'center' }}>
      <div className='mb-5'>.</div>
      <div>
      <h1 className="mb-4 text-center">So Glad To See You Again </h1>
      <Form className='container d-flex justify-content-center align-items-center' style={{ minHeight: '70vh' }}>
      <Card
          style={{
            width: '100%',
            maxWidth: '36rem',
            borderRadius: '10px',
            boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
            backgroundColor: '#262223',
          }}
        >
        <Card.Body className='p-4'>
        <Card.Title className="mb-4 d-flex justify-content-center mt-2" style={{ color: '#FFCB05' }}>Sign In</Card.Title>
        <Form.Group className="mb-4 mt-2" controlId="formBasicEmail">
          <Form.Label style={{ color: '#FFCB05' }} >Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderRadius: '20px', borderColor: '#ddd' }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label style={{ color: '#FFCB05' }}>Password</Form.Label>
              <InputGroup className="mb-4">
                <Form.Control 
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  aria-label="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className='rounded-start-pill'
                />
                <InputGroup.Text className='p-0' style={{border:'0'}}>
                  <Button 
                    variant="outline-secondary" 
                    onClick={() => setShowPassword(!showPassword)}
                    className='rounded-end-pill'
                  >
                    {showPassword ? 
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

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" style={{ color: '#ffcb05'}} />
        </Form.Group>

      <div className='d-flex justify-content-center mt-4'>
      <Button onClick={handleClick} className="px-5 py-2 mt-2 mb-1" style={{
                  backgroundColor: "#ffcb05",
                  borderColor: "#262223 ",
                  borderRadius: '30px',
                  color:"#262223",
                }}>
          Submit
        </Button>
      </div>
        </Card.Body>
        </Card>

      </Form>
      </div>
    </div>
  );
}

export default SignIn;
