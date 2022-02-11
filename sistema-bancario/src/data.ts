export type User = {name: string, cpf: string, birthDate: string, balance: number, transactions: Transaction[] }

export type Date = { year: number, month: number, day: number}

export type Transaction = {value: number, date: string, description: string }

export const user: Users[] = [
    {
        name: "Evelyn",
        birthDate: "10/10/2010",
        cpf:"123.456.789-91",
        balance: 0,
        transactions: []
    }
]