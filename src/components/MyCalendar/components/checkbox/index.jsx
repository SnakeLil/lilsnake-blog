import { useCallback, useState } from 'react';
import './index.scss';

// interface CheckboxProps {
//   onChange: (value: boolean) => void;
//   checked: boolean;
// }

function Checkbox(props) {
  const [checked, setShecked] = useState(props.checked);

  const checkedChange = useCallback(
    (event) => {
      const {
        target: { checked },
      } = event;

      setShecked(checked);

      props.onChange(checked);
    },
    []
  );

  return (
    <div className='checkbox__container'>
      <input
        type="checkbox"
        className='checkbox'
        checked={checked}
        onChange={checkedChange}
      />
      <div className='knobs'></div>
      <div className='layer'></div>
    </div>
  );
}

Checkbox.defaultProps = {
  checked: false,
};

export default Checkbox;
