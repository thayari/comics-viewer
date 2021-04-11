import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Controls extends Component {
  render() {
    const {
      plusBtnContents,
      minusBtnContents,
      btnClass,
      plusBtnClass,
      minusBtnClass,
      controlsClass,
      scale,
      minScale,
      maxScale,
      onClickPlus,
      onClickMinus,
      disableZoom
    } = this.props;

    const btnStyle = { width: 30, paddingTop: 5, marginBottom: 5 };
    const controlsStyle = controlsClass ? undefined : { position: 'absolute', right: 10, bottom: 10 };

    function plusHandler(e) {
      e.preventDefault();
      e.target.blur();
      if (disableZoom) return;
      onClickPlus();
    }

    function minusHandler(e) {
      e.preventDefault();
      e.target.blur();
      if (disableZoom) return;
      onClickMinus();
    }

    return (
      <div style={controlsStyle} className={controlsClass}>
        <div>
          <button
            ref={(node) => { this.plusNode = node; }}
            onClick={plusHandler}
            onTouchEnd={plusHandler}
            className={[
              btnClass ? btnClass : '',
              plusBtnClass ? plusBtnClass : '',
            ].join(' ')}
            type="button"
            style={(btnClass || plusBtnClass) ? undefined : btnStyle}
            disabled={disableZoom || scale >= maxScale}
          >
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 2V19.5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M19.25 10.75L1.75 10.75" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            {/* {plusBtnContents} */}
          </button>
        </div>
        <div>
          <button
            ref={(node) => { this.minusNode = node; }}
            onClick={minusHandler}
            onTouchEnd={minusHandler}
            className={[
              btnClass ? btnClass : '',
              minusBtnClass ? minusBtnClass : '',
            ].join(' ')}
            type="button"
            style={(btnClass || minusBtnClass) ? undefined : btnStyle}
            disabled={disableZoom || scale <= minScale}
          >
            <svg width="21" height="4" viewBox="0 0 21 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.25 2L1.75 2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            {/* {minusBtnContents} */}
          </button>
        </div>
      </div>
    );
  }
}

Controls.propTypes = {
  onClickPlus: PropTypes.func.isRequired,
  onClickMinus: PropTypes.func.isRequired,
  plusBtnContents: PropTypes.node,
  minusBtnContents: PropTypes.node,
  btnClass: PropTypes.string,
  plusBtnClass: PropTypes.string,
  minusBtnClass: PropTypes.string,
  controlsClass: PropTypes.string,
  scale: PropTypes.number,
  minScale: PropTypes.number,
  maxScale: PropTypes.number,
  disableZoom: PropTypes.bool
};

Controls.defaultProps = {
  plusBtnContents: '+',
  minusBtnContents: '-',
  disableZoom: false
};

export default Controls;
