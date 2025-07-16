import React from "react";
import Chifood from '../../images/Chifood.jpg'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Chinesefood = () => {
  return (
    <Card className="w-80 shadow-lg mt-52">
      <CardHeader shadow={false} floated={false} className="h-60">
        <img
          src={Chifood}
          alt="Fried Rice"
          className="h-full w-full object-cover rounded-xl"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-semibold text-lg">
            Chicken Fried Rice
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            Rs. 200
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75 text-sm"
        >
          Stir-fried rice with chicken, vegetables, and Chinese sauces.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          fullWidth
          className="bg-red-500 text-white hover:bg-red-600 transition-transform hover:scale-105"
        >
          Order Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Chinesefood;
