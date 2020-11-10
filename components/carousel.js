import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
} from "mdbreact";

export const Carousel = () => {
  return (
    <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={false}
      className="z-depth-1 carouselMain"
      slide
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100 carouselItems"
              src="https://res.cloudinary.com/beloved/image/upload/v1593635578/Agency/z23ok1wvc3sdkenitunx.jpg"
              alt="First slide"
            />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100 carouselItems"
              src="https://res.cloudinary.com/beloved/image/upload/v1594004282/Assets/asset_eocidz.jpg"
              alt="Second slide"
            />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100 carouselItems"
              src="https://res.cloudinary.com/beloved/image/upload/v1594004148/Assets/Apt-Premium2-4-HD-15_m3ztht.jpg"
              alt="Third slide"
            />
          </MDBView>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
};
