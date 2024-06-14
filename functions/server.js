const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  // Configurar transporte de correo electrónico
  const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "tecnologia.sistemas11n@gmail.com",
      pass: "mlmv jijj pcqm ifjh"
    },
  });

  // Verificar conexión con el servicio de correo electrónico
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  // Parsear los datos de la solicitud
  const { firstName, lastName, email, message, phone } = JSON.parse(event.body);
  const name = firstName + ' ' + lastName;

  // Configurar el correo electrónico a enviar
  const mail = {
    from: name,
    to: "tecnologia.sistemas11n@gmail.com",
    subject: "Contacto desde su Portfolio en React",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  try {
    // Enviar correo electrónico
    await contactEmail.sendMail(mail);
    return {
      statusCode: 200,
      body: JSON.stringify({ code: 200, status: "Message Sent" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ code: 500, error: error.message }),
    };
  }
};
