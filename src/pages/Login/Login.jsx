import React, { useEffect } from 'react'
import { InputText } from '../../common/InputText/InputText';

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const credentialRdx = useSelector(useData);

  //Hooks

  const [credenciales, setCredenciales] = useState({
    email: "",
    password: "",
  });

  const [credencialesError, setCredencialesError] = useState({
    emailError: "",
    passwordError: "",
  });

  const [credencialesValid, setCredencialesValid] = useState({
    emailValid: false,
    passwordValid: false,
  });


  // Hook que activa el botón de envío de datos
  const [activeForm, setActiveForm] = useState(false);

  const [welcome, setWelcome] = useState("");


  //Handler

  const inputHandler = (e) => {
    setCredenciales((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //useEffect (función ciclo de vida del componente)

  useEffect(() => {
    if (credentialRdx.credentials.token) {
      navigate("/");
    }
  }, []); //UseEffect siempre debe acabar con un array vacío 


  return (
    <Container fluid>
        <Row className="LoginD">
            <col lg={6}>
              {welcome !== "" ? (
                <div>{Welcome}</div>
              ) : (
                <div>
                  <InputText
                    className={"inputLogin"}
                    type={"email"}
                    name={"email"}
                    placeholder={"email..."}
                    required={true}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                  />
                  <InputText
                    className={"inputFeoLogin"}
                    type={"password"}
                    name={"password"}
                    placeholder={""}
                    required={true}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                  />
                </div>
              )
            }
            </col>
        </Row>
    </Container>
  )
}
