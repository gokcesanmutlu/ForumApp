// sadece jsx yazılır
import PopupController from './../../components/PopUp/PopupController';
const ListPageView = ({ posts, isOpen, setIsOpen }) => {

  //console.log(posts);
  return (
    <main className="container-sm px-5 py-5 md:px-40 lg:px-52">
      <h1>
        Number of Posts: <span className="font-bold">{posts?.length}</span>
      </h1>

      {!posts ? (
        <p>Loading...</p>
      ) : (
        posts.map((post) => (
          <div
            className="w-full bg-black my-5 p-5 rounded-md shadow shadow-[#ffffff38] hover:shadow-yellow-300"
            key={post.id}
          >
            <div className="flex justify-between">
              <h3>{post.title}</h3>
              <p onClick={() => setIsOpen(post.user)} className="text-yellow-500">{post.user}</p>
            </div>
            <p className="mt-4 text-slate-300">{post.text}</p>
          </div>
        ))
      )}

      {/* 22. satırda is open'a user.name gönderdik, Modeli kimin için açtığımızı söylüyoruz
        kullanıcının ismi de bir değer olduğu için aşağıdaki 
        koşulu sağlayacaktır dolayısıyla popup controller basılacaktır, 
        çünkü bu is open true ise kontrolü değil varsa kontrolüdür */}
      {isOpen && <PopupController isOpen={isOpen} setIsOpen={setIsOpen} posts={posts} />}
    </main>
  );
};

export default ListPageView;
