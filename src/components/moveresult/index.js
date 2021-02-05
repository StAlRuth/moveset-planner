import { h, Component } from 'preact';

import listify from '../../utils/listify';
import learnDecoder from '../../utils/learnDecoder';

class MoveResult extends Component {
  constructor() {
    super();
  }

  renderMethod = (method, pokemon) => {
    let result = learnDecoder(method.learnCode);
    if (method.name.length !== 1 || method.name[0] !== pokemon) {
      result += ` as ${listify(method.name)}`;
    }
    if (method.sketch) {
      result = "via Sketch, obtained " + result;
    }
    return result + '.';
  }

  render = (props, state) => (
    <details open class="small-12">
      <summary>
        {this.props.name}
      </summary>
      <ul>
        {this.props.methods.map(item => (
          <li>{this.renderMethod(item, this.props.pokemon)}</li>
        ))}
      </ul>
    </details>
  );
}

export default MoveResult;
