import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {useDispatch} from "react-redux" ;
import {actions} from "../../store" ;

export default function TaskCard({ id, title, description, status }) {
  const icons = ["clock", "check"];
  const [expandCheron, setExpandChevron] = useState(false);
  const dispatch = useDispatch();
  return (
    <div key={id} className="flex relative overflow-hidden">
      <button
        className="h-full w-[100px] absolute bg-green-500 rounded-l text-white grid place-content-center  cursor-pointer"
        style={{ zIndex: 1 }}
        onClick={()=>dispatch(actions.check(id))}
      >
        <p>Check</p>
      </button>
      <motion.div
       style={{ zIndex: 2 }}
        className={`w-full cursor-grab bg-white ${
          expandCheron ?? "h-[100px]"
        } border rounded p-3`}
        drag="x"
        dragConstraints={{
          right: 100,
          left: 0,
        }}
        dragElastic={0.3}
      >
        <div>
          <div className="flex flex-col justify-around">
            <div className="flex justify-between items-center pr-5">
              <h1 className="text-xl">{title}</h1>
              <motion.i
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                animate={{
                  rotateX: expandCheron ? 180 : 0,
                }}
                className="fa-solid fa-chevron-down cursor-pointer"
                onClick={() => setExpandChevron((prev) => !prev)}
              ></motion.i>
            </div>
            <div
              className={`flex items-center mt-2 gap-2 cursor-default ${
                status ? "text-green-600" : "text-purple-600"
              }`}
            >
              <i className={`fa-solid fa-${icons[status]}`}></i>
              <span>{["Pending", "Completed"][status]}</span>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {expandCheron && (
            <div className="mt-2 overflow-hidden ">
              <motion.div
                transition={{ duration: 0.1 }}
                initial={{ translateY: -30 }}
                animate={{ translateY: 0 }}
                exit={{ translateY: -30 }}
              >
                {description}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
