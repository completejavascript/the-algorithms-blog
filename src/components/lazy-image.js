import React from 'react';
import "./lazy-image.css";

export default class LazyImage extends React.Component {
  constructor(props) {
    super(props);
    this.realImgRef = null;
  }

  componentDidMount() {
    // Load real image
    const imgLoader = new Image();
    imgLoader.src = this.props.src;
    imgLoader.onload = () => {
      const ratioWH = imgLoader.width / imgLoader.height;

      this.imgElm.setAttribute(
        `src`,
        `${this.props.src}`
      );

      this.props.keepRatio && this.imgElm.setAttribute(
        `height`,
        `${this.props.width / ratioWH}`
      )

      this.imgElm.classList.add(`${this.props.effect}`);
    }
  };

  render() {
    const width = this.props.width || '100%';
    const height = this.props.height || '100%';

    return (
      <img
        src={this.props.placeHolder}
        width={width}
        height={height}
        ref={imgElm => this.imgElm = imgElm}
        className="lazy-image"
      />
    )
  }
}