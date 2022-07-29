import React from 'react'
import {useSelector} from 'react-redux'

export const PostsList = () => {
  const posts = useSelector(state => state.posts)

  const renderedPosts = posts.map(post => (
    <div className="post" key={post.id}>
      <p className="post-content">{post.content}</p>
    </div>
  ))

  return (
    <section className="posts-list">
      <h2>Pitter Patter</h2>
      {renderedPosts}
    </section>
  )
}