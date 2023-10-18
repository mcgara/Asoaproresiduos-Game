import _BootstrapStyleSheet from 'react-native-bootstrap-styles';

export class BootstrapStyleSheet extends _BootstrapStyleSheet {
  constructor (constants, classes) {
    super(constants, classes);
  }
}

export const bootstrap = new BootstrapStyleSheet();
export const constants = { ...bootstrap.constants };
export const styles = { ...bootstrap.styles };
export const bss = bootstrap;
export const c = constants;
export const s = styles;
export default BootstrapStyleSheet;
