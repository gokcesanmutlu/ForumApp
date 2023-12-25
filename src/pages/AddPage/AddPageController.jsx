import React from "react";
import AddPageView from "./AddPageView";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import Model from "./AddPageModel";
import { toast } from "react-toastify";

const AddPageController = () => {
  const navigate = useNavigate();

  //Formun gönderilmesi bir kullanıcı etkileşimidir bunun controller'da tanımlanması gerekir
  const handleSubmit = (e) => {
    e.preventDefault();

    // inputlardaki verileri alıp bir post objesi oluşturcaz, ardından id eklicez
    const form = new FormData(e.target);
    const newPost = Object.fromEntries(form.entries());

    newPost.id = v4();

    //1)api'a veriyi kaydet(fonksiyonunu modelde yazıcaz)
    Model.createPost(newPost)
      .then(() => {
        toast.success("Post was sent")
        navigate("/");
      })
      .catch(() => toast.error("Error occured when post sending."));
  };

  return <AddPageView handleSubmit={handleSubmit} />;
};

export default AddPageController;
