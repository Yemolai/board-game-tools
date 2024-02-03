import { useMemo } from "react"

const PeopleKeys = [
  'Seargent',
  'Florist',
  'Cook',
  'Butler',
  'Medic',
  'Dancer',
  'Gravedigger',
  'Lawyer'
] as const

const WeaponsKeys = [
  'Shotgun',
  'Shovel',
  'Crowbar',
  'Scissors',
  'Chemical',
  'Poison',
  'Knuckles',
  'Knife'
] as const

const PlacesKeys = [
  'Restaurant',
  'TownHall',
  'Floriculture',
  'Club',
  'Hospital',
  'Mansion',
  'Graveyard',
  'TownSquare',
  'Hotel',
  'Bank',
  'Station'
]

export default function TrackerPage() {
  const columns = useMemo(() => {
    return [
      { title: 'Suspeitos', key: 'people', values: PeopleKeys },
      { title: 'Armas', key: 'weapon', values: WeaponsKeys },
      { title: 'Locais', key: 'place', values: PlacesKeys },
    ]
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-6">
      {columns.map((column) => {
        return (
          <div key={`${column.key}_column`} className="flex flex-col gap-y-2">
            <h2>{column.title}</h2>
            {column.values.map((value, idx) => {
              const key = `${column.key}_${idx}`
              return (<div key={key} className="grid grid-cols-2 gap-x-2">
                <p>{value}</p>
                <input type="checkbox" name={key}/>
              </div>)
            })}
          </div>
        )
      })}
    </div>
  )
}