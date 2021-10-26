import {CarbonIconType} from '@carbon/icons-react'
import Image from 'next/image'
interface IFavoriteProps {
    favorites: favoriteObject[]
}
interface favoriteObject {
    name: string,
    icon: CarbonIconType
}
const FavoritesList: React.FunctionComponent<IFavoriteProps> = (props) => {
    const listFavorites = props.favorites.map((favorite, i)=>

    <li key={i}>
        {favorite.name}
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={10} />
    </li>
    )
    return (
        <ul>
            {listFavorites}
        </ul>
    )
}

export default FavoritesList