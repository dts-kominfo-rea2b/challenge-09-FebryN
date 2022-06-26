import './App.css';

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';
import Contact from './components/Contact'
import Header from './components/Header'

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <div className='header'>
        <Header />
      </div>
      <div className='master-card'>
        {
          contacts.map((item) => <Contact data={item} />)
        }
      </div>
    </div>
  )
}

export default App;
