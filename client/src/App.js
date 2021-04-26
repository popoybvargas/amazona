import data from './data';
import CardsList from './components/CardsList';

function App()
{
	return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">amazona</a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <CardsList data={ data }/>
      </main>
      <footer className="row center">
        All rights reserved
      </footer>
    </div>
  );
}

export default App;