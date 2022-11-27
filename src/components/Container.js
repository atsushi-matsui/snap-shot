import { useContext, useState, useEffect } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Gallery from "./Gallery";

const Container = ( {searchTerm} ) => {
    const {runSearchQuery, images, loading} = useContext(PhotoContext);
    useEffect( () => {
        console.log(searchTerm);
        runSearchQuery(searchTerm);
    }, [searchTerm])

    return (
        <div className="photo-container">
            <Gallery data={images} />
        </div>
    );
};

export default Container
