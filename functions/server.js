const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "tecnologia.sistemas11n@gmail.com",
      pass: "ohtj xect nkpb htrp"
    },
  });

  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  const data = JSON.parse(event.body);
  const { firstName, lastName, email, message, phone } = data;

  const name = firstName + lastName;

  const mail = {
    from: name,
    to: "tecnologia.sistemas11n@gmail.com",
    subject: "Contacto desde su Portfolio en React",
    html: `<p>Message: ${message}</p>
           <p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>`,
  };

  try {
    await contactEmail.sendMail(mail);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Message Sent" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
