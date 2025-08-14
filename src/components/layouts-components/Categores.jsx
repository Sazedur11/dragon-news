import { useEffect, useState } from "react";

const Categores = () => {

    const [categores, setCategories] = useState([])

    useEffect(() =>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => setCategories(data.data.news_category))
    },[])

console.log(categores)
    return (
        <div>
            <h2 className="font-semibold mb-2">All Category {categores.length}</h2>
            <div className="flex flex-col gap-2">
                {
                    categores.map(category => <button className="btn btn-ghost text-center " key={category.category_id}><a href="">{category.category_name}</a></button>)
                }
            </div>

        </div>
    );
};

export default Categores;