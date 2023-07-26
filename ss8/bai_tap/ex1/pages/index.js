import Image from 'next/image'
import { Inter } from 'next/font/google'
import axios from "axios";
const inter = Inter({ subsets: ['latin'] })
export default function Home(props) {
  return (
    <>
      <h1>Vietnam's COVID-19 Information</h1>
      <table>
        <thead>
          <tr>
            <td>Date</td>
            <td>Confirmed</td>
            <td>Recovered</td>
            <td>Active</td>
            <td>Deaths</td>
          </tr>
        </thead>
        <tbody>
          {props.map((user) => (
            <tr key={user.id}>
              <td>{user.date}</td>
              <td>{user.confirmed}</td>
              <td>{user.recovered}</td>

              <td>{user.active}</td>
              <td>{user.deaths}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export const getStaticProps = async () => {
  const response = await axios.get('https://localhost:8080/hopitals')
  const datas = response.data
  return {
    props: {
      users: datas
    }
  }
}