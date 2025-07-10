import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Nepalifood = () => {
  return (
    <Card className="w-80 shadow-lg">
      <CardHeader shadow={false} floated={false} className="h-60">
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
          alt="Momo"
          className="h-full w-full object-cover rounded-xl"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-semibold text-lg">
            Chicken Momo
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            Rs. 180
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75 text-sm"
        >
          Delicious steamed momo served with spicy tomato chutney.
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
export default Nepalifood