import { useEffect, useState } from "react";
import axios from "../Axios";

const VahedList = () => {
  const [vaheds, setvaheds] = useState([]);
  useEffect(() => {
    const fetchVaheds = async () => {
      //    const response=await axios.get("/FoodCategory/categories");
      //           const response=await axios.get("https://react-mini-projects-api.classbon.com/FoodCategory/categories");
      const response = await axios.get("https://react.taktrash.ir/getdata.php");
      // console.log(response.data);
      setvaheds(response.data);
    };
    fetchVaheds();
  }, []);
  return (
    <nav className="container">
      <div className="nav2">
        Vahed List
        <ul className="nav3">
          <li className="nav-item">
            <a className="nav-link" href="/About">
              تمام واحد ها
            </a>
          </li>
          {vaheds.map((vahed) => (
            <li className="nav-item" key={vahed.id}>
              <a className="nav-link" href="/About">
                {vahed.plak}-{vahed.malek}-{vahed.mostajer}-{vahed.nafar}-{vahed.mob}-{vahed.tel}-{vahed.gaz}-{vahed.ab}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default VahedList;
