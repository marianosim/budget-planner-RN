export const UPDATE_FORM = 'UPDATE_FORM';

const validateInput = ({ name, value }) => {
  let hasError = false;
  let error = '';

  switch (name) {
    case 'title':
      if (value.trim() === '') {
        hasError = true;
        error = 'Required';
      } else {
        hasError = false;
        error = '';
      }
      break;
    case 'amount':
      if (value.trim() === '') {
        hasError = true;
        error = 'Required';
      } else if (isNaN(value.trim())) {
        hasError = true;
        error = 'Only numbers';
      } else {
        hasError = false;
        error = '';
      }
      break;
    default:
      break;
  }
  return { hasError, error };
};

export const onInputChange = ({ name, value, dispatch, formState }) => {
  const { hasError, error } = validateInput({ name, value });
  let isFormValid = true;

  for (const key in formState) {
    const item = formState[key];
    if (key !== name && hasError) {
      isFormValid = false;
      break;
    } else if (key !== name && item.hasError) {
      isFormValid = false;
      break;
    }
  }
  dispatch({
    type: UPDATE_FORM,
    data: {
      name,
      value,
      hasError,
      error,
      touched: true,
      isFormValid,
    },
  });
};
