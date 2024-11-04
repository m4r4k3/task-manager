import { Link } from "react-router-dom";
import TaskCard from "../components/task/taskcard";
import { useDispatch, useSelector } from "react-redux";
import { countFunc } from "../store";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { actions } from "../store";

export function HomePage() {
  const filter = useSelector((e) => e.tasks.dataFilter)
  console.log(filter)
  const tasks = useSelector((e) => e.tasks).data.filter(e=>!Number.isInteger(filter) || e.status == filter);
  const count = useSelector(countFunc);
  const dispatch= useDispatch() ;
  const [showFilter , setShowFilter]= useState(false) ;
  return (
    <section className=" sm:px-[20%] py-3 w-full h-[calc(100vh-70px)] mt-[70px]">
      <article className="w-full  min-h-full rounded flex flex-col gap-3 p-4 overflow-x-hidden">
        <div className="flex justify-between px-5">
          <div className="">
              <i className="fa-solid fa-bars-filter cursor-pointer" onClick={()=>setShowFilter(prev=>!prev)}></i>
        <AnimatePresence>

            {showFilter && <motion.div className="mt-2"   transition={{ duration: 0.3 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                exit={{ opacity: 0 }}>
              <div className={`${!filter && !Number.isInteger(filter) &&"bg-black text-white"} flex gap-1 border pr-1 cursor-pointer`} onClick={()=>dispatch(actions.setFilter(null))}>
                <span className="bg-black text-white px-2 ">{count.all}</span>
                <span>All</span>
              </div>
              <div className={`${filter == 1 &&"bg-green-600 text-white" } flex gap-1 border pr-1 cursor-pointer`}  onClick={()=>dispatch(actions.setFilter(1))}>
                <span className="bg-green-600 text-white px-2 ">{count.completed}</span>
                <span>Completed</span>
              </div>
              <div className={`${Number.isInteger(filter) && !filter &&"bg-purple-600 text-white" } flex gap-1 border pr-1 cursor-pointer`}  onClick={()=>dispatch(actions.setFilter(0))}>
                <span className="bg-purple-600 text-white px-2 ">{count.pendding}</span>
                <span>Pendding</span>
              </div>
            </motion.div>}
        </AnimatePresence>
          </div>
          <Link to={"add"}>
            <i className="fa-solid fa-plus text-lg"></i>
          </Link>
        </div>
        {tasks.map((task, taskIndex) => (
          <TaskCard
            id={taskIndex}
            title={task.title}
            description={task.description}
            status={task.status}
          />
        ))}
      </article>
    </section>
  );
}
