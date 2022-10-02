import './App.css';
import Main from './main'
import Footer from './Footer';
import Header from './Header';
import {ThemeProvider} from './ThemeContext';

function App() {

  return (
    <ThemeProvider>
      <div className="App">
          <Header />
          <Main />
          <Footer />
        </div>
    </ThemeProvider>
        
  );
}

export default App;
