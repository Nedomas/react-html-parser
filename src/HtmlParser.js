import htmlparser2 from 'htmlparser2';
import processNodes from './processNodes';

/**
 * Parses a HTML string and returns a list of React components generated from it
 *
 * @param {String} html The HTML to convert into React component
 * @param {Object} options Options to pass
 * @returns {Array} List of top level React elements
 */
export default function HtmlParser(html, {
  decodeEntities = true,
  withStartIndices = false,
  withEndIndices = false,
  transform,
  preprocessNodes = nodes => nodes
}={}) {
  const nodes = preprocessNodes(htmlparser2.parseDOM(html, { 
    decodeEntities,
    withStartIndices,
    withEndIndices,
  }));
  return processNodes(nodes, transform);
}
