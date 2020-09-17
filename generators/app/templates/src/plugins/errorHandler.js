import Vue from 'vue';

const errorHandler = (err, vm, info) => {
  console.log({ err, vm, info });

  return err;
};

Vue.config.errorHandler = errorHandler;

export default errorHandler;
