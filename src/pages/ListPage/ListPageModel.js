// veri yapılarını tanımlarız / modeller genelde classlar tercih edilir

import axios from "axios";

export default class ListPageModel {
    static async getPosts() {
        const res = await axios.get('http://localhost:3077/posts');
        return res.data;
    }
}

//  fonk.'a model bileşeninden örnek oluşturmadan erişmek için static kullanıyoruz
// listPageModel.getPosts()

// bu class komponent değil sadece class, ama burada obje de kullanabilirdik.