import React from 'react'
import ReactDom from 'react-dom'

let bookList = [
  {"title": "New Book", "author": "New Hemingway", "pages": 255360},
  {"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260},
  {"title": "Lord of the Rings", "author": "J.R.R. Tolkien", "pages": 1560},
  {"title": "Cats Cradle", "author": "Kurt Vonnegurt", "pages": 304}
]

const Book = ({title, author, pages}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} pages</p>
    </section>
  )
}

class Library extends React.Component {
  state = { open: false }

  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }

  render () {
    const { books } = this.props
    return (
      <div>
        <h1>The Library is {this.state.open ? 'open' : 'closed'}</h1>
        <button onClick={this.toggleOpenClosed}>Change</button>
        {books.map(
          (book, i) =>
            <Book 
              key={i}
              title={book.title} 
              author={book.author} 
              pages={book.pages} 
            />
        )}
      </div>
    )
  }
}

ReactDom.render(
  <Library books={bookList} />, 
  document.getElementById('root')
)