export function DateComponent(){

    const date = new Date()
    const day = date.getDate()

    let dayFormated = day < 10 ? `0${day}` : day

    const monthNames = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ']
    const month = monthNames[date.getMonth()]

    const year = date.getFullYear()

   


    return(

        <div className="flex items-center font-Roboto gap-2 text-purple-900">
            <div className="text-4xl font-bold text-purple-400">{dayFormated}</div>
            <div className="flex flex-col items-center">
                <div className="font-medium text-sm leading-none">{month}</div>
                <div className="font-medium text-sm leading-none">{year}</div>
            </div>
        </div>
    )
}