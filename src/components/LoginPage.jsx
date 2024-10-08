// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FormWrapper, Input, Button } from '../styles/LoginSignupStyles';
// // import Header from '../components/Header';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
    
//     if (email && password) {
//       console.log("User logged in with email:", email);
//     }
//   };

// const navigate = useNavigate()
//   function hanldeForm(){
// navigate('/bookingform')
//   }
//   return (
//     <>
//       {/* <Header />  */}
//       <FormWrapper>
//         <h2>Login</h2>
//         <form onSubmit={handleLogin}>
//           <Input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <Input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Button onClick={hanldeForm} type="submit">Login</Button>
//         </form>
//       </FormWrapper>
//     </>
//   );
// };

// export default LoginPage;


import React, { useState } from 'react';
import { FormWrapper, Input, Button } from '../styles/LoginSignupStyles';
// import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
    
    if (email && password) {
      console.log("User logged in with email:", email);
    }
  };
   
  function handleSignin (){
    navigate('/bookingform')
  }
  return (
    <>
      {/* <Header />  */}
      <FormWrapper>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleSignin} type="submit">Login</Button>
        </form>
      </FormWrapper>
    </>
  );
};

export default Login;
