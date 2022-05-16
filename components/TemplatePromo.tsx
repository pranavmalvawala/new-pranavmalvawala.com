import Button from "./Button";

const TemplatePromo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`container relative ${className}`}>
      <div className="bg-gray-50 rounded-xl mt-28 p-8 lg:p-12 shadow-lg">
        <h2 className="mb-5">Get a website just like this</h2>
        <p>
          Save hours and days of your time designing and coding. Instead, use
          my code and make it your own.
        </p>
        <Button
          target="_blank"
          className="mt-8"
          href="https://trishalim.gumroad.com/l/portfolio-website-template-for-software-developers"
        >
          Download template
        </Button>
      </div>
    </div>
  );
};

export default TemplatePromo;
