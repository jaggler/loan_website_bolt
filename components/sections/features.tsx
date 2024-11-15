import { Card } from "@/components/ui/card";
import { Calculator, PiggyBank, Building2, Users } from "lucide-react";
import Image from "next/image";

export function Features() {
  return (
    <>
      <Card className="bento-item">
        <Calculator className="mb-4 h-8 w-8 text-teal-700" />
        <h3 className="mb-2 text-xl font-semibold text-teal-800">
          Savings Calculator
        </h3>
        <p className="text-teal-700">Plan your financial growth</p>
      </Card>

      <Card className="bento-item">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-sm text-teal-700 opacity-70">Total Members</p>
            <p className="text-2xl font-bold text-teal-800">10,000+</p>
          </div>
          <div>
            <p className="text-sm text-teal-700 opacity-70">Total Savings</p>
            <p className="text-2xl font-bold text-teal-800">$25M+</p>
          </div>
        </div>
      </Card>

      <Card className="bento-item bento-item-tall">
        <h3 className="mb-6 text-xl font-semibold text-teal-800">Our Services</h3>
        <div className="flex flex-col gap-4">
          {[
            { icon: PiggyBank, text: "Savings Accounts" },
            { icon: Building2, text: "Business Loans" },
            { icon: Users, text: "Group Savings" },
          ].map((service, i) => (
            <div key={i} className="flex items-center gap-3 text-teal-700">
              <service.icon className="h-5 w-5" />
              <span>{service.text}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card className="bento-item bento-item-wide">
        <div className="flex gap-6">
          <Image
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6"
            alt="Member"
            width={100}
            height={100}
            className="rounded-full"
          />
          <div>
            <h3 className="mb-2 text-xl font-semibold text-teal-800">
              Member Success Story
            </h3>
            <p className="text-teal-700 opacity-90">
              "Thanks to Macho Co-operative, I was able to start my dream business."
            </p>
            <p className="mt-2 font-semibold text-teal-800">- John Doe</p>
          </div>
        </div>
      </Card>
    </>
  );
}