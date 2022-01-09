class Webclipper {
  serialize() {
    console.log('Webclipper is running woohooo !!');
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
