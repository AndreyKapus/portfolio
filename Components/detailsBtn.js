const DetailsBtn = ({ projectId }) => {
  const loadMoreBtnClick = (e) => {
    const id = e.currentTarget.id;

    const isCurrentId = id !== projectId ? false : true;
    return isCurrentId;
  };

  return (
    <>
      <button type="button" id={projectId} onClick={loadMoreBtnClick}>
        more...asfasf
      </button>
    </>
  );
};

export default DetailsBtn;
