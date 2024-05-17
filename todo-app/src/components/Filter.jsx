import React from "react";

function Filter({
  setFilterAll,
  setFilterActive,
  setFilterCompleted,
  filterAll,
  filterActive,
  filterCompleted,
}) {
  const filterAllB = () => {
    setFilterAll(true);
    setFilterActive(false);
    setFilterCompleted(false);
  };

  const filterActiveB = () => {
    setFilterAll(false);
    setFilterActive(true);
    setFilterCompleted(false);
  };

  const filterCompletedB = () => {
    setFilterAll(false);
    setFilterActive(false);
    setFilterCompleted(true);
  };

  return (
    <section className="p-4 justify-center flex gap-8 bg-white mt-8 text-gray-500 font-semibold text-lg rounded-md">
      <span
        className={
          filterAll
            ? "cursor-pointer text-blue-700 font-semibold"
            : "cursor-pointer"
        }
        onClick={() => filterAllB()}
      >
        All
      </span>
      <span
        className={
          filterActive
            ? "cursor-pointer text-blue-700 font-semibold"
            : "cursor-pointer"
        }
        onClick={() => filterActiveB()}
      >
        Active
      </span>
      <span
        className={
          filterCompleted
            ? "cursor-pointer text-blue-700 font-semibold"
            : "cursor-pointer"
        }
        onClick={() => filterCompletedB()}
      >
        Completed
      </span>
    </section>
  );
}

export default Filter;
