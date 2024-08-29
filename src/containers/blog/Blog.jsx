import { Article } from "../../components"
import {blog01, blog02, blog03, blog04, blog05} from "./imports"
import "./blog.css"

const Blog = () => {
  return (
    <section className="section blog" id="blog">
          <div className="blog__grid container">
               <div className="blog__heading gradient__text">
                    <h2 className="blog__title">
                         A lot is happening, We are blogging about it.
                    </h2>
               </div>

               <div className="blog__articles">
                   {articles.map((item, index) => (
                         <Article
                              key={index}
                              title={item.title}
                              date={item.date}
                              img={item.imgURL}
                         />
                   ))}
               </div>
          </div>
    </section>
  )
}


const articles = [
     {
          title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
          date: "Sep 26, 2021",
          imgURL: blog01,
     },
     {
          title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
          date: "Sep 26, 2021",
          imgURL: blog02,
     },
     {
          title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
          date: "Sep 26, 2021",
          imgURL: blog03,
     },
     {
          title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
          date: "Sep 26, 2021",
          imgURL: blog04,
     },
     {
          title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
          date: "Sep 26, 2021",
          imgURL: blog05,
     },
]

export default Blog
