import { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../store";
import { useNavigate } from "react-router";

export function TaskForm() {
  const [SentData, setSentData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addForm = (e) =>
    setSentData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const SubmitFunc = () => {
    dispatch(actions.add(SentData));
    navigate("/");
  };
  return (
    <>
      <section className=" sm:px-[25%] py-3 w-full h-[calc(100vh-70px)] mt-[70px] flex justify-center items-center">
        <article className="w-full sm:shadow-2xl rounded flex flex-col gap-3 p-4 ">
          <h1 className="text-center mb-5 mt-2 text-xl font-semibold">
            Add A Task
          </h1>
          <div className="flex justify-between">
            <label className="text-lg">Title :</label>
            <input
              type="text"
              name="title"
              onChange={addForm}
              className="outline-0 border rouded w-[70%] sm:w-[80%] rounded h-[40px] px-2"
            />
          </div>
          <div className="flex justify-between">
            <label className="text-lg">Description :</label>
            <textarea
              name="description"
              onChange={addForm}
              className="outline-0 border rouded w-[70%] sm:w-[80%]  rounded resize-none h-[150px] px-2"
            ></textarea>
          </div>
          <button
            className="border mt-5 bg-blue-500 text-white py-3 rounded"
            onClick={SubmitFunc}
          >
            Submit
          </button>
        </article>
      </section>
    </>
  );
}
