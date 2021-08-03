import { Component } from 'react'
import { CardList } from './components/card-list/card-list.component';
import { SearchBar} from './components/search-bar/search-bar.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  changeTextHandler = () => {
    console.log('Peperami Swan Click'); 
    this.setState({welcomeMessage: 'Peperami Supreme!!'});
  }

  searchFieldHandler = event => {
    console.log('Caguamonga!!');
    this.setState({searchField: event.target.value})
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json();
      })
      .then(users => {
        console.log(users);
        this.setState({monsters: users});
      })
  }

  render () {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1 className="title">Monsters Rolodex</h1>
        <SearchBar placeholder="Search Monster" handleChange={e => this.searchFieldHandler(e)} />
        <p>{searchField}</p>
        <CardList monsters={ filteredMonsters }></CardList>
      </div>
    );
  }
}

export default App;
