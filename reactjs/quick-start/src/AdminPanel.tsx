function MyList() {
  return (
    <>
      <hr/>
      <h2>Admin Options</h2>
      <ul>
        <li>Fetch All Posts</li>
        <li>Make Post</li>
        <li>Edit Post</li>
      </ul>
    </>
  )
}

export default function AdminPanel() {
  return (
    <div>
      <h1>Adming Panel</h1>
      <MyList />
    </div>
  )
}

