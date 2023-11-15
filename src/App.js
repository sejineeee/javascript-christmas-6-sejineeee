import Promotion from './Promotion.js';

const promotion = new Promotion();

class App {
  async run() {
    await promotion.execute();
  }
}

export default App;
