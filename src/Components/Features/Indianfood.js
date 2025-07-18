import React from "react";
import Indfood1 from '../../images/Indfood1.jpg'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Indianfood = () => {
  return (
    <Card className="w-80 shadow-lg mt-52">
      <CardHeader shadow={false} floated={false} className="h-60">
        <img src={Indfood1}
          alt="Biryani"
          className="h-full w-full object-cover rounded-xl"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center h-auto justify-between">
          <Typography color="blue-gray" className="font-semibold text-lg">
            Chicken Biryani
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            Rs. 220
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75 text-sm"
        >
          Aromatic basmati rice cooked with spicy chicken and Indian herbs.
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

export default Indianfood;
