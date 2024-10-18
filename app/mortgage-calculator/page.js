import BuyingHouse from "@/components/BuyingHouse";
import DtiCalculator from "@/components/DtiCalculator";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MoreResources from "@/components/MoreResources";
import MortgageCalculator from "@/components/MortgageCalculator";
import MortgageCalculatorFeatures from "@/components/MortgageCalculatorFeatures";
import MortgageFormula from "@/components/MortgageFormula";
import MortgageInfo from "@/components/MortgageInfo";
import PaymentBreakdown from "@/components/PaymentBreakdown";
import PropertyTaxCalculator from "@/components/PropertyTaxCalculator";
import ReduceMortgagePayments from "@/components/ReduceMortgagePayments";


export default function MortgageCalculatorPage() {
  return (
    <>
    <Header/>
      <MortgageCalculator/>
      <PaymentBreakdown/>
      <MortgageInfo/>
      <DtiCalculator/>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <MortgageFormula />
    </div>
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <PropertyTaxCalculator />
    </div>
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <MortgageCalculatorFeatures />
    </div>
    <ReduceMortgagePayments/>
    <BuyingHouse/>
    <MoreResources/>
    <Footer/>
    </>
  );
}
