export function CustomDropdown({ values, onChange, children, ...props }) {
  function dropdownOnChange(event) {
    console.log("Value : ", event.target.value);
    onChange(event.target.value);
  }

  return (
    <select
      className="custom-dropdown"
      onChange={(event) => dropdownOnChange(event)}
    >
      {values.map((value) => {
        return <option value={value}>{value}</option>;
      })}
    </select>
  );
}
