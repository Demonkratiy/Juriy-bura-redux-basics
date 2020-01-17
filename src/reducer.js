const reducer = (state=0, action) => {//важно если state - undefined, вернуть первоначальное initial значение (default)

  switch (action.type) {
    case 'INC':
      return state+1;
    case 'DEC':
      return state-1;
    case 'RND':
      return state+action.payload;
    default://важно в случаях, когда не известен action - вернуть неизменённый state
      return state;
  }
}

export default reducer;
