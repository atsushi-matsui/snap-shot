import Image from "./Image";

const Gallery = props => {
    const result = props.data;
    let images;
    if(result.length > 0){
        images = result.map(image => {
            let farm = image.farm;
            let server = image.server;
            let id = image.id;
            let secret = image.secret;
            let title = image.title;
            let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
            return <Image url={url} key={id} alt={title} />;
        })
    }
 
    return (
        <div>
          <ul>{images}</ul>
        </div>
    );
}

export default Gallery;
