function ShowData({data}) {
    return (
        <div className="moviedataContainer">
            <div className="titleDiv">
                <h1 className="movieTitle">{data.Title}</h1>
                <h3 className="movieRating">IMDB Rating : {data.imdbRating}</h3>
            </div>
            <div className="movieDatasubContainer">
            <div className="column1">
                <img src={data.Poster} alt="img here" />
            </div>
            <div className="column2">
                <h3>Director : </h3>{data.Director}
                <h3>Cast : </h3>{data.Actors}
                <h3>Release Year : </h3>{data.Released}
            </div>
            </div>
        </div>
    )
}

export default ShowData
