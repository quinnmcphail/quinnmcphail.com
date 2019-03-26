import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { width as twWidth } from '../../tailwind'
import { hidden } from '../styles/utils'

const Wrapper = styled.svg`
  ${tw`absolute`};
  stroke: currentColor;
  ${props => props.hiddenMobile && hidden};
  color: ${props => props.stroke};
  width: ${props => props.svgWidth};
  fill: ${props => props.fill};
  left: ${props => props.left};
  top: ${props => props.top};
`

const icons = {
  triangle: {
    shape: (
      <polygon
        strokeWidth="1px"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="14.921,2.27 28.667,25.5 1.175,25.5 "
      />
    ),
    viewBox: '0 0 30 30',
  },
  circle: {
    shape: (
      <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z" />
    ),
    viewBox: '0 0 30 30',
  },
  arrowUp: {
    shape: (
      <>
        <path d="M28.74,20.81H1.26a1.26,1.26,0,0,1-1-2L14.16.5a1.25,1.25,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,18.8a1.25,1.25,0,0,1-1,2ZM3.81,18.29H26.22L15.16,3.37Z" />{' '}
        <path d="M28.74,42H1.26a1.28,1.28,0,0,1-1.13-.71A1.26,1.26,0,0,1,.26,40l13.9-18.29a1.28,1.28,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,40a1.26,1.26,0,0,1,.12,1.32A1.28,1.28,0,0,1,28.74,42ZM3.81,39.47H26.22L15.16,24.55Z" />
      </>
    ),
    viewBox: '0 0 30 42',
  },
  upDown: {
    shape: (
      <>
        <path d="M28.74,44.58a1.28,1.28,0,0,1-1-.51L15.16,27.13l-12.89,17a1.26,1.26,0,1,1-2-1.53l13.9-18.29a1.34,1.34,0,0,1,1-.5,1.24,1.24,0,0,1,1,.51L29.75,42.56a1.27,1.27,0,0,1-1,2Z" />
        <path d="M14.83,20.82h0a1.28,1.28,0,0,1-1-.52L.25,2a1.27,1.27,0,0,1,2-1.51L14.84,17.45,27.73.5a1.26,1.26,0,0,1,2,1.53L15.84,20.32A1.28,1.28,0,0,1,14.83,20.82Z" />
      </>
    ),
    viewBox: '0 0 30 44.58',
  },
  box: {
    shape: (
      <path d="M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z" />
    ),
    viewBox: '0 0 30 30',
  },
  hexa: {
    shape: (
      <polygon
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "
      />
    ),
    viewBox: '0 0 30 30',
  },
  cloud: {
    shape: (
      <path d="M17.2884615,21.341453 C19.2688034,21.341453 20.9965812,20.2371795 21.9166666,18.5978632 C22.7162393,18.9551282 23.601282,19.1538461 24.5324786,19.1538461 C28.1042735,19.1538461 31,16.232906 31,12.6299145 C31,9.02649572 28.1042735,6.10555556 24.5324786,6.10555556 C24.0965812,6.10555556 23.6705128,6.14914529 23.258547,6.23247862 C22.4482906,4.78717947 20.9042735,3.81068376 19.1320513,3.81068376 C18.3901709,3.81068376 17.6884615,3.98205129 17.0636752,4.28675214 C16.2423077,2.35470085 14.3286325,1 12.0982906,1 C9.77564103,1 7.79615385,2.46965812 7.03632477,4.53076923 C6.7042735,4.4602564 6.36025641,4.42350427 6.00726497,4.42350427 C3.24188034,4.42350427 1,6.68846154 1,9.48290597 C1,11.3555555 2.00726496,12.9905983 3.50384615,13.8653846 C3.19572649,14.574359 3.02435897,15.3568376 3.02435897,16.1794872 C3.02435897,19.3931624 5.63333334,21.9982906 8.85128204,21.9982906 C10.7405983,21.9982906 12.4196581,21.1 13.484188,19.7081196 C14.4517094,20.7162393 15.7987179,21.341453 17.2884615,21.341453 Z" />
    ),
    viewBox: '0 0 32 23',
  },
  bolt: {
    shape: (
      <path d="M23.5145081,1 L12.0602375,1 C10.3658187,1 8.87473026,2.01665124 8.26473951,3.57551648 L1.14818082,21.9430156 C0.605966827,23.2985506 1.62261807,24.7218623 3.04592981,24.7218623 L14.7035307,24.7218623 L10.3658187,39.9038542 C9.95915825,41.3271659 11.7213537,42.2760404 12.6702282,41.1238357 L30.4955133,19.9774898 C31.6477181,18.6897316 30.6988436,16.5886524 28.9366481,16.5886524 L20.1256707,16.5886524 L27.8522201,4.11773047 C28.6655411,2.76219549 27.7166666,1 26.0900246,1 L23.5145081,1 Z" />
    ),
    viewBox: '0 0 32 43',
  },
}

const SVG = ({ stroke, fill, width, icon, left, top, hiddenMobile }) => (
  <Wrapper
    viewBox={icons[icon].viewBox}
    stroke={stroke}
    fill={fill}
    svgWidth={twWidth[`${width}`]}
    left={left}
    top={top}
    hiddenMobile={hiddenMobile}
  >
    {icons[icon].shape}
  </Wrapper>
)

export default SVG

SVG.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.number,
  icon: PropTypes.oneOf(['triangle', 'circle', 'arrowUp', 'upDown', 'box', 'hexa', 'cloud', 'bolt']).isRequired,
  left: PropTypes.string,
  top: PropTypes.string,
  hiddenMobile: PropTypes.bool,
}

SVG.defaultProps = {
  stroke: 'transparent',
  width: 8,
  fill: 'none',
  left: '0%',
  top: '0%',
  hiddenMobile: false,
}
