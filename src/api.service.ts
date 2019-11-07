import axios from 'axios';

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
    return axios.post<Response>(`${url}/guess`, { names }).then(response => {
      return response.data;
    });
  }
}
