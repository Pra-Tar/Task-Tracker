import { useDispatch, useSelector } from "react-redux";
import { removeTask, editTask } from "../slices/taskSlice";
import { useState } from "react";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();
  const [isChecked, setisChecked] = useState(
    task.status === "pending" ? false : true
  );

  const handleDelete = () => {
    dispatch(removeTask(task.id));
  };

  const handleStatus = () => {
    isChecked ? setisChecked(false) : setisChecked(true);
    dispatch(
      editTask({
        id: task.id,
        updates: {
          ...task,
          status: isChecked ? "pending" : "completed",
        },
      })
    );
  };

  return (
    <>
      <div
        className="h-52 rounded-2xl border-2 p-3 border-black"
        style={{ backgroundColor: task.bgColor }}
      >
        <span className="block text-2xl mb-1">
          {" "}
          {task.title.charAt(0).toUpperCase() + task.title.slice(1)}{" "}
        </span>
        <div className="h-32 overflow-clip">
          <span className="block text-lg font-light break-words text-ellipsis">
            {task.description}
          </span>
        </div>
        <div className="mt-auto flex justify-between items-center">
          <input
            type="checkbox"
            className="w-4 h-4"
            checked={isChecked}
            onChange={handleStatus}
          />
          <span className="font-light text-xs">
            {task.priority.toUpperCase()}
          </span>
          <span className="font-light text-xs">{task.date}</span>
          <button
            className="bg-red-700 w-4 h-4 border-black border-2 flex items-center justify-center text-sm"
            onClick={handleDelete}
          >
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
