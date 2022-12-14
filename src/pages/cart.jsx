import { Container } from "@mantine/core";
import { AppCart } from "../components/cart/app-cart";
import { FooterSocial } from "../components/footer";
import { HeaderSearch } from "../components/header";

const Cart = ({ items, setItems }) => {
  return (
    <div>
      <HeaderSearch items={items} setItems={setItems} />

      <Container
        style={{
          minHeight: "calc(100vh - 70px - 70px)",
        }}
      >
        <AppCart items={items} setItems={setItems} />
      </Container>
      <FooterSocial />
    </div>
  );
};
export default Cart;
