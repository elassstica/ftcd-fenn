import './footer.css'
import Bruja from "../../fonts/bruja2.png";

function Footer() {
  return (
    <div class="footer">
      <marquee id="footer2"><img src={Bruja} className="bruja" alt="Witch"/> © Witches Be Trippin, Inc.</marquee>
    </div>
  );
}

export default Footer;
