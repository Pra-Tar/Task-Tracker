import TaskCard from "./TaskCard";
import { useSelector } from "react-redux";

const DisplayTask = () => {
  const searchResults = useSelector((state) => state.search);
  const allTasks = useSelector((state) => state.tasks);
  const searchQuery = useSelector((state) => state.searchQuery);
  const filterData = useSelector((state) => state.filter);
  const sortData = useSelector((state) => state.sort )
  const priorityOrder = {low: 1, medium: 2, high: 3}


  const applyFilters = (tasks) => {
    return tasks.filter((t) => {
      if (filterData["pending"] && filterData["completed"]) return true;
      if (filterData["pending"]) return t.status === "pending";
      if (filterData["completed"]) return t.status === "completed";
      return true;
    }).sort((a,b)=>{
        return sortData.date === "asc"
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date) 
    }).sort((a,b)=>{
        return sortData.priority === "asc"
        ? priorityOrder[a.priority] - priorityOrder[b.priority]
        : priorityOrder[b.priority] - priorityOrder[a.priority]
    })
  };

  const filteredTasks =
    (searchQuery.length === 0
      ? applyFilters(allTasks)
      : applyFilters(searchResults));

  if (filteredTasks.length === 0) {
    return <h1>No Results Found!</h1>;
  }

  return (
    <>
      {filteredTasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </>
  );
};

export default DisplayTask;
