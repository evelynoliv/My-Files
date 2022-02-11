import express, { Request, Response } from "express"
import cors from "cors"
import { AddressInfo } from "net";
import { User, users, Date } from "./data";

const app = express()

app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

app.get('/hello', (req: Request, res: Response) => {
  res.status(200).send("Hello World")
})

app.get("/users", (req: Request, res: Response) => {
  res.status(200).send(users)
})


app.post("/user", (req: Request, res: Response) => {
  
  try {

    const { name, cpf, birthDate} = req.body

    const currentDate: Date = {
        day: new Date().getDate(),
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
      }

   
    const userBirthDate: string[] = birthDate.split("/")
   
    const birthDateConvert: Date ={
      day: Number(userBirthDate[0]),
      month: Number(userBirthDate[1]),
      year: Number(userBirthDate[2]),
    }
   
  
 
    if (!name || !cpf || !birthDate) {
      res.status(422)
      throw new Error("Dados errados, tente novamente")
    }

    if (currentDate.year - birthDateConvert.year < 18){
      res.status(401)
      throw new Error("Serviço apenas para maiores de 18 anos")
    }
    else if (currentDate.year - birthDateConvert.year === 18)
    if (currentDate.month < birthDateConvert.month){
      res.status(401)
      throw new Error("Serviço apenas para maiores de 18 anos")
    }
    else if (currentDate.month === birthDateConvert.month)
      if (currentDate.day < birthDateConvert.day){
      res.status(401)
      throw new Error("Serviço apenas para maiores de 18 anos")
    }

    const newUser: User = {
      name,
      birthDate,
      cpf,
      balance: 0,
      transactions: []
    }

    users.push(newUser)
    res.status(200).send({ message: "Conta criada com sucesso!" })
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

app.get("/users/:cpf", (req: Request, res: Response)=>{
  let errorCode = 400
  try{
    const {name, cpf} = req.params
    res.status(200).send("Deu bom!")
  }catch(error: any){
    res.status(errorCode).send("Deu ruim!")
  }
})

app.put("/clients/", (req: Request, res: Response)=>{
  let errorCode = 400
  try{
    res.status(200).send("Deu bom!")
  }catch(error: any){
    res.status(errorCode).send("Deu ruim!")
  }
}) 