import { API } from '../../constants';

const Gallery = ({ gallery }) => {
  let galleryTypeComponent = null;
  if (gallery.length === 1) {
    galleryTypeComponent = (
      <MediaContent
        gallery={gallery}
        number={0}
        classes="block max-h-[500px] w-full rounded-lg object-cover object-center"
      />
    );
  } else if (gallery.length === 2) {
    galleryTypeComponent = (
      <div className="flex flex-wrap">
        {gallery.map((item, index) => (
          <div className="w-1/2" key={index}>
            <MediaContent
              gallery={gallery}
              number={index}
              classes="block h-full w-full rounded-lg object-cover object-center"
            />
          </div>
        ))}
      </div>
    );
  } else if (gallery.length >= 3) {
    galleryTypeComponent = <ThreeImages gallery={gallery} />;
  }
  return <>{galleryTypeComponent}</>;
};

export default Gallery;

const ThreeImages = ({ gallery }) => {
  return (
    <div className="container max-h-[500px]">
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex w-full flex-wrap">
          <div className="w-full p-1 md:p-2">
            <MediaContent
              gallery={gallery}
              number={0}
              classes="block max-h-[250px] w-full rounded-lg object-cover object-center"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <MediaContent
              gallery={gallery}
              number={1}
              classes="block max-h-[200px] h-full w-full rounded-lg object-cover object-center"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <div className="relative">
              {/* Add a div for the blur effect */}
              {gallery.length > 3 && (
                <div className="absolute inset-0 bg-gray-900 opacity-50 rounded-lg"></div>
              )}

              {/* Add the image */}
              <MediaContent
                gallery={gallery}
                number={2}
                classes="block max-h-[200px] h-full w-full rounded-lg object-cover object-center"
              />
              {/* Add the additional photos number at the center */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-white font-bold text-center p-2">
                  {`+${gallery.length - 3}`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MediaContent = ({ gallery, number, classes }) => {
  // for now we will only have images
  if (!gallery[number]?.image) return;
  const imageBaseUrl = gallery[number].image.startsWith('/')
    ? API.IMAGE_URL.slice(0, -1)
    : API.IMAGE_URL;
  return (
    <img
      alt="gallery"
      className={classes}
      src={`${imageBaseUrl}${gallery[number].image}`}
      onError={(e) => {
        e.target.style.display = 'none';
      }}
    />
  );
};
