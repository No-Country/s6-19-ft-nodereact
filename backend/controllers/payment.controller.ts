// import { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";
import mercadopago from "../config/mercadopago.config";
import { Response, Request } from "express";

const createPayment = async (req: Request, res: Response) => {
  try {
    let preference: any = {
      back_urls: {
        failure: "http://localhost:3000/failure",
        pending: "http://localhost:3000",
        success: "https://fit-commerce-api.onrender.com/success",
      },
      items: [
        {
          title: "Dummy Title",
          description: "Dummy description",
          picture_url: "http://www.myapp.com/myimage.jpg",
          category_id: "car_electronics",
          quantity: 1,
          currency_id: "ARS",
          unit_price: 10,
        },
      ],
      notification_url: `https://fit-commerce-api.onrender`,
    };

    const response = await mercadopago.preferences.create(preference);

    res.status(200).send(response);
  } catch (error) {}
};

export { createPayment };
