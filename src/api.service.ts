// import axios from 'axios';

const url =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080'
    : 'https://lucilenicklas.se/api';

interface Response {
  results: boolean[];
  destination: string;
}
export class ApiService {
  static guess(names: string[]): Promise<Response> {
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify({
        names,
      }),
    };

    return fetch(`${url}/guess`, options).then(response => response.json());

    // return axios
    //   .post<Response>(
    //     `${url}/guess`,
    //     { names },
    //     {
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     }
    //   )
    //   .then(response => {
    //     return response.data;
    //   });
  }
}
