function ShowData({data}) {
    return (
        <div className="moviedataContainer">
            <div>
                <h1 className="movieTitle">{data.Title}</h1>
            </div>
            <div className="movieDatasubContainer">
            <div className="column1">
                <img src={data.Poster} alt="img here" />
            </div>
            <div className="column2">
                <h3>Director : </h3>{data.Director}
                <h3>Cast : </h3>{data.Actors}
                <h3>Plot : </h3>{data.Plot}
            </div>
            </div>
        </div>
    )
}

export default ShowData
