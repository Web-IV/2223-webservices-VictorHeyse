const getAll = () => {
  const data = [
    {
      name: "Pretparkactiviteit",
      date: "2021-07-01T12:32:04.534Z",
      place: "lokaal klj",
    },
    {
      name: "Testactiviteit",
      date: "2022-09-02T12:32:04.534Z",
      place: "hogent",
    },
    {
      name: "Peter Heyse",
      date: "2021-02-01T12:32:04.534Z",
      place: "thuis",
    },
  ];
  return data;
};

const getById = () => {
  throw new Error("not implemented yet");
};

const create = () => {
  throw new Error("not implemented yet");
};

const updateById = () => {
  throw new Error("not implemented yet");
};

const deleteById = () => {
  throw new Error("not implemented yet");
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
