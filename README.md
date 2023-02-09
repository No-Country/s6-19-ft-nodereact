# Personal Trainer Web Page

# Pagina Web para una personal trainer con el fin de publicitarse y vender productos

Esta es una pagina web que sirve como publicidad para una peroanal trainer, venta de ebooks y asesoramiento online

Equipo de trabajo / Team:

🟢Back-End: Mosquella Juan Manuel / Diego

🟢Front-End: Alexander / Ronny / Andres

🟢Design UX/UI: Natalia

End points de interes:

/api/auth/register  => require un username, email, y password, opcionalmente puede user una imagen si el cliente asi lo decide.
/api/auth/login  => require un email, y password, en caso de dar una respuesta con status 200 devuelve un token.
/api/auth/generateOTP?username=test1234  => require un username que sera enviado por query para identificar al email de que usuario dbe eenviar el codigo de verificacion, este codigo puede ser solicitado todas las veces que se requiera.
/api/auth/verifyOTP?username=test1234&code=252690 => requiere un username y el codigo de verificacion que seran enviados por query, si el codigo es correcto se redireccionara al usaurio a la pagina para reestablecer la contraseña.
/api/auth/reset-password => finalmente el usuario podra cambiar su contraseña, para esto debera enviar por body su username y la nueva contraseña. Este endpoint es de UNICO USO, si se equivoca debera repetir todo el proceso






