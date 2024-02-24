import emailjs from "@emailjs/browser";

const sendEmail = (message: string) => {
  emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
  emailjs
    .send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      {
        to_email: import.meta.env.VITE_EMAIL_RECEIVER_ADDRESS,
        message
      }
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export { sendEmail };
