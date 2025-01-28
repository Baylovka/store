import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <section className="footer-top">
          <div className="footer-top__container">
            <ul className="footer-top__list">
              <li className="footer-top__item">
                <article className="footer-top__article">
                  <figure className="footer-top__image-container">
                    <Image src="/garden-care.webp" alt="plant" width={61} height={93} className="footer-top__image"></Image>
                  </figure>
                  <div className="footer-top__content">
                    <h3 className="footer__title">Garden Care</h3>
                    <p className="footer-top__description">
                      We are an online plant shop offering a wide range of cheap and trendy plants.
                    </p>
                  </div>
                </article>
              </li>
              <li className="footer-top__item">
                <article className="footer-top__article">
                  <figure className="footer-top__image-container">
                    <div className="footer-top__image-container">
                      <Image src="/plant-renovation.webp" alt="plant" width={68} height={87} className="footer-top__image"></Image>
                    </div>
                  </figure>
                  <div className="footer-top__content">
                    <h3 className="footer__title">Plant Renovation</h3>
                    <p className="footer-top__description">
                      We are an online plant shop offering a wide range of cheap and trendy plants.
                    </p>
                  </div>
                </article>
              </li>
              <li className="footer-top__item">
                <article className="footer-top__article">
                  <figure className="footer-top__image-container">
                    <div className="footer-top__image-container">
                      <Image src="/watering-garden.webp" alt="plant" width={83} height={85} className="footer-top__image"></Image>
                    </div>
                  </figure>
                  <div className="footer-top__content">
                    <h3 className="footer__title">Watering Graden</h3>
                    <p className="footer-top__description">
                      We are an online plant shop offering a wide range of cheap and trendy plants.
                    </p>
                  </div>
                </article>
              </li>
              <li className="footer-top__item">
                <article className="footer-top__article">
                  <h3 className="footer__title">Would you like to join newsletters?</h3>
                  <form className="footer-top__form">
                    <input type="email" placeholder="enter your email address..." className="footer-top__input" />
                    <button type="submit" className="footer-top__button">Join</button>
                  </form>
                  <p className="footer-top__newsletter-description">
                    We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours!
                  </p>
                </article>
              </li>
            </ul>
          </div>
        </section>

        <section className="footer-middle">
          <div className="footer-middle__container">
            <ul className="footer-middle__list">
              <li className="footer-middle__item">
                <Link href={'/'}>
                  <Image src="/logo.svg" width={150} height={34} alt="logo" />
                </Link>
              </li>
              <li className="footer-middle__item">
                <Icon className="footer-middle__icon" id="location" width={16} height={16}/>
                <Link href={"https://maps.app.goo.gl/DxR4wxRmx3ciJMbd9"} target="blank" className="footer-middle__link link">
                  70 West Buckingham Ave.Farmingdale, NY 11735
                </Link>
              </li>
              <li className="footer-middle__item">
                <Icon className="footer-middle__icon footer-middle__icon--none" id="mail" width={16} height={16}/>
                <Link href={"mailto:contact@greenshop.com"} className="footer-middle__link link">
                  contact@greenshop.com
                </Link>
              </li>
              <li className="footer-middle__item">
                <Icon className="footer-middle__icon footer-middle__icon--none" id="phone" width={16} height={16}/>
                <Link href={"tel:+8801911717490"} className="footer-middle__link link">
                  +88 01911 717 490
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <section className="footer-bottom">
          <div className="footer-bottom__container">
            <ul className="footer-bottom__list">
              <li className="footer-bottom__item">
                <h3 className="footer__title">My Account</h3>
                <ul className="footer-bottom__menu">
                  <li><Link href={'/'} className="link footer-bottom__link">My Account</Link></li>
                  <li><Link href={'/'} className="link footer-bottom__link">Our stores</Link></li>
                  <li><Link href={'/'} className="link footer-bottom__link">Contact us</Link></li>
                  <li><Link href={'/'} className="link footer-bottom__link">Career</Link></li>
                  <li><Link href={'/'} className="link footer-bottom__link">Specials</Link></li>
                </ul>
              </li>
              <li className="footer-bottom__item">
                <h3 className="footer__title">Help & Guide</h3>
                <ul className="footer-bottom__menu">
                  <li><Link href={'/'} className="link footer-bottom__link">Help Center</Link></li>
                  <li><Link href={'/'} className="link footer-bottom__link">How to Buy</Link></li>
                  <li><Link href={'/'} className="link footer-bottom__link">Shipping & Delivery</Link></li>
                  <li><Link href={'/'} className="link footer-bottom__link">Product Policy</Link></li>
                  <li><Link href={'/'} className="link footer-bottom__link">How to Return</Link></li>
                </ul>
              </li>
              <li className="footer-bottom__item">
                <h3 className="footer__title">Categories</h3>
                <ul className="footer-bottom__menu">
                  <li><Link href={'/'} className="link footer-bottom__link">House Plants</Link></li>
                  <li><Link href={'/'} className="link footer-bottom__link">Potter Plants</Link></li>
                  <li><Link href={'/'} className="link footer-bottom__link">Seeds</Link></li>
                  <li><Link href={'/'} className="link footer-bottom__link">Small Plants</Link></li>
                  <li><Link href={'/'} className="link footer-bottom__link">Accessories</Link></li>
                </ul>
              </li>
              <li className="footer-bottom__item">
                <div className="footer-bottom__social-payment-container">
                  <div>
                    <h3 className="footer__title">Social Media</h3>
                    <div className="footer-bottom__social-media">
                      <Link href={'/'}>
                        <Icon id="facebook" width={16} height={16} />
                      </Link>
                      <Link href={'/'}>
                        <Icon id="instagram" width={16} height={16} />
                      </Link>
                      <Link href={'/'}>
                        <Icon id="twitter" width={16} height={16} />
                      </Link>
                      <Link href={'/'}>
                        <Icon id="linkedin" width={16} height={16} />
                      </Link>
                      <Link href={'/'}>
                        <Icon id="union" width={16} height={16} />
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h3 className="footer__title">We accept</h3>
                    <div className="footer-bottom__payment">
                      <Image src={'/payment-paypal.webp'} alt="paypal" width={128} height={33} />
                      <Image src={'/payment-mastercard.webp'} alt="mastercard" width={128} height={80} />
                      <Image src={'/payment-visa.webp'} alt="visa" width={116} height={38} />
                      <Image src={'/payment-american-express.webp'} alt="american express" width={128} height={68} />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <p className="footer__copyright">&copy; 2025 GreenShop. All Rights Reserved.</p>
      </div>
    </footer>
  );
}