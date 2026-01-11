// Mock for d3 library used in Jest tests
// This provides minimal implementations of d3 functions used in IndicatorCharts

// Create a chainable selection object that supports all d3 selection methods
const createMockSelection = () => {
  const selection = {
    selectAll: (selector) => {
      const subSelection = {
        remove: () => selection,
        data: (data) => ({
          enter: () => ({
            append: (tag) => createMockSelection(),
          }),
          attr: () => subSelection,
          style: () => subSelection,
        }),
        attr: (name, value) => {
          if (value === undefined) return '';
          return subSelection;
        },
        style: (name, value) => {
          if (value === undefined) return '';
          return subSelection;
        },
        text: (value) => {
          if (value === undefined) return '';
          return subSelection;
        },
      };
      return subSelection;
    },
    append: (tag) => createMockSelection(),
    attr: (name, value) => {
      if (value === undefined) return '';
      return selection;
    },
    style: (name, value) => {
      if (value === undefined) return '';
      return selection;
    },
    text: (value) => {
      if (value === undefined) return '';
      return selection;
    },
    call: (fn) => {
      if (typeof fn === 'function') {
        fn(selection);
      }
      return selection;
    },
    datum: (data) => selection,
  };
  return selection;
};

const createMockScale = () => {
  const scale = (value) => value;
  scale.domain = () => scale;
  scale.range = () => scale;
  scale.nice = () => scale;
  scale.tickFormat = () => scale;
  scale.ticks = () => scale;
  scale.tickSize = () => scale;
  return scale;
};

const createMockAxis = () => {
  const axis = (selection) => {};
  axis.tickFormat = () => axis;
  axis.ticks = () => axis;
  axis.tickSize = () => axis;
  return axis;
};

const createMockLine = () => {
  const line = (data) => '';
  line.x = () => line;
  line.y = () => line;
  line.curve = () => line;
  return line;
};

module.exports = {
  select: (selector) => createMockSelection(),
  scaleLinear: () => createMockScale(),
  extent: (array, accessor) => {
    if (!array || array.length === 0) return [0, 0];
    const values = accessor ? array.map(accessor) : array;
    return [Math.min(...values), Math.max(...values)];
  },
  min: (array, accessor) => {
    if (!array || array.length === 0) return 0;
    const values = accessor ? array.map(accessor) : array;
    return Math.min(...values);
  },
  max: (array, accessor) => {
    if (!array || array.length === 0) return 0;
    const values = accessor ? array.map(accessor) : array;
    return Math.max(...values);
  },
  line: () => createMockLine(),
  curveMonotoneX: {},
  axisBottom: () => createMockAxis(),
  axisLeft: () => createMockAxis(),
};
