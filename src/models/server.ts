import express, {Application} from 'express';

class Server{

  private app:Application;
  private port:number;

  constructor(){
    this.app = express();
    this.port = 3000;
  }

  listen(){
    this.app.listen(this.port, () => {
      console.log('Server running on port', this.port);
    }
    );
  }

}

export default Server;