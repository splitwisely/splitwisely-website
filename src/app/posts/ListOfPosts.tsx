const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
}

export async function ListOfPosts() {
  const posts = await fetchPosts()

  return posts.slice(0, 5).map(post => (
    <article key={post.id}>
      <h2 style={{ color: '#09f' }}>{post.title}</h2>
      <p>{post.body}</p>
    </article>
  ))
}