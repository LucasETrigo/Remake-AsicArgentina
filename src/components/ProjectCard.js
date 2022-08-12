import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, price, hashrate, consumo, garantia, voltaje, algoritmo, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <h3>{`Precio: ${price}`}</h3> <br />
          <span>{`Hashrate: ${hashrate}`}</span> <br />
          <span>{`Consumo Electrico: ${consumo}`}</span> <br />
          <span>{`Garantia: ${garantia}`}</span> <br />
          <span>{`Voltaje: ${voltaje}`}</span> <br />
          <span>{`Algoritmo: ${algoritmo}`}</span> <br />
        </div>
      </div>
    </Col>
  )
}
