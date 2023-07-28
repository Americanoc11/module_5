import Image from 'next/image'
import { Inter } from 'next/font/google'
import { getStaticProps } from '../service/Service'
const inter = Inter({ subsets: ['latin'] })
export async function getProps(props) {
  const data = await getStaticProps();
  return {
    props: {
      data: data,
    },
  };
}
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
