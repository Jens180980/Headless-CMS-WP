import axios from "axios";
import { useState, useEffect } from "react";
import Style from "./list.module.scss";

export const List = () => {
  const [Homes, setHomes] = useState();

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `http://test.dev-footprint.nu/backend/wp-json/wp/v2/homes`
      );
      setHomes(result.data);
    };
    getData();
  }, []);

  return (
    <div>
      <h4 className={Style.header}>Liste over boliger</h4>
      <table className={Style.wrapper}>
        <thead>
          <th>Pris</th>
          <th>Adresse</th>
          <th>Kvadratmeter</th>
        </thead>

        {Homes &&
          Homes.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.acf.price}</td>
                <td>{item.acf.address}</td>
                <td>{item.acf.area} m2</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};
