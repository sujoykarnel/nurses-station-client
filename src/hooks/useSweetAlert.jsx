import Swal from "sweetalert2";

const useSweetAlert = () => {
  const successAlert = (title) => {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: title,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const warningAlert = (title, text) => {
    Swal.fire({
      title,
      text,
      icon: "warning",
    });
  };

  const errorAlert = (title, text) => {
    Swal.fire({
      title,
      text,
      icon: "error",
    });
  };

  return { successAlert, warningAlert, errorAlert };
};

export default useSweetAlert;
