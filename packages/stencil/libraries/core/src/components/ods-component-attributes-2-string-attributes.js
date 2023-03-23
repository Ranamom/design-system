/**
 * convert some component attributes made of different properties into string properties.
 * Only number and string will be converted as string values.
 * Boolean are set in the result only if they are true.
 * Other values are ignored.
 * It is useful in order to place attributes on an html content
 * | DOM matrix    | -         | wanted                   | wanted                                             |
 * |---------------|-----------|--------------------------|----------------------------------------------------|
 * | -             | -         | false                    | true                                               |
 * | default value | false     | `-`                      | `attribute-name` or `attribute-name="true"`        |
 * | default value | undefined | `-`                      | `attribute-name` or `attribute-name="true"`        |
 * | default value | true      | `attribute-name="false"` | `-` or `attribute-name` or `attribute-name="true"` |
 *
 * @param attributes
 * @constructor
 */
export function OdsComponentAttributes2StringAttributes(attributes, defaultValues) {
  const parameters = {};
  Object.entries(attributes)
    .map(([name, value]) => {
    if (typeof value === "boolean") {
      if (value) {
        parameters[name] = undefined;
      }
      else if (!value && defaultValues[name]) {
        parameters[name] = `${value}`;
      }
    }
    else if (typeof value === "number") {
      parameters[name] = `${value}`;
    }
    else if (typeof value === "string") {
      parameters[name] = `${value}`;
    }
    else if (value) {
      console.warn(`your attribute ${name}=${value} cannot be set as DOM attribute. use setProperty instead`);
    }
  });
  return parameters;
}