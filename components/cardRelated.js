import {
  MDBCard,
  MDBCardHeader,
  MDBCardFooter,
  MDBCol,
  MDBRow,
  MDBCardImage,
} from "mdbreact";
import { priceFormatted } from "./helpers";
import Link from "next/link";

export const CardRelated = ({ properties }) => (
  <MDBRow>
    {properties &&
      properties.map((property) => (
        <MDBCol className="mb-3" md="4" lg="4" key={property._id}>
          <MDBCard>
            <MDBCardHeader>{property.title}</MDBCardHeader>
            <Link href={`/property/${property.slug}`}>
              <a>
                <MDBCardImage
                  src={property.pictures[0]}
                  className="globalImg"
                  hover
                  waves
                />
              </a>
            </Link>
            <MDBCardFooter>
              <div className="globalColor">
                {priceFormatted(property.price)}
              </div>
              <p>
                <small>{property.city}, Monde</small>
              </p>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      ))}
  </MDBRow>
);
