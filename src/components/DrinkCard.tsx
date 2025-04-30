import { Drink } from "../types"


type DrinkCardProps = {
    drink: Drink
}

export const DrinkCard = ({drink} : DrinkCardProps) => {
  return (
    <div>
        <h2 className="">{drink.strDrink}</h2>
    </div>
  )
}
