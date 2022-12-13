import { useState } from "react";
import FormInput from "../../../components/InputText";
import { apiLogin } from '../../../API/apiaxios'
import { useNavigate } from "react-router-dom";

function LoginPage () {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
    //   errorMessage:
    //     "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
    //   pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "The username or password is incorrect.",
      label: "Password",
    //   pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];
const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const login = async () => {
      try {
          const response = await apiLogin(values);
          localStorage.setItem('login', JSON.stringify(response.data));
          if(response.status==200)
          {
            navigate("/")
          }
          // setTurfs(response.data);
      } catch (e) {
          console.error(`🚫 Something went wrong fetching API calls: ${e}`);
      }
  };
  login();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="h1">Login</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <p align='center'>
        <button className="button" >Login</button>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;