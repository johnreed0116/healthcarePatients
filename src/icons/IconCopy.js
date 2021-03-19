import React from 'react';
import PropTypes from 'prop-types';

/**
 * @typedef {object} IconCopyProps
 * @property {string} [key] The key to identify this component.
 * @property {number} [width] The width in pixels of the icon.
 * @property {number} [height] The height in pixels of the icon.
 * @property {(e: React.MouseEvent) => void} [onClick] Click handler.
 * @property {string} [className] The class name for the SVG element.
 *
 * @extends {React.Component<IconCopyProps>}
 */
const IconCopy = props => {
    return <svg onClick={e => props.onClick && props.onClick(e)} viewBox="0 0 512 512" width={props.width || 20} height={props.height || props.width || 20} xmlns="http://www.w3.org/2000/svg" className={ props.className }>
        <path fill="currentColor" d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"/>
    </svg>;
}

IconCopy.propTypes = {
    key: PropTypes.string,
    onClick: PropTypes.func,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    className: PropTypes.string
};

export default IconCopy;