export const FORMATS = Object.freeze({
  AZTEC: 'aztec',
  CODE_128: 'code_128',
  CODE_39: 'code_39',
  CODE_93: 'code_93',
  CODABAR: 'codabar',
  DATA_MATRIX: 'data_matrix',
  EAN_13: 'ean_13',
  EAN_8: 'ean_8',
  ITF: 'itf',
  PDF417: 'pdf417',
  QR_CODE: 'qr_code',
  UPC_A: 'upc_a',
  UPC_E: 'upc_e',
  UNKNOWN: 'unknown',
});

export default class Detector {
  #barcodeDetector

  #supportedFormats

  #initPromise

  static get supported() {
    return 'BarcodeDetector' in window;
  }

  get isReady() {
    return this.#initPromise;
  }

  get supportedFormats() {
    return this.#supportedFormats;
  }

  constructor() {
    this.#initPromise = this.#init();
  }

  async detect(videoElement) {
    return new Promise((resolve) => {
      if (!this.#barcodeDetector) {
        resolve([]);
        return;
      }
      const loop = () => {
        this.#barcodeDetector.detect(videoElement).then((barcodes) => {
          // resolve(barcodes); // TEMP- For dev
          if (barcodes.length > 0) {
            resolve(barcodes);
          } else {
            requestAnimationFrame(loop);
          }
        }).catch((err) => {
          console.log('Error', err.message);
        });
      };
      loop();
    });
  }

  #init = async () => {
    this.#supportedFormats = await window.BarcodeDetector.getSupportedFormats();
    this.#barcodeDetector = new window.BarcodeDetector({
      formats: this.#supportedFormats,
    });
  }
}
