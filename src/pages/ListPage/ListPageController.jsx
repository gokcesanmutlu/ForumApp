import { useEffect, useState } from "react"
import ListPageView from "./ListPageView"
import Model from "./ListPageModel"

const ListPageController = () => {
    const [posts, setPosts] = useState(null)
    // bunu pop'up'ın gösterilip gösterilmeyeceğini düzenlemek için tutuyoruz, aynı zamanda hangi user 
    // postlarını göstereceğimizi söylemek için is open olması kafa karıştırıyor iki state'de tutabilirdik 
    // ancak daha az kod yazalım diye kullanıcı adını varsa yaptık, ve değer kontrolünü && yani varsa yaptık
    // normalde is openda boolean tutarız
    const [isOpen, setIsOpen] = useState(null)

    // useeffect ile kullanıcı etkileşimini izlediğimiz için controller'da tanımladık, 
    // etkileşim(kullanıcının sayfaya girmesi)
    useEffect(() => {
        Model.getPosts().then((data) => setPosts(data));
    }, []);

    //controller bileşeninde arayüz yani jsx kodu yazmayız 
    //view bileşenini döndürürüz
    return <ListPageView posts={posts} isOpen={isOpen} setIsOpen={setIsOpen} />
}

export default ListPageController