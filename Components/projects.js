// import axios from "axios";

import { useEffect, useState } from "react";

const initialItems = [
  {
    _id: "65688de1dbbed05cf9e50a16",
    img: "1",
    name: "2",
    techs: "2",
    descr: "2",
    team: false,
    avatarUrl: "avatars\\classick-black-sunglasses.jpg",
    createdAt: "2023-11-30T13:28:01.243Z",
    updatedAt: "2023-11-30T16:31:32.895Z",
  },
];

const getAll = async () => {
  const res = await fetch(
    "https://portfolio-api-a758.onrender.com/api/projects"
  );
  const projects = await res.json();
  const strPr = JSON.stringify(projects);
  return strPr;
};

const Projects = () => {
  const [item, setItem] = useState(initialItems);
  console.log(item);

  useEffect(() => {
    const get = async () => {
      const result = await getAll();
      setItem(result);
    };
    get();
  }, [item]);

  console.log(item);

  return (
    <div>
      <ul>
        {item &&
          item.map((el) => {
            return <li key={el._id}>{el.name}</li>;
          })}
      </ul>
    </div>
  );
};

// Projects.getInitialProps = async () => {
//   const res = await axios.get("/api/projects");
//   const projects = await res.json();
//   console.log(projects);
//   return {
//     projects,
//   };
// };

export default Projects;
