import React from "react";

const AddPageView = ({ handleSubmit }) => {
  
  return (
    <div className="h-[90vh] grid place-items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-1 w-3/4 max-w-[700px] bg-black p-4 rounded-lg"
      >
        <h1 className="text-center text-xl ">Add To New Post</h1>

        <div className="flex flex-col gap-1 p-4 ">
          <label className="text-sm" htmlFor="user">
            User Name:{" "}
          </label>
          <input
            className="p-1.5 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block"
            name="user"
            id="user"
            type="text"
            placeholder="Enter name"
            required
          />
        </div>

        <div className="flex flex-col gap-1 p-4 ">
          <label className="text-sm" htmlFor="title">
            Title:{" "}
          </label>
          <input
            className="text-sm p-1.5 text-black rounded-md focus:ring-blue-500 focus:border-blue-500 block"
            name="title"
            id="title"
            type="text"
            placeholder="What is React?"
            required
          />
        </div>

        <div className="flex flex-col gap-1 p-4 ">
          <label className="text-sm" htmlFor="text">
            Explanation:{" "}
          </label>
          <textarea
            className="min-h-[90px] max-h-[300px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
            name="text"
            id="text"
            cols="50"
            rows="4"
            placeholder="..."
            required
          ></textarea>
        </div>

        <div className="flex flex-col p-4 ">
          <button
            type="submit"
            className="py-1 rounded-md w-full bg-yellow-500 text-black font-bold transition hover:bg-yellow-700"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPageView;
