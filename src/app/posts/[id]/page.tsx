// export default function Post({ params: number }) {
export default function Post({ params }: { params: number }) {
  const { id } = params

  return (
    <h1>this is a post</h1>
  )
}
