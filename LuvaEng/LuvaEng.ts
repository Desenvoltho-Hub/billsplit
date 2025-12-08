//=========================================
//! LUVA ENGINE ⚙️
//=========================================
const luvaEng = () => {
  //=========================================
  //! LISTENERS
  //=========================================
  const listener: ((v: string) => void)[] = [];
  //=========================================
  //! GETTERS E SETTERS
  //=========================================
  //?Getter e setter principais

  let input: string;
  const get = () => {
    return input;
  };
  const set = (novoValor: string) => {
    input = novoValor;
    listener.forEach((v) => v(input));
    //=========================================
    //! PORTEIRO
    //=========================================
    switch (input) {
      default:
        break;
    }
  };

  //=========================================
  //! SUBSCRIBES
  //=========================================
  const subscribes = (fn:(v: string) => void) => {
    listener.push(fn)
    const index = listener.indexOf(fn)
    return () => {
        if(index > -1){
            listener.splice(index, 1)
        }
    }
  }
  //=======================================
  return {
    get,
    set,
  };
};
