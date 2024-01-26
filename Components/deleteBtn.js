import { useProjects } from "../store";

const DeleteBtn = ({ projectId }) => {
  const useDelete = useProjects((state) => state.deleteProject);

  return (
    <div>
      <button type="button" onClick={() => useDelete(projectId)}>
        Del
      </button>
    </div>
  );
};

export default DeleteBtn;
