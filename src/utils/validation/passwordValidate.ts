const fieldPass = (value: string, min: number) => {
  if (value.length < min) {
    return {
      value: false,
      error:
        value.length === 0
          ? 'Campo Obrigatório'
          : 'A senha precisa ter no mínimo 6 caracteres',
    };
  }
  return {value: true, error: ''};
};

const equalPass = (value: string, equalValue: string) => {
  if (value !== equalValue) {
    return {
      value: false,
      error: 'Senha Incorreta',
    };
  }
  return {
    value: true,
    error: '',
  };
};

export {fieldPass, equalPass};
