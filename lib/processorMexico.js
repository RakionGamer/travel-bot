import { createCanvas, loadImage, registerFont } from "./canvas.js";
import path from "path";

const robotoPath = path.join(process.cwd(), "fonts", "Roboto-SemiBold.ttf");
const childosPath = path.join(process.cwd(), "fonts", "ChildosFREEPERSONALUSE-Regular.otf");
const oswaldPath = path.join(process.cwd(), "fonts", "Oswald-Bold.ttf");
const contrailPath = path.join(process.cwd(), "fonts", "ContrailOne-Regular.ttf");

try {
  registerFont(robotoPath, { family: "Roboto SemiBold" });
  registerFont(childosPath, { family: "Childos" });
  registerFont(oswaldPath, { family: "Oswald-Bold" });
  registerFont(contrailPath, { family: "Contrail One" });
  registerFont(contrailPath, { family: "ContrailOne" });
} catch (err) {
  console.error("Error al registrar la fuente:", err);
}

export async function createImageWithRatesMexico(rates) {
  const imagePath = path.join(process.cwd(), "public", "11.png");
  const image = await loadImage(imagePath);
  const canvas = createCanvas(image.width, image.height);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(image, 0, 0);

  // Fecha y hora
  const now = new Date().toLocaleString("es-VE", {
    timeZone: "America/Caracas",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const timePart = new Date().toLocaleString("en-VE", {
    timeZone: "America/Caracas",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const timeText = `${timePart.replace(/\s+/g, "")} HORA VZLA`.toUpperCase();

  ctx.textAlign = "right";
  ctx.textBaseline = "middle";
  ctx.font = '32px "Contrail One", ContrailOne, sans-serif';
  ctx.fillStyle = "#ffffff";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 7;
  ctx.lineJoin = "round";

  const x = 750;
  const dateY = 505;
  const timeY = 545;

  // Renderizar Fecha
  ctx.strokeText(now, x, dateY);
  ctx.fillText(now, x, dateY);

  // Renderizar Hora
  ctx.strokeText(timeText, x, timeY);
  ctx.fillText(timeText, x, timeY);

  // Coordenadas de las tasas
  // México → Chile, Colombia, Ecuador, Argentina, Estados Unidos (EEUU), Brasil, Perú, España, Paraguay, Panamá
  const positions = {
    "Chile": [216, 612],
    "Colombia": [216, 680],
    "Ecuador": [216, 748],
    "Argentina": [216, 814],
    "EEUU": [216, 883],
    "Estados Unidos": [216, 850],

    "Brasil": [599, 612],
    "Peru": [599, 680],
    "Perú": [599, 680],
    "España": [599, 748],
    "Paraguay": [599, 814],
    "Panama": [599, 883],
    "Panamá": [599, 850],
  };

  // Configuración de las tasas
  ctx.textAlign = "center";
  ctx.font = '34px Childos, "Roboto SemiBold", sans-serif';
  ctx.fillStyle = "#000000";
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 6;
  ctx.lineJoin = "round";

  for (const [country, value] of Object.entries(rates)) {
    const pos = positions[country];
    if (pos) {
      const text = `${value}`;
      ctx.strokeText(text, pos[0], pos[1]);
      ctx.fillText(text, pos[0], pos[1]);
    }
  }

  return canvas.toBuffer("image/png");
}
