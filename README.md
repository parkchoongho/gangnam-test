# API 문서

|                       구분                        |     url      | method |    parameter     | requset body  |           response            |
| :-----------------------------------------------: | :----------: | :----: | :--------------: | :-----------: | :---------------------------: |
|      jwt 생성, jwt session 저장 및 jwt 응답       | /api/encode  |  POST  |        X         |   json 형태   |      result: string(jwt)      |
|          jwt decode 및 jwt payload 응답           | /api/decode  |  GET   | jwt: string(jwt) |       X       |           json 형태           |
| jwt session에서 해당 jwt 값 삭제 및 jwt 상태 응답 | /api/destroy | DELETE |        X         | text 형태 jwt | jwt 상태에 대해 알려주는 text |

