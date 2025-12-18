import MyButton from './Button.tsx';

function MyList() {
  return (
    <>
      <hr/>
      <h2>List of fruits</h2>
      <ul>
        <li>Banana</li>
        <li>Pineapple</li>
        <li>Grapes</li>
      </ul>
    </>
  )
}

export default function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyList />
      <MyButton content="I'm a button"/>
    </div>
  )
}

