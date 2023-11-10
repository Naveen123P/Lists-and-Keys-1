import UserProfile from './components/UserProfile/index'
import './App.css'

const userDetails = [
  {
    uniqueKey: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Naveen',
    role: 'Full Stack Developer',
  },
  {
    uniqueKey: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Naveen',
    role: 'Full Stack Developer',
  },
  {
    uniqueKey: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Naveen',
    role: 'Full Stack Developer',
  },
  {
    uniqueKey: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Naveen',
    role: 'Full Stack Developer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetails.map(eachObject => (
        <UserProfile userDetails={eachObject} key={eachObject.uniqueKey} />
      ))}
    </ul>
  </div>
)

export default App
