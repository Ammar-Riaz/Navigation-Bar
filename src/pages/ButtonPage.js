import Button from "../componenets/Button";
function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary rounded>
          Click ME!
        </Button>
      </div>
      <div>
        <Button secondry rounded>
          Buy Now
        </Button>
      </div>
      <div>
        <Button success rounded>
          See Deal
        </Button>
      </div>
      <div>
        <Button warning rounded>
          Login
        </Button>
      </div>
      <div>
        <Button danger rounded>
          Log Out
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
