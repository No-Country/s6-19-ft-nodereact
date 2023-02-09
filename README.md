<h3 align="center">Pagina web para publicitar los servicios y productos de una personal trainer</h3>


<p align="left">
</p>

Equipo de trabajo / Team:

🟢Back-End: Mosquella Juan Manuel / Diego Silva Cordoba

🟢Front-End: Alexander Paul Castañeda Salinas / Ronny / Andres Betancur

🟢Design UX/UI: Natali Leones

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>  <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://redux.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/> </a> <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a></p>



End points de interes:

/api/auth/register  => require un username, email, y password, opcionalmente puede user una imagen si el cliente asi lo decide.
<br>
<br>
/api/auth/login  => require un email, y password, en caso de dar una respuesta con status 200 devuelve un token.
<br>
<br>
/api/auth/generateOTP?username=test1234  => require un username que sera enviado por query para identificar al email de que usuario dbe eenviar el codigo de verificacion, este codigo puede ser solicitado todas las veces que se requiera.
<br>
<br>
/api/auth/verifyOTP?username=test1234&code=252690 => requiere un username y el codigo de verificacion que seran enviados por query, si el codigo es correcto se redireccionara al usaurio a la pagina para reestablecer la contraseña.
<br>
<br>
/api/auth/reset-password => finalmente el usuario podra cambiar su contraseña, para esto debera enviar por body su username y la nueva contraseña. Este endpoint es de UNICO USO, si se equivoca debera repetir todo el proceso






