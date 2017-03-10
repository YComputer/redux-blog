import React from 'react';


class Article extends React.Component{

  componentDidMount() {
    this.props.loadArticle();
  }


  render() {
    
    const { loading, error, article } = this.props.article;
    console.log('this.props.article',this.props.article)
    // console.log('article',article);
    
    if (error) {
      return <p className="message">Oops, something is wrong.</p>;
    }

    if (loading) {      
      return <p className="message">Loading...</p>;
    }

    return (
      <div>
        {article.description}

      </div>
    );
  }
    
}

export default Article;
