import { useEffect, useState } from 'react';
import PopupView from './PopupView';
import Model from "./PopupModel"

const PopupController = ({ setIsOpen, isOpen }) => {
 const[posts, setPosts]= useState(null)
    // console.log(isOpen)

    //model açıldığında kullanıcının gönderilerini alır
    useEffect(() => {
        Model.getUserPosts(isOpen)
            .then((data) =>setPosts(data))
    }, [])
console.log(posts)
    return <PopupView setIsOpen={setIsOpen} isOpen={isOpen} posts={posts} />
}

export default PopupController