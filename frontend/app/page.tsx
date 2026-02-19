"use client"
import { useEffect, useState } from "react";
import api from "./api";
import toast from "react-hot-toast";
type Transaction = {
  id : string ;
  text:string;
  amount: number;
  created_at: string;
}

export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const getTransactions = async()=> {
    try {
      const res = await api.get<Transaction[]>("transactions/")
      setTransactions(res.data)
      toast.success("Transactions chargées")
    } catch (error) {
      console.error("Erreur chargement transactions" , error);
      toast.error("Erreur chargement transactions");
      
    }
  }

  useEffect(() => {
    getTransactions()
  }, []);

  const amounts = transactions.map((t) => Number(t.amount)   || 0 )
  const balance = amounts.reduce((acc , item) => acc + item , 0)
  const income = 
  amounts.filter((a) => a > 0).reduce((acc , item) => acc + item , 0)

  const expense = 
  amounts.filter((a) => a < 0).reduce((acc , item) => acc + item , 0)



  return (
    <button className="btn btn-sm">
      terence
    </button>
 
  );
}
