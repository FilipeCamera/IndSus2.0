const fieldValidate = (e: string) => {
  if (e === undefined || e === null || e.length === 0) {
    return {
      value: true,
      error: 'Campo Obrigatório',
    };
  }
  return {
    value: false,
    error: '',
  };
};

export default fieldValidate;
