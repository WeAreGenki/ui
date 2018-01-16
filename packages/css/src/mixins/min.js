/*
  MIN FUNCTION

  README:
    Compares input number values and outputs only the smallest value. Somewhat
    like the CSS min() function (CSS math functions level 4) but this will reduce
    all the passed values into a single value.

    There are a few things to keep in mind:

    1. You can't use mixins directly on a CSS property value so instead you need
    to pass in the CSS property name which this function then returns with the
    resulting smallest value. E.g. Don't do "margin-left: @mixin min 2px 4px;".

    2. Although you can pass in numbers with any CSS unit it's recommended to
    stick to px and rem OR to only use the same unit for all values. When you
    pass a rem value it's automatically converted to the equivalent px value.
    When you pass a number value with any other unit there is no conversion and
    the unit is simply removed.

    3. It's assumed that 1rem = 16px (typical browser default). If that's not
    what you want then pass remSize=sizeValue as the last mixin parameter. This
    "px" unit for this value is optional, however, it must be a px value.

    4. If multiple input values are equally as small, the last smallest value will
    be returned.

    5. Like with all mixins, make sure you have a comma after each input value
    passed into the mixin.

  USAGE:
    @mixin min <cssPropertyName> <value 1>, <value 2>, [<...value n>] [remSize=<remSize>];

    Example 1:
      .example {
        @mixin min margin-right, 1rem, 4px, 50px, 22rem, 10px;
      }

    Result 1:
      .example {
        margin-right: 4px;
      }

    Example 2 with custom rem size:
      .with-custom-rem {
        @mixin min top, 20px, 3rem, remSize=5px;
      }

    Result 2:
      .with-custom-rem {
        top: 3rem;
      }

*/

module.exports = (mixin, cssPropertyName, ...values) => {
  const lastValue = values.slice(-1)[0];
  const valIndex = lastValue.indexOf('remSize=');
  let remSize = 16;

  // set custom remSize
  if (valIndex === 0) {
    remSize = lastValue.slice(valIndex).replace('px', '');
    values.splice(-1, 1);
  }

  if (values.length < 2) {
    throw new Error('Expected at least 2 values to compare');
  }

  let minIndex = 0;

  function stripSizeUnit(size) {
    const withoutUnit = parseFloat(size);

    if (Number.isNaN(withoutUnit)) {
      throw new Error(`Couldn't parse ${size} as a number`);
    }

    return size.match(/rem$/)
      ? withoutUnit * remSize
      : withoutUnit;
  }

  values.forEach((value, index) => {
    if (index === 0) return;

    if (stripSizeUnit(values[index]) < stripSizeUnit(values[index - 1])) {
      minIndex = index;
    }
  });

  return {
    [cssPropertyName]: values[minIndex],
  };
};
