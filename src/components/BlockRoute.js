import React from 'react';

const cache = {}; // { [blockId: string]: Component }

export class BlockRoute extends React.Component {
  BlockComponent = undefined;

  state = {
    blockComponentAvailable: false,
    error: undefined
  };

  mountBlockComponent = async () => {
    try {
      const {
        match: { params }
      } = this.props;
      const blockId = params['0'];
      if (!blockId) {
        console.error('No block ID provided!');
        return this.setState({ error: 'No block ID provided!' });
      }
      const matches = /^\d{2}$/.exec(blockId);
      if (!(matches && matches[0])) {
        console.error('"Invalid block ID!"');
        return this.setState({ error: 'Invalid block ID!' });
      }
      const cachedBlock = cache[blockId];
      if (!cachedBlock) {
        const {
          default: Component
        } = await import(`./content/blocks/${blockId}.js`);
        this.BlockComponent = cache[blockId] = Component;
      } else {
        this.BlockComponent = cachedBlock;
      }
      return this.setState({ blockComponentAvailable: true, error: undefined });
    } catch (e) {
      this.setState({ error: "Couldn't load block." });
    }
  };

  async componentDidMount() {
    await this.mountBlockComponent();
  }

  async componentDidUpdate(prevProps = {}) {
    if (prevProps.match.params['0'] !== this.props.match.params['0']) {
      await this.mountBlockComponent();
    }
  }

  render() {
    const { BlockComponent, state } = this;
    const { blockComponentAvailable, error } = state;
    if (error) {
      return error;
    }
    if (blockComponentAvailable) {
      return <BlockComponent />;
    }
    return 'loading...';
  }
}
