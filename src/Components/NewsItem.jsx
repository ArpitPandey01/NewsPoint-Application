import image from "../assets/images.jpeg";
function NewsItem({ title, description, src, url }) {
  const defaultDescription =
    "Unfortunately, we couldn't load the news details at this time. For full coverage and in-depth insights, please click 'Read More' to explore the complete article. Stay updated with the latest happenings and never miss an important story. Your source for reliable news is just a click away!";

  return (
    <>
      <div
        className="card bg-dark text-light mb-3 flex d-inline-block my-3 mx-3 px-2 py-2"
        style={{ maxWidth: "345px" }}
      >
        <img
          src={src ? src : image}
          style={{
            height: "200px",
            maxWidth: "360px",
            objectFit: "contain cover fill",
          }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 50) + "...."}</h5>
          <p className="card-text">
            {description
              ? description.slice(0, 90) + "...."
              : defaultDescription.slice(0, 90) + "..."}
          </p>
          <a href={url} className="btn btn-primary">
            Read more
          </a>
        </div>
      </div>
    </>
  );
}

export default NewsItem;
