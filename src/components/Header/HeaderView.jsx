// header içinde veri çekmiyoruz, bir fonk çalışmıyor vs bu yüzden bunu üç katmana bölmeye gerek yok 

import { Link, NavLink } from "react-router-dom"

const HeaderView = () => {
  return (
    <div className="p-4 bg-black flex justify-between">
      <h1>
        <Link className="text-yellow-500 font-bold text-2xl" to={"/"}>Forum</Link>

      </h1>

      <nav className="flex gap-4 items-center">
        <NavLink to={"/"}>Posts</NavLink>
        <NavLink to={"/add  "}>Add Post</NavLink>
      </nav>
    </div>
  )
}

export default HeaderView