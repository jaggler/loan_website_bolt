import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function Hero() {
  return (
    <Card className="bento-item bento-item-large">
      <h1 className="mb-6 text-4xl font-bold text-teal-800">
        Empowering Your Financial Future
      </h1>
      <p className="mb-8 text-lg text-teal-700 opacity-90">
        Join our community of successful savers and investors. Start your journey to financial freedom today.
      </p>
      <div className="flex gap-4">
        <Button className="bg-teal-700 hover:bg-teal-800 text-white">
          Get Started
        </Button>
        <Button variant="outline" className="text-teal-700 border-teal-700">
          Learn More
        </Button>
      </div>
    </Card>
  );
}