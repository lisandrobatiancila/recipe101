function FavoritesCard ({ favorites }) {
    console.log(favorites)
    return (
        <div>
            {
                favorites?
                    favorites.map((favorite, i) =>
                        <div key={ i }>
                            { favorite.title }
                        </div>
                    )
                    :
                    "no favorites!."
            }
        </div>
    )
}

export default FavoritesCard;