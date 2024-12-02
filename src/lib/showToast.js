import { toast } from 'react-toastify';

const Toast = (toastType, message) => {
  console.log(toastType, message);
  if (toastType == 'success') {
    toast.success(message);
  } else if (toastType === 'error') {
    toast.error(message);
  }
};

export default Toast;
