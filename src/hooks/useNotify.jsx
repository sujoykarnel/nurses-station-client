import { Store } from "react-notifications-component";

const useNotify = () => {
  const notify = (notice) => {
    const { title, message, type } = notice;

    Store.addNotification({
      title,
      message,
      type,
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true,
      },
    });
  };

  return { notify };
};

export default useNotify;

// success
// danger
// info
// default
// warning
