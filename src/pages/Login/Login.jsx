import React, { useEffect } from 'react'
import { InputText } from '../../common/InputText/InputText';

export const Login = () => {

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
