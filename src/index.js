import './styles/index.scss';

const config = {
  baseUrl: 'https://evernote.com/api',
  path: '/v1/notes'
};

class Webclipper {
  constructor() {
    this.map = new Map();
    this.config = { ...config };
  }

  serialize() {
    console.log('Webclipper is running woohooo !!', this.config);
  }

  static autoinit() {
    if (!Webclipper.instance) {
      Webclipper.instance = new Webclipper();
    }

    return Webclipper.instance;
  }
}

Webclipper.instance = null;

export default Webclipper;
