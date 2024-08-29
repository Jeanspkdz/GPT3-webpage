import "./article.css"

const Article = ({img, title, date}) => {
  return (
    <article className="article">
          <img src={img} alt="Image About Article" className="article__img"/>

          <div className="article__body">
              <div className="article__info">
                <span className="article__date">{date}</span>
                <h4 className="article__title">{title}</h4>
              </div>
               <a href="#" className="article__link">Read Full Article</a>
          </div>

    </article>
  )
}

export default Article
