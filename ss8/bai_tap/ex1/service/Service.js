import axios from "axios";
export const getStaticProps = async () => {
    const response = await axios.get('https://localhost:8080/hopitals')
    const datas = response.data
    return {
      props: {
        users: datas
      }
    }
  }