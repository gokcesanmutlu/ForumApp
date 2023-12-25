const PopupView = ({ posts, isOpen, setIsOpen }) => {
  return (
    <div className="grid place-items-center w-full h-full fixed bg-black bg-opacity-50 inset-0">
      <div className="w-3/4 max-w-[600px] bg-gray-800 p-5 rounded-md">
        <div className="flex justify-between">
          <h4>
            <span className="font-bold text-yellow-500 me-1">
              {isOpen}
            </span>
            's Posts
          </h4>
          <button
            // aşağıda false da olurdu, olumsuz olması yeterli. 
            onClick={() => setIsOpen(null)}
            className="bg-gray-900 p-2 rounded-md"
          >
            Close
          </button>
        </div>

        {!posts ? (
          <p>Loading...</p>
        ) : (
          posts.map((post) => (
            <div className="bg-black p-3 rounded-md my-4">
              <h2 className="font-bold">{post.title}</h2>
              <p>{post.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PopupView;