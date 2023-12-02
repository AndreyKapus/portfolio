const Projects = ({ projects }) => {
  return (
    <div>
      <ul>
        {projects &&
          projects.map(({ _id, img, name, techs, descr, team, avatarUrl }) => (
            <li key={_id}>
              <img src={avatarUrl} />
              <p>{name}</p>
              <p>{descr}</p>
              <p>{techs}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Projects;
